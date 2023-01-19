const vscode = require('vscode');
require('dotenv').config()
const openai = require('openai');
openai.apiKey = process.env.OPENAI_KEY;

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.openai', function () {
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage("No text editor is active");
            return;
        }
        let selection = editor.selection;
        let text = editor.document.getText(selection);

        // calling the OpenAI API
        openai.completions({
            prompt: text,
            model: "text-davinci-002",
            max_tokens: 100,
            n: 1,
            stop: '.'
        })
            .then((response) => {
                //handle the response here
                console.log(response)
                vscode.window.showInformationMessage(response.choices[0].text);
            })
            .catch((error) => {
                //handle the error here
                console.error(error)
                vscode.window.showErrorMessage(error);
            });
    });
    context.subscriptions.push(disposable);
}

exports.activate = activate;
