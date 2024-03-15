import fs from "fs";

function getFileOrCreate(callback) {
  try {
    return fs.readFile("chamada.txt", "utf8", callback);
  } catch (_e) {
    fs.writeFileSync("chamada.txt", "");
    return fs.readFile("chamada.txt", "utf8", callback);
  }
}

function main() {
  const data = process.argv[2];
  const nome = process.argv[3];

  getFileOrCreate((_err, file) => {
    const lines = file.split("\n");
    const entradas = lines.reduce((acc, line) => {
      const [data, nome] = line.split(", ");
      if (!nome) {
        return acc;
      }
      if (!acc[data]) {
        acc[data] = [];
      }
      acc[data].push(nome);
      return acc;
    }, {});

    console.log(entradas);

    const dataAtual = entradas[data] || [];

    if (!dataAtual.length) {
      entradas[data] = [];
    }

    const isPessoaInData = dataAtual.includes(nome);

    if (isPessoaInData) {
      entradas[data] = entradas[data].filter((pessoa) => pessoa !== nome);
    } else {
      entradas[data].push(nome);
      entradas[data] = entradas[data].sort();
    }

    const newLines = Object.keys(entradas)
      .sort((i, j) => {
        console.log(Date.parse(i));
        console.log(Date.parse(j));
        return Date.parse(i) > Date.parse(j) ? 1 : -1;
      })
      .reduce((acc, data) => {
        const pessoas = entradas[data];
        console.log(data, pessoas);

        for (const pessoa of pessoas) {
          acc.push(`${data}, ${pessoa}`);
        }
        return acc;
      }, []);

    fs.writeFileSync("chamada.txt", newLines.join("\n"));

    console.log(newLines);
  });
}

main();
