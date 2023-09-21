    function exibirDados() {
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var mensagem = document.getElementById('mensagem').value;

        var dados = "Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem;
        alert(`Cadastro de ${nome} realizado com sucesso!`);
    }
