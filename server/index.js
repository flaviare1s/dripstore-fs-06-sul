import fs from 'fs';
import { EventEmitter } from "events";

// const nome = process.argv[2];
// const produto = process.argv[3];
// const valor = process.argv[4];

// console.log(nome, produto, valor);

function getFileOrCreate() {
  try {
    return fs.readFileSync('clientes.txt', 'utf8');
  } catch (_e) {
    fs.writeFileSync('clientes.txt', '');
    return '';
  }
}

const eventEmitter = new EventEmitter();

eventEmitter.on("emissao1", (nome, idade) => {
  console.log('emissao1', nome, idade);
});

eventEmitter.on("emissao2", (nome, idade) => {
  console.log('emissao2', nome, idade);
  const file = getFileOrCreate();
  const newFile = `${file}${nome}, ${idade}\n`;
  fs.writeFileSync('clientes.txt', newFile);
});

eventEmitter.emit("emissao2", "Lucas", 30);

setTimeout(() => {
  eventEmitter.emit("emissao1", "Lucas", 30);
}, 2000);