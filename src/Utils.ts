import { CompletionResult } from "gpt4all";
import readline from 'node:readline';

const Utils = {

    async promptUser():Promise<string> {
        return new Promise((res, rej) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question(`chat:> `, msg => {
                rl.close();
                res(msg);
            });
        });
    },

    async printGenerator(gen:AsyncGenerator<string, CompletionResult, unknown>) {
        process.stdout.write("\x1b[91m ");
        for await (const chunk of gen) {
            process.stdout.write(chunk);
        }

        process.stdout.write(" \x1b[0m\n");
    }
}

export default Utils;