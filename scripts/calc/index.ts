import { createInterface } from "readline";

import { parse } from './parse';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (): Promise<null> =>
    new Promise((resolve) => {
        rl.question("> ", (answer: string) => {
            const result = parse(answer);
            ;

            if (result !== undefined) {
                // eslint-disable-next-line no-console
                console.log(`Result: ${result}`);
            }

            resolve(null);
        });
    });

async function app(): Promise<null> {
    while (true) {
        await question();
    }
}

app();
