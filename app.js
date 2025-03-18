//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = "";
    } else {
        alert("Nome inválido ou já adicionado!");
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista

    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio!");
        return;
    }

    let sorteados = [...amigos];
    const resultados = [];

    amigos.forEach((amigo) => {
        const candidatos = sorteados.filter((s) => s !== amigo);
        
        if (candidatos.length === 0) {
            alert("Sorteio impossível! Tente novamente.");
            return;
        }

        const sorteado = candidatos[Math.floor(Math.random() * candidatos.length)];
        resultados.push(`${amigo} tirou ${sorteado}`);
        sorteados.splice(sorteados.indexOf(sorteado), 1);
    });

    exibirResultados(resultados);
}

function exibirResultados(resultados) {
    const listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = ""; // Limpa os resultados anteriores

    resultados.forEach((res) => {
        const item = document.createElement("li");
        item.textContent = res;
        listaResultados.appendChild(item);
    });
}
