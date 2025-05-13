    const btnIniciar = document.getElementById('btn-iniciar');
    const telaInicial = document.getElementById('telaInicial');
    const telaNome = document.getElementById('telaNome');

    let pressTimer;

    btnIniciar.addEventListener('mousedown', () => {
      pressTimer = setTimeout(() => {
        telaInicial.style.transform = 'translateY(-100%)';
        telaNome.style.transform = 'translateY(0%)';
      }, 2000); // 2 segundos segurando
    });

    btnIniciar.addEventListener('mouseup', () => {
      clearTimeout(pressTimer);
    });

    btnIniciar.addEventListener('mouseleave', () => {
      clearTimeout(pressTimer);
    });
