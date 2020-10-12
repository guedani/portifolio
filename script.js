var hamburguer = document.querySelector(".hamburguer") /*Variavel que busca a classe hamburguer, para o JS conseguir observar esta classe*/

hamburguer.addEventListener("click", function(){ /*Função que espera um clique na classe hamburguer*/
    document.querySelector(".conteiner").classList.toggle("show-menu"); /*Primeiramente ele pega a classe sidebar e lista a classes vai adicionar a classe show-menu a classe sidebar com o toggle*/
});

// document.querySelector(".hamburguer").addEventListener("click", () =>
//   document.querySelector(".container").classList.toggle("show-menu")
// );
