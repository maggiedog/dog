document.addEventListener('DOMContentLoaded', function() {
    // Mensagem de boas-vindas ao rolar para baixo
    const welcomeMessage = () => {
        const topicsSection = document.getElementById('topics');
        const welcomeDisplayed = sessionStorage.getItem('welcomeDisplayed');

        if (!welcomeDisplayed && topicsSection) {
            window.addEventListener('scroll', function() {
                const sectionTop = topicsSection.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (sectionTop < windowHeight) {
                    alert('Bem-vindo à seção de tópicos de MaggieDog!');
                    sessionStorage.setItem('welcomeDisplayed', 'true');
                    window.removeEventListener('scroll', arguments.callee);
                }
            });
        }
    };

    welcomeMessage();
});
