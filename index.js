const vscode = require('vscode');
require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

function openaiCommand() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showErrorMessage("No text editor is active");
        return;
    }
    let selection = editor.selection;
    let text = editor.document.getText(selection);

    openai.createCompletion({
      model: "text-davinci-002",
      prompt: text,
      max_tokens: 7,
      temperature: 0,
    })
    .then((response) => {
      vscode.window.showInformationMessage(response.choices[0].text);
    })
    .catch((error) => {
      vscode.window.showErrorMessage(error);
    });
}

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.openai', openaiCommand);
    context.subscriptions.push(disposable);
}
exports.activate = activate;
