const form = document.getElementById("formulario-contato");

form.addEventListener("submit", function(event) {
    event.preventDefault(); //Impede o envio do formulario antes de ele ser validado

    const nome = document.getElementById("nome").value.trim(); //captura o valor de nome e remove espaços em branco
    const email = document.getElementById("email").value.trim(); //captura o valor de email e remove espaços em branco
    const mensagem = document.getElementById("mensagem").value.trim(); //captura o valor de mensagem e remove espaços em branco

    if (nome === "" || email === "" || mensagem === "") {
        alert("Preencha todos os campos.");
        return;
    } //validaçao se campos estão preenchidos

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // cria expressao regular que define o formato de um email válido

    if (emailValido.test(email) === false) {
        alert("Digite um email válido.");
        return;
    } // validacao por meio de regex para verificar se o email é válido

    alert("Formulário enviado com sucesso!");

    form.submit(); //envia a mensagem caso todas as validaçoes tenham sido realizadas com sucesso

});

// adiciona funcionalidade de tema claro/escuro no corpo da página
const botaoClaroEscuro = document.getElementById("claro-escuro");
botaoClaroEscuro.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode"); // adiciona/remove a classe "dark-mode" aos elementos dentro de body

    if(document.body.classList.contains("dark-mode")) {
        botaoClaroEscuro.textContent = " ☀️ Tema claro";
    } else {
        botaoClaroEscuro.textContent = " 🌙 Tema escuro";
    }
});