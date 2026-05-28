// ==========================================================================
// RMML DESIGN PORTFOLIO - UNIFIED INTERACTION LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Select structural toggle triggers and asset panels
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    const openIcon = document.getElementById('ham-icon-open');
    const closeIcon = document.getElementById('ham-icon-close');
    const menuLinks = document.querySelectorAll('.header__link');
    const headerLogoContainer = document.querySelector('.header__logo-container');

    /**
     * Toggles the active state of the mobile slide drawer layout 
     * and switches the visible hamburger vector graphic safely.
     */
    const toggleMenu = () => {
        if (!navLinks || !openIcon || !closeIcon) return;
        
        const isOpened = navLinks.classList.toggle('header__links--active');
        
        if (isOpened) {
            openIcon.classList.add('d-none');
            closeIcon.classList.remove('d-none');
        } else {
            openIcon.classList.remove('d-none');
            closeIcon.classList.add('d-none');
        }
    };

    // Bind event listener to the main hamburger button wrapper safely
    if (hamburgerBtn && navLinks && openIcon && closeIcon) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }

    // Auto-close navigation drawer layout when jumping to anchor section hashes
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navLinks.classList.contains('header__links--active')) {
                toggleMenu();
            }
        });
    });

    // Branding logo homepage redirection routing action with strict style pointing
    if (headerLogoContainer) {
        headerLogoContainer.style.cursor = 'pointer';
        headerLogoContainer.addEventListener('click', () => {
            window.location.href = './index.html';
        });
    }
});
