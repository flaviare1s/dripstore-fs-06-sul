import fs from 'fs';

const nome = process.argv[2];
const produto = process.argv[3];
const valor = process.argv[4];

console.log(nome, produto, valor);

function getFileOrCreate() {
  try {
    return fs.readFileSync('clientes.txt', 'utf8');
  } catch (_e) {
    fs.writeFileSync('clientes.txt', '');
    return '';
  }
}

const file = getFileOrCreate();

const newFile = `${file}${nome}, ${produto}, ${valor}\n`;
fs.writeFileSync('clientes.txt', newFile);


