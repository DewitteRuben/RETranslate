#!/usr/bin/env node

const process = require("process");
process.removeAllListeners("warning");

const fs = require("fs").promises;
const languages = require("./languages");
const { Command } = require("commander");
const chalk = require("chalk");
const fetch = require("node-fetch");
const program = new Command();
const error = chalk.bold.red;
const prompts = require("prompts");
const sectionRegExp = /- .* -/g;
const { Translate } = require("@google-cloud/translate").v2;
require("dotenv").config();

if (!process.env.GOOGLE_TRANSLATE_API_KEY) {
  error("Please set your Google Translate API Key env variable using 'GOOGLE_TRANSLATE_API_KEY='");
  return; 
}

const translate = new Translate({
  key: process.env.GOOGLE_TRANSLATE_API_KEY,
});

program.version("1.0.0");
program.option(
  "-p, --prefix <prefix>",
  "prefix of locale file",
  "locale-reswarm"
);
program.option("-d, --dev", "if developing");
program.option(
  "-dir, --directory <path>",
  "directory of language folders",
  "frontend/src/modules/language"
);
program.option(
  "-e, --entry <lang>",
  "entry point language for translation",
  "en"
);
program.option(
  "-var, --variable <name>",
  "name of globally exposed language object variable",
  "languageReswarm"
);
program.parse(process.argv);

const isDev = program.dev;
const fileNamePrefix = program.prefix;
const entryPoint = program.entry;
const languageObjectVariable = program.variable;
const directory = isDev ? "./language" : program.directory;

function getFileName(language) {
  return `${fileNamePrefix}-${language}.js`;
}

async function selectTranslationSection(sections) {
  const select = {
    type: "select",
    name: "name",
    message: "Pick a section",
    choices: sections.map((s) => ({ title: s.data, value: s.data })),
  };

  return prompts(select);
}

function getSectionNames(lines) {
  const sectionHeaders = [];
  const endIndex = getEndOfFileIndex(lines);

  for (let i = 0, j = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(sectionRegExp);
    if (match) {
      sectionHeaders.push({ data: match[0], index: i, end: endIndex });
    }
  }
  return sectionHeaders;
}

function getEndOfFileIndex(lines) {
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("}") && lines.length - i < 10) {
      return i;
    }
  }
  return -1;
}

async function promptSection(lines) {
  const firstFile = lines[0];
  const firstFileLang = firstFile.lang;

  const sections = getSectionNames(firstFile.content);
  const { name } = await selectTranslationSection(sections);
  const nextSectionIndex = sections.findIndex((s) => s.data === name) + 1; // get index of firstFile
  const nextSection = sections[nextSectionIndex];
  const index = nextSection
    ? nextSection.index
    : getEndOfFileIndex(firstFile) - 1;

  const sectionsByLanguage = lines.slice(1).map((f) => ({
    sections: getSectionNames(f.content),
    lang: f.lang,
  }));

  const otherSectionIndexes = sectionsByLanguage.map((sBL) => {
    const nextSectionIndex = sBL.sections.findIndex((s) => s.data === name) + 1;
    const nextSection = sBL.sections[nextSectionIndex];
    const endOfFile = sBL.sections.find((s) => s.end).end;
    return {
      lang: sBL.lang,
      index: nextSection ? nextSection.index - 1 : endOfFile - 1,
    };
  });

  return [{ lang: firstFileLang, index: index - 1 }, ...otherSectionIndexes];
}

async function promptKeyAndValue() {
  const values = [
    {
      type: "text",
      name: "key",
      message: `Enter the key of the translation`,
    },
    {
      type: "text",
      name: "value",
      message: `Enter the initial value of the translation`,
    },
  ];

  return prompts(values);
}

function insertIntoLines(lines, index, value) {
  return [...lines.slice(0, index + 1), value, ...lines.slice(index + 1)];
}

function updateAllLines(allLines, insertPositions, values) {
  return allLines.map(({ lang, content }) => {
    const updatedContent = insertIntoLines(
      content,
      insertPositions.find((pos) => pos.lang === lang).index,
      values.find((v) => v.lang === lang).value
    );

    const endIndex = getEndOfFileIndex(updatedContent);
    const secondLastLine = updatedContent[endIndex - 2].trimEnd();

    if (secondLastLine.charAt(secondLastLine.length - 1) !== ",") {
      updatedContent[endIndex - 2] = secondLastLine + ",";
    }

    return {
      lang,
      content: updatedContent,
    };
  });
}

function getTranslatedValues(languages, key, value) {
  const translatePromises = languages.map(async (lang) => {
    const [translation] = await translate.translate(value, { to: lang });
    return {
      lang,
      value: `    ${key}: '${translation}',`,
    };
  });
  return Promise.all(translatePromises);
}

function writeUpdatesToFile(updates) {
  return updates.map(
    async ({ lang, content }) =>
      await fs.writeFile(
        `${directory}/${lang}/${getFileName(lang)}`,
        content.join("\n")
      )
  );
}

(async function () {
  const files = await fs.readdir(directory);

  const foundLanguageFolders = files.filter((f) => languages.includes(f));
  if (!foundLanguageFolders.length) {
    return console.log(
      error("No language folders were found, is the language folder correct?")
    );
  }

  const localeFilesPromises = foundLanguageFolders.map(async (folderName) => ({
    lang: folderName,
    content: await fs.readFile(
      `${directory}/${folderName}/${getFileName(folderName)}`,
      "utf8"
    ),
  }));

  const localeFilesValues = await Promise.all(localeFilesPromises);

  const arrayOfFileLines = localeFilesValues.map(({ lang, content }) => ({
    lang,
    content: content.split("\n"),
  }));

  const { key, value } = await promptKeyAndValue();

  const values = await getTranslatedValues(foundLanguageFolders, key, value);

  console.log(chalk.blue("In what section should the translation be added?"));

  const insertPositionsByLang = await promptSection(arrayOfFileLines);

  const updatedLines = updateAllLines(
    arrayOfFileLines,
    insertPositionsByLang,
    values
  );

  try {
    const results = await Promise.all(writeUpdatesToFile(updatedLines));
    console.log(chalk.green("Succesfully translated to all files!"));
  } catch (err) {
    error(err.message);
  }
})();
