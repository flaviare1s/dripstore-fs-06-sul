import readline from "readline";
import { EventEmitter } from "events";
import { registrarUmaChamada } from "./chamada.js";

const eventEmitter = new EventEmitter();

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function main() {
  let breakLoop = false;

  eventEmitter.on('hello', () => {
    console.log('world');
  });

  eventEmitter.on('ola', () => {
    console.log('mundo');
  })

  eventEmitter.on("chamada", (a, b) => {
    registrarUmaChamada(a, b);
  });

  while (!breakLoop) {
    const question = await askQuestion("digite o comando: ");
    const commands = question.split(" ");
    if (question === "exit") {
      breakLoop = true;
    }

    eventEmitter.emit(...commands);
  }
}

main();
