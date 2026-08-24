// Botão do topo leva até a seção de contato
document.getElementById('hero-btn').addEventListener('click', () => {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});

// Botão de contato valida o email e mostra uma mensagem
document.getElementById('contato-btn').addEventListener('click', () => {
  const email = document.getElementById('email-input').value;
  const mensagem = document.getElementById('mensagem-contato');

  if (email.includes('@') && email.includes('.')) {
    mensagem.textContent = `Obrigado! Vamos te responder em ${email} em breve.`;
  } else {
    mensagem.textContent = 'Por favor, digite um email válido.';
  }
});
