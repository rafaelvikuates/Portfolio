// Selecionar o elemento com o texto a ser animado
const textoSobre = document.querySelector('.txt-sobre p');

// Função para animar o texto
function animarTexto() {
    const textoCompleto = textoSobre.innerHTML; // Alterado para innerHTML
    textoSobre.innerHTML = ''; // Alterado para innerHTML

    // Esconder o texto inicialmente
    textoSobre.style.display = 'none';

    // Mostrar o texto e iniciar a animação
    textoSobre.style.display = 'block';

    let i = 0;
    const typingSpeed = 0.1; // Ajuste a velocidade em milissegundos

    const typeWriter = () => {
        if (i < textoCompleto.length) {
            textoSobre.innerHTML += textoCompleto.charAt(i); // Alterado para innerHTML
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    };

    typeWriter();
}

// Verificar se o usuário rolou até a seção "sobre"
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animarTexto();
            observer.unobserve(entry.target);
        }
    });
});

const sectionSobre = document.getElementById('sobre');
observer.observe(sectionSobre);
