const noticias = [
  {
    id: 1,
    titulo: "Messi marca golaço em estreia",
    imagem: "images/messi_gol.png",
    resumo: "O craque argentino brilhou em sua primeira partida pelo novo clube.",
    conteudo: `Lionel Messi marcou um gol em sua estreia pelo Inter Miami, na vitória de 2 a 1 sobre o Cruz Azul pela Leagues Cup. 
Detalhes da estreia e do gol
Data: 21 de julho de 2023.
O jogo: Inter Miami x Cruz Azul, pela Leagues Cup.
A entrada: Messi entrou no segundo tempo da partida.
O gol: Aos 49 minutos do segundo tempo, ele marcou um golaço de falta, dando a vitória ao Inter Miami. 
Vale ressaltar que ele também fez um "gol fantasma" na estreia do Inter Miami no Mundial de Clubes contra o Al-Ahly, em junho de 2025, no qual a bola bateu na rede pelo lado de fora e enganou a torcida.`
  },
  {
    id: 2,
    titulo: "Cruzeiro contrata Keny Arroyo",
    imagem: "images/cruzeiro_Keny.png",
    resumo: "Atacante colombiano chega para reforçar o elenco celeste.",
    conteudo: `O Cruzeiro contratou o atacante equatoriano Keny Arroyo por um valor que supera 8 milhões de euros (cerca de R$ 50,7 milhões) em 2025, garantindo 50% dos direitos do jogador, que assinou contrato até o final de 2029, segundo a CNN Brasil e o ge. O atleta, que chegou do Besiktas, é considerado uma promessa do futebol, com experiência na Seleção Equatoriana e um potencial de alto retorno técnico e financeiro para a Raposa.`
  },
  {
    id: 3,
    titulo: "Neymar volta aos treinos após lesão",
    imagem: "images/neymar_treino.jpg",
    resumo: "O atacante brasileiro deve retornar aos gramados em breve.",
    conteudo: `A previsão é que o atacante retorne aos gramados somente nas últimas rodadas do Campeonato Brasileiro de 2025, o que significa que ele não estará disponível antes de novembro. Segundo o presidente do Santos, Marcelo Teixeira, Neymar deve voltar em um mês.`
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("index.html") || path.endsWith("/")) {
    const container = document.querySelector("#noticias-container .row");

    noticias.forEach(noticia => {
      const col = document.createElement("div");
      col.classList.add("col-md-4");

      col.innerHTML = `
        <div class="card h-100">
          <img src="${noticia.imagem}" class="card-img-top" alt="${noticia.titulo}">
          <div class="card-body">
            <h3 class="card-title">${noticia.titulo}</h3>
            <p class="card-text">${noticia.resumo}</p>
            <a href="detalhes.html?id=${noticia.id}" class="btn btn-primary mt-2">Ler mais</a>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  }

  if (path.includes("detalhes.html")) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const noticia = noticias.find(n => n.id === id);
    const main = document.querySelector("main");

    if (noticia && main) {
      main.innerHTML = `
        <h1>${noticia.titulo}</h1>
        <img src="${noticia.imagem}" alt="${noticia.titulo}" class="img-fluid mb-3">
        <p>${noticia.conteudo}</p>
        <a href="index.html" class="btn btn-primary mt-2">Voltar</a>
      `;
    } else if (main) {
      main.innerHTML = `<p>Notícia não encontrada.</p><a href="index.html">Voltar</a>`;
    }
  }
});
