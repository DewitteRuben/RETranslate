# RETranslate

<img src="https://github.com/DewitteRuben/RETranslate/blob/master/retrans%20demo.gif?raw=true" alt="demo gif" title="demo gif" />

## Setup

Create a `.env` file in the root of your Reswarm Project and include your Google Cloud Translate API Key

```
GOOGLE_TRANSLATE_API_KEY=KEY_HERE
```

## Usage

```
Usage: translate [options]

Options:
  -V, --version             output the version number
  -p, --prefix <prefix>     prefix of locale file (default: "locale-reswarm")
  -d, --dev                 if developing
  -dir, --directory <path>  directory of language folders (default: "frontend/src/modules/language")
  -e, --entry <lang>        entry point language for translation (default: "en")
  -var, --variable <name>   name of globally exposed language object variable (default: "languageReswarm")
  -h, --help                display help for command
```
