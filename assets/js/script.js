document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('mainNav');
    const menuToggle = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    
    // ==========================================
    // 1. Inisialisasi Animasi AOS (Animate On Scroll)
    // ==========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Durasi animasi (1000ms = 1 detik)
            once: true,     // Animasi cuma jalan sekali pas di-scroll ke bawah
            offset: 120     // Animasi baru jalan kalau elemen berjarak 120px dari bawah layar
        });
    }

    // ==========================================
    // 2. Logic Scroll Navbar (Ubah Warna)
    // ==========================================
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==========================================
    // 3. Logic Auto-Close Mobile Menu
    // ==========================================
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