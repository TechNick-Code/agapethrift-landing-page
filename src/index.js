const hamburger = document.getElementById('hamburger');
        const nav = document.getElementById('nav');

        hamburger.addEventListener('click', () => {
            if (nav.classList.contains('right-[-50em]')) {
                nav.classList.remove('right-[-50em]');
                nav.classList.add('right-0', 'duration-200', 'shadow-[0_0_10px_rgba(0,0,0,0.1)]');
                // nav.classList.add();
                // nav.style.right = '0';
            } else {
                nav.classList.add('right-[-50em]');
                nav.classList.remove('-right-[-50em]');
                // nav.style.right = '-50em';
            }
        });