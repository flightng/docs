/**
 * Simple fullpage scroll snap for MkDocs Material
 * Only activates on pages with .hero-section (homepage)
 */
(function() {
    'use strict';
    
    // Only run on homepage (pages with hero-section)
    if (!document.querySelector('.hero-section')) return;
    
    let isScrolling = false;
    let sections = [];
    let currentSection = 0;
    
    function init() {
        // Get all sections
        sections = document.querySelectorAll('.hero-section, .feature-highlight, .snap-section');
        if (sections.length < 2) return;
        
        // Set up sections
        sections.forEach((section, index) => {
            section.setAttribute('data-section-index', index);
        });
        
        // Listen for wheel events
        document.addEventListener('wheel', handleWheel, { passive: false });
        
        // Listen for keyboard
        document.addEventListener('keydown', handleKeydown);
        
        // Touch support
        let touchStartY = 0;
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', (e) => {
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    scrollToSection(currentSection + 1);
                } else {
                    scrollToSection(currentSection - 1);
                }
            }
        }, { passive: true });
        
        // Update current section on scroll end
        window.addEventListener('scroll', debounce(updateCurrentSection, 100));
    }
    
    function handleWheel(e) {
        if (isScrolling) {
            e.preventDefault();
            return;
        }
        
        const delta = e.deltaY;
        
        if (Math.abs(delta) > 30) {
            e.preventDefault();
            
            if (delta > 0) {
                scrollToSection(currentSection + 1);
            } else {
                scrollToSection(currentSection - 1);
            }
        }
    }
    
    function handleKeydown(e) {
        if (isScrolling) return;
        
        if (e.key === 'ArrowDown' || e.key === 'PageDown') {
            e.preventDefault();
            scrollToSection(currentSection + 1);
        } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            scrollToSection(currentSection - 1);
        }
    }
    
    function scrollToSection(index) {
        if (index < 0 || index >= sections.length) return;
        if (isScrolling) return;
        
        isScrolling = true;
        currentSection = index;
        
        const section = sections[index];
        // Get actual header height from DOM
        const header = document.querySelector('.md-header');
        const headerOffset = header ? header.offsetHeight : 48;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: Math.max(0, offsetPosition), // Ensure we don't scroll above page top
            behavior: 'smooth'
        });
        
        // Reset scrolling flag after animation
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }
    
    function updateCurrentSection() {
        const scrollPos = window.pageYOffset + window.innerHeight / 3;
        
        sections.forEach((section, index) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            
            if (scrollPos >= top && scrollPos < bottom) {
                currentSection = index;
            }
        });
    }
    
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
