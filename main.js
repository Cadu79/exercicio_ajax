document.getElementById("simples-formulario-ajax").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;

    // Validar se as senhas correspondem
    if (senha !== confirmarSenha) {
        alert("As senhas não correspondem!");
        return;
    }

    // Validar o formato do e-mail
    if (!validateEmail(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }

    // Criar objeto de dados a ser enviado
    var data = {
        name: name,
        email: email,
        senha: senha
        // Você pode adicionar mais campos aqui conforme necessário
    };

    // Fazer requisição AJAX usando fetch
    fetch("seu_arquivo_de_processamento.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (response.ok) {
            // Resposta do servidor
            alert("Dados enviados com sucesso!");
            // Você pode adicionar mais ações aqui conforme necessário
        } else {
            alert("Erro ao enviar dados. Tente novamente mais tarde.");
        }
    })
    .catch(function(error) {
        console.error("Erro:", error);
        alert("Erro ao enviar dados. Tente novamente mais tarde.");
    });
});

// Função para validar o formato do e-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
