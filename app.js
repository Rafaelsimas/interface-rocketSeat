let nomeUsuario;
function login(){
    let aplicacao = document.querySelector('.app-box')
    let containerGeral = document.querySelector('.container-geral')
    let senhaUsuario = document.querySelector('#inputPassword').value
    
    if(senhaUsuario === '123'){
        containerGeral.classList.add('escondido')
        aplicacao.classList.remove('escondido')
    }
}