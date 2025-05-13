const btnIniciar = document.getElementById('btn-iniciar');
    const telaInicial = document.getElementById('telaInicial');
    const telaNome = document.getElementById('telaNome');
    const r1 = document.getElementById('rachadura1');
    const r2 = document.getElementById('rachadura2');
    const r3 = document.getElementById('rachadura3');

    let pressTimer;

    btnIniciar.addEventListener('mousedown', () => {
      pressTimer = setTimeout(() => {
        r1.classList.add('show');
      }, 1000);

      setTimeout(() => {
        r2.classList.add('show');
      }, 3000);

      setTimeout(() => {
        r3.classList.add('show');
      }, 5000);
    });

    btnIniciar.addEventListener('mouseup', () => {
      clearTimeout(pressTimer);
      telaInicial.style.transform = 'translateY(-100%)';
      telaNome.style.transform = 'translateY(0%)';
    });

    btnIniciar.addEventListener('mouseleave', () => {
      clearTimeout(pressTimer);
    });
