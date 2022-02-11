

const botao = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

botao.addEventListener('click', () => {
    //no meu css existe uma classe que se chama show-links
    //e a função dessa classe é mostrar a minha lista de links
    //por isso irei utilizar o toggle para adicionar
    //e remover essa classe da minha div de links
    links.classList.toggle('show-links')
    //console.log(links.classList)
    /*if(links.classList.contains('show-links')){
        links.classList.remove('show-links')
    }else {
        links.classList.add('show-links')
    }*/
})
//classList - mostrar/retornar todas as classes
//contains - checa a classList para uma classe especifica
//add - adiciona classe
//remove - remove a classe
//toggle - alterna classe