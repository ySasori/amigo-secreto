let amigos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const amigoInput = document.getElementById("amigo");
    const nome = amigoInput.value.trim();  // Remove espaços extras antes e depois do nome

    // Validação da entrada
    if (nome === "") {
        // Exibe um alerta se o campo estiver vazio
        alert("Por favor, insira um nome.");
        return;  // Impede que o nome vazio seja adicionado ao array
    }

    // Atualiza o array de amigos se a entrada for válida
    amigos.push(nome);

    // Atualiza a lista no HTML com o nome do amigo
    exibirAmigos();  // Chama a função para atualizar a lista de amigos

    // Limpa o campo de entrada
    amigoInput.value = "";
}

function exibirAmigos() {
    // Obtém o elemento da lista onde os amigos serão exibidos
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista existente antes de adicionar novos elementos
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e cria elementos <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement("li");
        item.textContent = amigos[i];  // Define o texto do item como o nome do amigo
        listaAmigos.appendChild(item);  // Adiciona o item à lista
    }
}

function sortearAmigo() {
    // Valida se há amigos disponíveis para o sorteio
    if (amigos.length === 0) {
        alert("Não há amigos suficientes para sortear. Adicione pelo menos um amigo.");
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho do array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado no elemento de resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
