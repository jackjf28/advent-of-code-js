import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import os from "os";

export function getInput(moduleUrl) {
	const __filename = fileURLToPath(moduleUrl);
	const __dirname = dirname(__filename);
	return readFileSync(resolve(__dirname, './input.txt'), {
		encoding: 'utf-8',
	});
}


export function splitLines(input){
	return input.trim().split(os.EOL);
}
