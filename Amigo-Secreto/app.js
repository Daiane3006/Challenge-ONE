//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let lista = [];

function adicionarAmigo() {

    let amigo = document.getElementById('amigo');
    let item = amigo.value.trim();

    if (item) {
        lista.push(item);
        let li = document.createElement('li');
        li.textContent = item;

        document.getElementById('listaAmigos').appendChild(li);
        amigo.value = '';
    }else{
        alert('Por favor, insira um nome!');
    }
}

function sortearAmigo() {
    if (lista.length > 0) {
        let sorteado = lista[Math.floor(Math.random() * lista.length)];
        document.getElementById('resultado').textContent = "O amigo secreto sorteado é: " + sorteado;

        document.getElementById('listaAmigos').innerHTML = '';
        lista[sorteado];
    }

}
