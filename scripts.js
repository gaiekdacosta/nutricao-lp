(function () {
    var btn = document.getElementById('hambtn'),
        menu = document.getElementById('mobileMenu');

    btn.addEventListener('click', function () {
        var open = menu.classList.toggle('hidden');
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    });

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav a[href^='#'], #mobileMenu a[href^='#']");

    function onScroll() {
        let scrollPos = window.scrollY + 120; // ajuste fino pro header fixo
        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                });
                const activeLink = document.querySelector(`nav a[href="#${sec.id}"], #mobileMenu a[href="#${sec.id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
})();
