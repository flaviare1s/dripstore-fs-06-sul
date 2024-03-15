import readline from "readline";

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

  while (!breakLoop) {
    const question = await askQuestion("digite o comando: ");
    if (question === "exit") {
      breakLoop = true;
    }
  }
}

main();
