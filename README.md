# VSCode OpenAI Extension

This extension allows you to use the OpenAI API to complete text in VSCode editor.

## Usage

1. Install the extension from the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=<your-extension-name>)

2. Open a file in VSCode and make a text selection

3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the command palette

4. Type `OpenAI` and select the `OpenAI: Complete text` command

5. The extension will call the OpenAI API and show the completion result in an information message.

## Requirements

- You need to have an OpenAI API key, you can get one [here](https://beta.openai.com/signup/).

- You will also need to create a .env file in the root of your extension's folder, with the following content :

`OPENAI_KEY=<YOUR-API-KEY>`

Don't forget to replace <YOUR-API-KEY> with your OpenAI API key.

## Customization

You can customize the extension by changing the model and the parameters passed to the OpenAI API.

## Issues

If you encounter any issues or have any suggestions for improvements, please [open an issue](https://github.com/<username>/<repo-name>/issues).