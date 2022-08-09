/*
  função para checar as informaçãoes de login.
  Pega o valor digitado pelo usuario e compara com o valor das variaveis, caso algo não esteja de acordo, gera um alerta informando que esta errado, e ira alterar o tipo do display do elemento html, utilizando css, para que tenha a opção de relembrar a senha , caso os valores passados baterem fará login normalmente sendo redirecionado para outra pagina
*/
let usuario='rntcursos@gmail.com'
let password='12345678'

function check_login(){
  let email=document.getElementById('email').value
  let senha=document.getElementById('senha').value

  if(usuario== email && password==senha){
    document.location.href='login.html'//sendo redirecionado
  } else{
    alert('Usuario ou senha errados')
    document.getElementById('forget').style.display='flex'//desocultando elemento
  }

}