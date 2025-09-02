(function () {
    var btn = document.getElementById('hambtn'),
        menu = document.getElementById('mobileMenu');
    btn.addEventListener('click', function () {
        var open = menu.classList.toggle('hidden');
        menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    });
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a, #mobileMenu a");
    function onScroll() {
        let scrollPos = window.scrollY + 100;
        sections.forEach(sec => {
            if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sec.id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
})();