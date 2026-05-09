document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('mainNav');
    const menuToggle = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    
    // 1. Logic Scroll (Tetap ada)
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Logic Auto-Close Mobile Menu
    // Kita cek dulu apakah elemennya ada supaya tidak error
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                // Tutup hanya jika menu sedang terbuka (untuk mobile)
                if (window.innerWidth < 992 && menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
});