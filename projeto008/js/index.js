let cartaoAtual = 0;

function esconderCartaoSelecionado() {

  const cartaoSelecionado = document.querySelector(".selecionado");

  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

const btnAvancar = document.getElementById("btn-avancar");

const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) cartaoAtual = -1;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) cartaoAtual = cartoes.length;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
