let usuario='rntcursos@gmail.com'
let password='12345678'

function check_login(){
  let email=document.getElementById('email').value
  let senha=document.getElementById('senha').value

  if(usuario== email && password==senha){
    document.location.href='login.html'
  } else{
    alert('Usuario ou senha errados')
    document.getElementById('forget').style.display='flex'
  }

}