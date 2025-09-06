// Visual Slider Functionality - FSDH Style with Images
class VisualSlider {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.autoPlayInterval = null;
        this.autoPlayDelay = 3000; // 3 seconds like FSDH
        
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) return;
        
        // Simple auto-advance only
        
        // Auto-play
        this.startAutoPlay();
        
        // Continuous loop without pause
    }
    
    goToSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Add active class to target slide
        this.slides[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
    
}

// Mobile menu toggle and other functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize visual slider
    const visualSlider = new VisualSlider();
    
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Create mobile menu if it doesn't exist and nav exists
    if (!mobileMenu) {
        const nav = document.querySelector('nav');
        if (nav) {
            const menuDiv = document.createElement('div');
            menuDiv.id = 'mobile-menu';
            menuDiv.className = 'md:hidden bg-white px-6 pb-4 border-t border-gray-200';
            menuDiv.innerHTML = `
                <div class="flex flex-col space-y-4">
                    <a href="#home" class="text-navy-900 hover:text-gold transition">Home</a>
                    
                    <!-- Mobile Who We Are Section -->
                    <div class="border-b border-gray-200 pb-2">
                        <button data-dropdown="who-we-are" class="flex items-center justify-between w-full text-left text-navy-900 hover:text-gold transition font-medium">
                            Who We Are
                            <i class="fas fa-chevron-down text-xs transition-transform"></i>
                        </button>
                        <div data-dropdown-menu="who-we-are" class="hidden mt-2 ml-4 space-y-2">
                            <a href="about-us.html" class="block text-navy-900 hover:text-gold transition text-sm">Our Group</a>
                            <div class="border-l-2 border-gray-200 pl-4">
                                <button data-dropdown="our-people" class="flex items-center justify-between w-full text-left text-navy-900 hover:text-gold transition text-sm">
                                    Our People
                                    <i class="fas fa-chevron-down text-xs transition-transform"></i>
                                </button>
                                <div data-dropdown-menu="our-people" class="hidden mt-2 ml-4 space-y-1">
                                    <a href="#board-directors" class="block text-navy-900 hover:text-gold transition text-xs">Board of Directors</a>
                                    <a href="#management-team" class="block text-navy-900 hover:text-gold transition text-xs">Management Team</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <a href="#subsidiaries" class="text-navy-900 hover:text-gold transition">Subsidiaries</a>
                    <a href="#careers" class="text-navy-900 hover:text-gold transition">Careers</a>
                </div>
            `;
            nav.appendChild(menuDiv);
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            if (menu) {
                menu.classList.toggle('show');
            }
        });
    }
    
    // Dropdown menu functionality
    const dropdownButtons = document.querySelectorAll('[data-dropdown]');
    const dropdowns = document.querySelectorAll('[data-dropdown-menu]');
    
    // Handle dropdown toggles on mobile
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-dropdown');
            const targetDropdown = document.querySelector(`[data-dropdown-menu="${targetId}"]`);
            
            if (targetDropdown) {
                targetDropdown.classList.toggle('hidden');
                const chevron = this.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.classList.toggle('rotate-180');
                }
            }
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('[data-dropdown]') && !e.target.closest('[data-dropdown-menu]')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('hidden');
            });
            
            dropdownButtons.forEach(button => {
                const chevron = button.querySelector('.fa-chevron-down');
                if (chevron) {
                    chevron.classList.remove('rotate-180');
                }
            });
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.remove('show');
                }
            }
        });
    });

    // Header background on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (nav) {
            if (window.scrollY > 100) {
                nav.style.backgroundColor = 'rgba(30, 41, 59, 0.95)';
                nav.style.backdropFilter = 'blur(10px)';
            } else {
                nav.style.backgroundColor = 'rgba(30, 41, 59, 1)';
                nav.style.backdropFilter = 'none';
            }
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards and other elements
    document.querySelectorAll('#services .bg-white, #about .text-center').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Form submission handler
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Show success message
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                button.textContent = 'Message Sent!';
                button.style.backgroundColor = '#10b981';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }

    // Add loading animation to page elements
    const animateElements = document.querySelectorAll('h1, h2, h3, p, button, .bg-white');
    animateElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });

    console.log('🚀 Prodigy Group website loaded successfully!');
    console.log('💡 Features:');
    console.log('- FSDH-style visual slider with background images');
    console.log('- Professional subsidiary cards with images');
    console.log('- Company values and mission');
    console.log('- Smooth scrolling navigation');
    console.log('- Responsive design');
    console.log('- Visual styling matching FSDH Group');
});