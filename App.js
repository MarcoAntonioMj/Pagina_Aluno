// Adiciona um ouvinte de evento para todos os botões "Comentar"
document.querySelectorAll('.comentar').forEach(button => {
    button.addEventListener('click', () => {
      const comentarioInput = button.previousElementSibling;
      const comentario = comentarioInput.value.trim();
      
      if (comentario !== '') {
        // Salva o comentário no localStorage usando a chave única
        const chave = `comentario_${Date.now()}`;
        localStorage.setItem(chave, comentario);
        
        // Limpa o campo de entrada após comentar
        comentarioInput.value = '';
        
        // Informa ao usuário que o comentário foi salvo
        alert('Comentário salvo com sucesso!');
      } else {
        alert('Por favor, insira um comentário.');
      }
    });
  });
  