import { eClientes } from './recuperarClientes';

var id = document.getElementById('id');
var nome = document.getElementById('nome');
var email = document.getElementById('email');
console.log(eClientes);

eClientes
.then( e=> {
    e.map(el => {
        id.innerHTML = el['id'];
        nome.innerHTML = el['nome'];
        email.innerHTML = el['email'];
    })
    console.log(e);
})