// 1. FUNÇÃO DE NAVEGAÇÃO INTERNA (Sistema de Abas/Páginas Únicas)
function mudarPagina(idAlvo, botaoClicado) {
    const telas = document.querySelectorAll('.pagina-tela');
    telas.forEach(tela => tela.classList.remove('ativa'));
    
    const telaDestino = document.getElementById(idAlvo);
    if (telaDestino) {
        telaDestino.classList.add('ativa');
    }

    const botoes = document.querySelectorAll('.btn-menu');
    botoes.forEach(btn => btn.classList.remove('ativo'));
    
    if (botaoClicado) {
        botaoClicado.classList.add('ativo');
    }
}

// 2. BANCO DE DADOS LOCAL SIMULADO EM MEMÓRIA
let produtosLocais = [
    { nome: "Tomate Caipira (Kg)", valor: "R$ 5,90", cidade: "Londrina", numero: "(43) 99999-1122" },
    { nome: "Maço de Espinafre", valor: "R$ 3,00", cidade: "Marialva", numero: "(43) 98888-3344" }
];

function renderizarListaNaVitrine() {
    const boxLista = document.getElementById('listaDeProdutos');
    if (!boxLista) return; 
    boxLista.innerHTML = ""; 

    produtosLocais.forEach(item => {
        const card = document.createElement('div');
        card.className = "card-item";
        card.innerHTML = `  
            📦 • <strong>${item.nome}</strong><br> 
            ‣ Preço: ${item.valor}<br>
            ‣ Local: ${item.cidade}<br>
            ‣ Contato: ${item.numero}`;

        boxLista.appendChild(card);
    });
}

function cadastrarProdutoSimulado() {
    const inputNome = document.getElementById('nomeAlimento');
    const inputPreco = document.getElementById('precoAlimento');
    const inputCidade = document.getElementById('cidadeProdutor');
    const inputNumero = document.getElementById('numeroProdutor');


   if (inputNome.value.trim() === "" || inputPreco.value.trim() === "" || inputCidade.value.trim() === "" || inputNumero.value.trim() === "") {
        alert("Preencha todos os campos cadastrais antes de enviar!");
        return;
    }

    const precoNumerico = parseFloat(inputPreco.value);

    if (isNaN(precoNumerico) || precoNumerico <= 0) {
        alert("Por favor, insira um valor numérico válido e maior que zero para o preço!");
        return;
    }

    const precoFormatado = precoNumerico.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    produtosLocais.push({
        nome: inputNome.value.trim(),
        valor: precoFormatado,
        cidade: inputCidade.value.trim(),
        numero: inputNumero.value.trim()
    });

    inputNome.value = "";
    inputPreco.value = "";
    inputCidade.value = "";
    inputNumero.value = "";
    renderizarListaNaVitrine();
}

// 3. ENVIAR FEEDBACK/OUVIDORIA
function enviarOuvidoriaSimulada() {
    const nome = document.getElementById('nomeUsuario');
    const email = document.getElementById('emailUsuario');
    const mensagem = document.getElementById('mensagemUsuario');

    if (nome.value.trim() === "" || email.value.trim() === "" || mensagem.value.trim() === "") {
        alert("Por favor, preencha todos os campos para enviar sua mensagem!");
        return;
    }

    alert(`Obrigado pelo contato, ${nome.value}! Seu feedback foi enviado com sucesso para a equipe AgroLink.`);

    nome.value = "";
    email.value = "";
    mensagem.value = "";
}

renderizarListaNaVitrine();
renderizarListaNaVitrine();
