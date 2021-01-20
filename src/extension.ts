import { setInterval } from 'timers';
import * as vscode from 'vscode';

function composeTimeStamp(date: Date): string {
	let time: string = date.toLocaleTimeString('en-us', { hour12: false });
	return time;
}
let pclintBar: vscode.StatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right);
pclintBar.show();
let timer = setInterval(function () {
	let timeStamp: string = composeTimeStamp(new Date());
	if (pclintBar.text !== timeStamp) {
		pclintBar.text = timeStamp;
	}

}, 1000);


export function activate(context: vscode.ExtensionContext) {
	let disposableActivate = vscode.commands.registerCommand('glike1.activate-time', () => {
		pclintBar.show();
	});
	context.subscriptions.push(disposableActivate);
	let disposableDeactivate=vscode.commands.registerCommand('glike1.deactivate-time',()=>{
		pclintBar.hide();
	});
	context.subscriptions.push(disposableDeactivate);
}

export function deactivate() {
}