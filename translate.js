const process = require("process");
const fs = require("fs").promises;
const languages = require("./languages");
const { Command } = require("commander");
const chalk = require("chalk");
const fetch = require("node-fetch");
const translate = require("translate-google")
const program = new Command();
const error = chalk.bold.red;

// process.removeAllListeners("warning");
program.version("1.0.0");
program.option(
  "-p, --prefix <prefix>",
  "prefix of locale file",
  "locale-reswarm"
);
program.option(
  "-d, --directory <path>",
  "directory of language folders",
  "../frontend/src/modules/language"
);
program.option(
  "-e, --entry <lang>",
  "entry point language for translation",
  "en"
);
program.option(
  "-v, --variable <name>",
  "name of globally exposed language object variable",
  "languageReswarm"
);
program.parse(process.argv);

const directory = program.directory;
const fileNamePrefix = program.prefix;
const entryPoint = program.entry;
const languageObjectVariable = program.variable;

function getFileName(language) {
  return `${fileNamePrefix}-${language}.js`;
}

function getEntryLanguageObject() {
  try {
    require(`${directory}/${entryPoint}/${getFileName(entryPoint)}`);
    const langObject = this[languageObjectVariable];
    if (!langObject) {
      return error(
        `The language object was not found in the entryPoint file. var: ${languageObjectVariable}`
      );
    }
    return langObject;
  } catch (err) {
    return error(err.message);
  }
}



(async function () {
  const files = await fs.readdir(directory);

  const foundLanguageFolders = files.filter((f) => languages.includes(f));
  if (!foundLanguageFolders.length) {
    return console.log(
      error("No language folders were found, is the language folder correct?")
    );
  }

  const entry = getEntryLanguageObject();
  console.log(entry);

  console.log(Object.keys(entry).length);
})();
