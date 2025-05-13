    const btnIniciar = document.getElementById('btn-iniciar');
    const telaInicial = document.getElementById('telaInicial');
    const telaNome = document.getElementById('telaNome');

    // Simples clique no botão
    btnIniciar.addEventListener('click', () => {
      telaInicial.style.transform = 'translateY(-100%)';
      telaNome.style.transform = 'translateY(0%)';
    });
