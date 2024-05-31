function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function resolverImagensProduto1() {
  await sleep(3000);
  console.log("Imagem resolvida para o produto 1!");
}

async function resolverImagensProduto2() {
  await sleep(2000);
  console.log("Imagem resolvida para o produto 2!");
}

async function resolverImagensProduto3() {
  await sleep(1000);
  console.log("Imagem resolvida para o produto 3!");
}

async function resolverImagensProduto4() {
  await sleep(1000);
  console.log("Imagem resolvida para o produto 4!");
}

async function resolverImagensProduto5() {
  await sleep(1000);
  console.log("Imagem resolvida para o produto 5!");
}

const funcoesParaExecutar = [
  resolverImagensProduto1,
  resolverImagensProduto2,
  resolverImagensProduto3,
  resolverImagensProduto4,
  resolverImagensProduto5,
];

function separateInChunks(array, chunkLimit) {

  // [[func1, func2], [func3, func4], [func5]]
}

// for (const chunk of chunks) {
//   await Promise.all(chunk.map((func) => func()));
// }

// const segundaIteracao = [resolverImagensProduto3(), resolverImagensProduto4()];
// const terceiraIteracao = [resolverImagensProduto5()];
