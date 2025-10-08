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
                    <!-- Mobile Who We Are Section -->
                    <div class="border-b border-gray-200 pb-2">
                        <button data-dropdown="who-we-are" class="flex items-center justify-between w-full text-left text-navy-900 hover:text-gold transition font-medium">
                            Who We Are
                            <i class="fas fa-chevron-down text-xs transition-transform"></i>
                        </button>
                        <div data-dropdown-menu="who-we-are" class="hidden mt-2 ml-4 space-y-2">
                            <a href="whoweare.html" class="block text-navy-900 hover:text-gold transition text-sm">Our Group</a>
                            <div class="border-l-2 border-gray-200 pl-4">
                                <button data-dropdown="our-people" class="flex items-center justify-between w-full text-left text-navy-900 hover:text-gold transition text-sm">
                                    Our People
                                    <i class="fas fa-chevron-down text-xs transition-transform"></i>
                                </button>
                                <div data-dropdown-menu="our-people" class="hidden mt-2 ml-4 space-y-1 bg-gradient-to-br from-yellow-50 to-amber-50 rounded p-2 border border-gold/20">
                                    <a href="#meet-architects" class="block text-navy-900 hover:text-gold transition text-xs">Meet the Architects</a>
                                    <a href="#meet-navigators" class="block text-navy-900 hover:text-gold transition text-xs">Meet the Navigators</a>
                                    <a href="#blog" class="block text-navy-900 hover:text-gold transition text-xs">Blog</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Mobile Our Subsidiaries Section -->
                    <div class="border-b border-gray-200 pb-2">
                        <button data-dropdown="subsidiaries" class="flex items-center justify-between w-full text-left text-navy-900 hover:text-gold transition font-medium">
                            Our Subsidiaries
                            <i class="fas fa-chevron-down text-xs transition-transform"></i>
                        </button>
                        <div data-dropdown-menu="subsidiaries" class="hidden mt-2 ml-4 space-y-2">
                            <a href="finance.html" class="block text-navy-900 hover:text-gold transition text-sm">Prodigy Finance</a>
                            <a href="ppa.html" class="block text-navy-900 hover:text-gold transition text-sm">Prodigy Portfolio Advisers</a>
                            <a href="brokercom.html" class="block text-navy-900 hover:text-gold transition text-sm">Prodigy Brokercom</a>
                        </div>
                    </div>

                    <!-- Mobile Careers Section -->
                    <div class="border-b border-gray-200 pb-2">
                        <button data-dropdown="careers" class="flex items-center justify-between w-full text-left text-navy-900 hover:text-gold transition font-medium">
                            Careers
                            <i class="fas fa-chevron-down text-xs transition-transform"></i>
                        </button>
                        <div data-dropdown-menu="careers" class="hidden mt-2 ml-4 space-y-2">
                            <a href="join-our-team.html" class="block text-navy-900 hover:text-gold transition text-sm font-medium">Join our team</a>
                        </div>
                    </div>
                    
                    <a href="contact-us.html" class="text-navy-900 hover:text-gold transition">Contact Us</a>
                </div>
            `;
            nav.appendChild(menuDiv);
            
            // Add mobile dropdown functionality
            const dropdownButtons = menuDiv.querySelectorAll('[data-dropdown]');
            dropdownButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetDropdown = button.getAttribute('data-dropdown');
                    const menu = menuDiv.querySelector(`[data-dropdown-menu="${targetDropdown}"]`);
                    const icon = button.querySelector('i');
                    
                    if (menu.classList.contains('hidden')) {
                        menu.classList.remove('hidden');
                        icon.classList.add('rotate-180');
                    } else {
                        menu.classList.add('hidden');
                        icon.classList.remove('rotate-180');
                    }
                });
            });
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const menu = document.getElementById('mobile-menu');
            if (menu) {
                menu.classList.toggle('show');
                
                // Toggle hamburger icon animation
                const icon = this.querySelector('i');
                if (icon) {
                    if (menu.classList.contains('show')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        
        if (mobileMenu && mobileMenu.classList.contains('show')) {
            // If click is not on mobile menu button or mobile menu itself
            if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('show');
                
                // Reset hamburger icon
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
    
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
                const mobileMenuBtn = document.getElementById('mobile-menu-btn');
                if (mobileMenu && mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.remove('show');
                    
                    // Reset hamburger icon
                    if (mobileMenuBtn) {
                        const icon = mobileMenuBtn.querySelector('i');
                        if (icon) {
                            icon.classList.remove('fa-times');
                            icon.classList.add('fa-bars');
                        }
                    }
                }
            }
        });
    });

    // Close mobile menu when clicking on regular navigation links
    document.querySelectorAll('#mobile-menu a:not([href^="#"])').forEach(link => {
        link.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            
            if (mobileMenu && mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
                
                // Reset hamburger icon
                if (mobileMenuBtn) {
                    const icon = mobileMenuBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
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