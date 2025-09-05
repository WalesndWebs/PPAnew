// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Create mobile menu if it doesn't exist and nav exists
    if (!mobileMenu) {
        const nav = document.querySelector('nav');
        if (nav) {
            const menuDiv = document.createElement('div');
            menuDiv.id = 'mobile-menu';
            menuDiv.className = 'md:hidden bg-navy-900 px-6 pb-4';
            menuDiv.innerHTML = `
                <div class="flex flex-col space-y-4">
                    <a href="#home" class="text-white hover:text-gold transition">Home</a>
                    <a href="#services" class="text-white hover:text-gold transition">Services</a>
                    <a href="#about" class="text-white hover:text-gold transition">About Us</a>
                    <a href="#advisors" class="text-white hover:text-gold transition">Advisors</a>
                    <a href="#contact" class="text-white hover:text-gold transition">Contact</a>
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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
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
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(30, 41, 59, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--navy-900)';
            header.style.backdropFilter = 'none';
        }
    });

    // Animate stats on scroll
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll('.backdrop-blur-sm').forEach(stat => {
        stat.classList.add('stats-counter');
        statsObserver.observe(stat);
    });

    // Form submission is now handled by FormSubmit service
    // No additional JavaScript needed for form handling

    // Button interactions
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Explore Services')) {
                document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
            } else if (this.textContent.includes('Book Free Consultation') || this.textContent.includes('Schedule Consultation')) {
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add loading animation for service cards
    const serviceCards = document.querySelectorAll('#services .bg-white');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        cardObserver.observe(card);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-bg');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Animate architect cards on scroll
    const architectCards = document.querySelectorAll('.architect-card');
    const architectObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 200);
            }
        });
    }, {
        threshold: 0.1
    });

    architectCards.forEach(card => {
        architectObserver.observe(card);
    });

    // Profile modal functionality is handled directly in the HTML files

    // Create and inject profile modal if it doesn't exist
    if (!document.getElementById('profileModal')) {
        const modalHTML = `
            <!-- Modal Overlay -->
            <div id="profileModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden items-center justify-center p-4">
                <div class="bg-white rounded-2xl max-w-4xl w-full max-h-90vh overflow-y-auto relative">
                    <!-- Close Button -->
                    <button id="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
                        <i class="fas fa-times text-2xl"></i>
                    </button>

                    <!-- Profile Content Container -->
                    <div id="profileContent" class="p-8">
                        <!-- Content will be dynamically inserted here -->
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Add event listeners for modal
        const closeModalButton = document.getElementById('closeModal');
        const profileModal = document.getElementById('profileModal');

        if(closeModalButton){
            closeModalButton.addEventListener('click', function() {
                closeProfile();
            });
        }

        if(profileModal){
            profileModal.addEventListener('click', function(e) {
                if (e.target === this) {
                    closeProfile();
                }
            });
        }

        // Close modal on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeProfile();
            }
        });
    }

    // Profile modal functions
    window.openProfile = function(profileId) {
        const modal = document.getElementById('profileModal');
        const profileContent = document.getElementById('profileContent');

        // Profile data with actual team member information
        const profiles = {
            'isabella': {
                name: 'Isabella Chizoba Ozobu',
                position: 'Business Developer',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-navy-900 to-blue-800 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/isabella.png" alt="Isabella Chizoba Ozobu" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Isabella Chizoba Ozobu</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Business Developer</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Dynamic Business Development & Operational Leadership</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Isabella Chizoba Ozobu is a highly adaptable professional with diverse experience in business development and operations, holding a BA in History & International Studies from Lagos State University demonstrating a strong ability to drive growth and enhance customer relationships. In her current role as a Business Developer, she excels at cultivating and maintaining client relationships, identifying new business opportunities, negotiating terms, and ensuring high levels of customer satisfaction.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Her background also includes significant experience as an Operations Supervisor, where she managed teams, oversaw inventory, implemented quality control standards, and coordinated distribution logistics. Isabella possesses strong core competencies in organizational planning, customer relationship management, problem-solving, and decision-making. While her primary experience is not directly in financial services, her proven ability to drive business growth, manage complex operations, build strong client relationships, and maintain confidentiality makes her a versatile asset for roles focused on business expansion, client engagement, or operational efficiency within a financial company.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Business Development & Strategy</li>
                                <li>Client Relationship Management</li>
                                <li>Operational Leadership</li>
                                <li>Strategic Negotiations</li>
                                <li>Team Management</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'chidi': {
                name: 'Chidi Egubjor Paschal',
                position: 'Chief Operating Officer',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/chidi.png" alt="Chidi Egubjor Paschal" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Chidi Egubjor Paschal</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Chief Operating Officer</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Leveraging IT Excellence for Financial Operational Efficiency and Security</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Chidi Egubjor Paschal brings over 19 years of extensive post-graduate experience in Computer Engineering and Information Technology, with a strong foundation in Mathematics from Obafemi Awolowo University, Ile-Ife, Osun State. His expertise spans critical areas such as Computer Hardware/Software Installation, Management, Network Administration (Windows 2008/2012 platforms), Systems Security, Integration, Configuration, and Disaster Planning.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                As a Chief Operating Officer and former Group Head of ICT at leading pension management firms in Nigeria, Chidi has a proven track record of overseeing day-to-day business operations, preparing strategic ICT plans, implementing IT policies and security strategies, managing IT infrastructure, and ensuring regulatory compliance. His background includes significant roles in managing critical financial software like Fundfusion Manager and overseeing data integrity and backup procedures. A Senior Member of the Chartered Portfolio Management Institute and an Associate Chartered Economist, Chidi combines technical prowess with a deep understanding of financial sector operations, making him a valuable asset for driving technological advancement and operational resilience within financial institutions.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>IT Infrastructure & Security</li>
                                <li>Financial Software Implementation</li>
                                <li>Strategic Planning & Governance</li>
                                <li>Regulatory Compliance</li>
                                <li>Portfolio Management</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'adekemi': {
                name: 'Adekemi Felicia Adebgola',
                position: 'Legal Counsel & Compliance Specialist',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/felicia.png" alt="Adekemi Felicia Adebgola" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Adekemi Felicia Adebgola</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Legal Counsel & Compliance Specialist</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Expert Legal Counsel & Regulatory Compliance Specialist for Financial Services</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Adekemi Felicia Adebgola is a dynamic legal professional specializing in corporate commercial law, regulatory compliance, and company secretarial functions, with a robust track record particularly within the financial services and energy sectors. She holds an LL.B from Ekiti State University, Ado-Ekiti, a B.L from Nigerian Law School, Yenagoa, and an LL.M in Energy Law from the Center for Petroleum Energy Economics and Law (CPEEL), University of Ibadan.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Along with certifications in Arbitration and Chartered Secretarial practices, Adekemi brings a comprehensive legal and compliance perspective to wealth management and asset solutions. Her experience as Deputy Head Legal & Company Secretary at Sky Capital and Financial Allied International Limited highlights her proficiency in monitoring regulatory obligations, providing legal advisory on credit facilities and collateral security, and preparing critical legal and policy documents, including AML/CFT and Data Protection Policies. Notably, she significantly decreased a company's Non-Performing Loan Portfolio by 40% within a financial year. Her deep understanding of legal frameworks and commitment to compliance make her an invaluable asset for any financial institution focused on secure, regulated, and transparent operations in the Nigerian market.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Corporate Commercial Law</li>
                                <li>Regulatory Compliance</li>
                                <li>Contract Drafting & Review</li>
                                <li>Corporate Governance</li>
                                <li>Risk Management</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            // Board Members
            'mohammed': {
                name: 'Mohammed Yunusa',
                position: 'Chairman',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-navy-900 to-blue-800 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/mohammed.png" alt="Mohammed Yunusa" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Mohammed Yunusa</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Chairman</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Experienced Risk Management & Financial Services Leader </h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Muhammad Yunusa Muhammad Yunusa is a seasoned financial professional with over 23 years of experience in the Nigerian financial services sector. He holds a Bachelor's degree in Accounting fromAhmadu Bello University, Zaria. He is also a Certified National Accountant and a Chartered Commodity Broker.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                As the Head of Risk Management at Veritas Glanvills Pensions Ltd. since January 2020 , Muhammad is responsible for identifying and assessing potential risks, setting risk management policy and strategy, building a risk awareness culture, and preparing risk reports for the Board and stakeholders. His extensive background includes senior management positions in various financial institutions such as AMML Microfinance Bank Limited, AMANA Capital Pension Limited, Crusader Sterling Pensions Limited, and Capital Bank International.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">Muhammad is a member of multiple professional bodies, including the Institute of Treasury Management and Financial Accountants (MTMFA), Institute of Management Consultants (MIMC), Association of National Accountants of Nigeria (ANAN), and a Fellow of the Association of Enterprise Risk Management Professional (FERP). His expertise in risk identification, measurement, monitoring, mitigation, and control, coupled with his experience in diverse financial operations, makes him a critical asset for ensuring robust and compliant financial strategies.
                        </div>
                    </div>
                `
            },
            'bode': {
                name: 'Bode Ojeniyi',
                position: 'Executive Director',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/bode1_1753582062137.png" alt="Bode Ojeniyi" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Bode Ojeniyi</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Executive Director</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">25+ Years Financial Services Excellence</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Bode Ojeniyi has over 25 years of cognate financial services industry experience principally in banking and insurance. His experience covers Banking Operations, Sales and Business Development, Credit and Financial Analysis, Loan Structuring, Private Equity Investments, Risk Assets Review, Finance & Strategy, Enterprise Risk Management, Audit & Compliance, HR, Facilities Management, Training and People Development, Process Review Consulting and General Administration.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                He holds a Bachelor of Science Degree and a Masters of Science Degree in Agricultural Economics from the University of Ibadan. He also holds a Masters in Business Administration (Strategic Management) from Ogun State University. Mr. Ojeniyi is a Fellow of the Institute of Strategic Management of Nigeria and the Institute of Credit Administration of Nigeria. He is a member of the Chartered Insurance Institute of Nigeria (CIIN) and the Chartered Insurance Institute (CII), United Kingdom. He is also an Honorary Senior Member of the Chartered Institute of Bankers of Nigeria (CIBN).
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Banking Operations & Business Development</li>
                                <li>Credit Analysis & Loan Structuring</li>
                                <li>Private Equity Investments</li>
                                <li>Enterprise Risk Management</li>
                                <li>Strategic Management & Finance</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'lanre': {
                name: 'Lanre Ajayi',
                position: 'Independent Director',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/lanre.png" alt="Ajayi Olanrewaju Oluwashina Michael" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Ajayi Olanrewaju Oluwashina Michael</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Independent Director</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Visionary Financial Leader: Driving Growth and Strategic Advisory</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Olanrewaju Ajayi is a highly accomplished financial expert with extensive experience spanning microfinance, mortgage banking, and corporate advisory, backed by an M.Sc. in Economics and a B.Sc. in Economics from the University of Lagos. As the Managing Director of Chanelle Microfinance Bank, he spearheaded significant growth, expanding the balance sheet from zero to over N2 billion within two years and establishing a pro bono SME Academy for business and financial advisory services.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                His tenure as Executive Director at Prudential Mortgage Bank involved setting up SME banking and an Advisory Department focused on the home development value chain, along with overseeing Treasury and Institutional Banking. Earlier in his career, as Divisional Head of Structured Finance at Bank of Industry, Olanrewaju packaged and financed numerous large-scale projects across power, agriculture, real estate, and manufacturing, accessing over N100 billion in direct funding. His expertise in strategic planning, financial analysis, project evaluation, and business process reengineering ensures robust and innovative financial solutions for clients.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Strategic Financial Leadership</li>
                                <li>Corporate Advisory & Business Development</li>
                                <li>Project Financing & Structured Finance</li>
                                <li>SME Banking & Advisory Services</li>
                                <li>Business Process Reengineering</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'sanusi': {
                name: 'Sanusi Ayama',
                position: 'Independent Director',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-red-600 to-pink-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/sanusi.png" alt="Sanusi Mohammed Ayama" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Sanusi Mohammed Ayama</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Independent Director</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Seasoned Regional Leader: Driving Market Share and Client Relationships in Pensions and Public Service</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Sanusi Mohammed Ayama is a highly skilled professional with a strong track record in regional management, sales, and relationship building, particularly within the pensions industry and public service. His diverse educational background includes a Higher National Diploma in Public Administration from Kano State Polytechnic, an Advanced Diploma in Information Management from Bayero University Kano, and a Post Graduate Diploma in Public Policy and Administration also from Bayero University Kano (2006). He also holds a Diploma in Journalism from Ahmadu Bello University, Zaria (1993), and is awaiting final results for a Masters in Public Administration from Nasarawa State University, Keffi.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Previously, as a Regional Manager at Veritas Glanvills Pensions Ltd (formerly FUG PENSIONS LTD) for over a decade, Sanusi was instrumental in driving the overall strategy for the North West region, significantly increasing Assets Under Management (AUM) through various growth drivers (RSA, AVC, TW-EOI, Unfunded to Funding). He was responsible for managing regional budgets and targets, presenting products and services to business prospects, facilitating contributions, and ensuring high levels of client satisfaction. His experience also includes roles as Station Head at Fedex Red Star Express PLC, where he coordinated human and material resources to innovate service delivery, and continuously increased market share and profitability. More recently, he served as an Assistant Chief Executive Officer (GD) in the FCT - Judicial Service Committee, Abuja, with responsibilities in Procurement, Finance, and Accounts, and was promoted to Chief Executive Officer (GD) in June 2025. Sanusi's core competencies include marketing strategy, team building, customer satisfaction, sales and relationship management, and public procurement skills, making him adept at achieving organizational goals and building executive relationships.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Regional Management & Strategy</li>
                                <li>Pension Fund Management</li>
                                <li>Sales & Relationship Management</li>
                                <li>Public Administration</li>
                                <li>Marketing Strategy & Team Building</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'chinyere': {
                name: 'Chinyere Nwoagu',
                position: 'Non-Executive Director',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/chinyere.jpg" alt="Chinyere A. Nwaogu" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Chinyere A. Nwaogu</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Non-Executive Director</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Expert Legal Counsel: Driving Corporate Compliance and Sustainable Practices in Finance</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Chinyere A. Nwaogu is a diligent Legal Practitioner with extensive experience in corporate legal practice, real estate law, and conflict resolution. She holds an LL.B from the University of Ibadan (1999), a B.L from Nigerian Law School, Abuja (2000), and an LL.M (Master of Laws) from the University of Ibadan (2004). As a Partner at ILS ATTORNEYS since November 2006, Chinyere has been instrumental in representing clients in corporate structuring, business formation, and regulatory licensing. She facilitates real estate transactions, including property searches and title perfection, and provides legal structuring for property development ventures. Her expertise extends to advising SMEs and startups on compliance, contracts, and dispute resolution, as well as liaising with regulatory agencies such as CAC, SEC, and FIRS. Notably, she leads initiatives on environmental (ESG) compliance within company operations and supports internal policy development for anti-money laundering (AML) and data protection (NDPR) compliance. Chinyere's background includes experience in debt recovery and advising on legal changes to ensure regulatory compliance. Her professional affiliations include the Nigerian Bar Association and the Institute of Chartered Mediators and Conciliators, Nigeria. She is a committed advocate for green technology and environmental sustainability as legal tools for national development
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">

                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3"></h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">


                            </ul>
                        </div>
                    </div>
                `
            },
            'steven': {
                name: 'Steven Ekundayo Modeyin',
                position: 'Non-Executive Director',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/steven.png" alt="Modeyin Ekundayo Stephen" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Modeyin Ekundayo Stephen</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Non-Executive Director</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Accomplished Investment Professional: Optimizing Pension Funds and Driving Financial Performance</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Modeyin Ekundayo Stephen is a dynamic, results-oriented investment professional with over 17 years of robust experience in managing Pension Funds and analyzing complex financial data. He holds a B.Sc., MBA, and M.Sc. degrees. His educational background includes a B.Sc. in Banking & Finance from Ogun State University (1991), an MBA (2002), and an M.Sc. in Finance (2013) both from the University of Lagos. He is also highly qualified with numerous professional certifications, including ACA (ICN), FCS (CIS), ACII (CIIN), ACS (ICSAN), and ACIT (CITN).
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                With a complete understanding of pension management, financial markets, and investment strategies, Modeyin leverages advanced qualitative and quantitative analytical techniques to optimize financial performance. His professional experience includes significant roles at NLPC Pension Fund Administrators Ltd., where he managed multi-fund portfolios and investment assets, ensuring portfolio rebalancing and compliance. His expertise encompasses developing and implementing investment strategies, conducting financial and industry analyses, and advising on capital market activities. He has received a Professional Excellence Award from NLPC Pension Fund Administrators Ltd. (2024) and brings his wealth of experience to bear on the board.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Pension Fund Management</li>
                                <li>Investment Strategy & Portfolio Management</li>
                                <li>Financial Analysis & Data Analytics</li>
                                <li>Capital Market Activities</li>
                                <li>Regulatory Compliance & Risk Management</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            // Management Team
            'lauretha': {
                name: 'Chigoziri Irunokhai',
                position: 'Group Managing Director',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <i class="fas fa-user-tie text-8xl text-white/90"></i>
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Chigoziri Irunokhai</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Group Managing Director</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Impact-Driven Investment Professional: Leading Sustainable Growth and Portfolio Management</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Chigoziri Irunokhai is a dynamic investment professional with extensive experience in managing portfolios, developing financial strategies, and executing impactful investment projects, with a strong focus on ESG integration and sustainable sectors. She holds an MBA in Financial Management from Lagos State University and a B.Sc. in Microbiology from the University of Ibadan. She is also a Sponsored Individual (Fund Manager) certified by the Securities & Exchange Commission, and a member of the Chartered Institute of Stockbrokers and The Association of Investment Advisers and Portfolio Managers.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                As the founding Managing Director/CEO of Sky Capital Asset Management Ltd, Chigoziri has been instrumental in leading strategic direction, overseeing investments, and establishing trusted relationships with shareholders and regulatory bodies. Her career highlights include successfully growing global investment portfolios from N35 billion to over N60 billion at Veritas Pensions Ltd, achieving 100% targeted returns on fixed-income portfolios, and designing innovative financial products like Dollar Mutual Funds and Treasury Bill Notes. With expertise in financial modeling, due diligence, valuation, and a deep understanding of the African investment landscape, Chigoziri is adept at driving value creation and fostering sustainable development through strategic investment and active ownership.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Portfolio Management & Investment Strategy</li>
                                <li>ESG Integration & Sustainable Investing</li>
                                <li>Financial Product Development</li>
                                <li>Regulatory Relationship Management</li>
                                <li>Value Creation & Strategic Investment</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'chidi-cto': {
                name: 'Chidi Egbufor',
                position: 'Chief Info-technology Officer',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/chidi.png" alt="Chidi Egbufor" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Chidi Egbufor</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Chief Info-technology Officer</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Leveraging IT Excellence for Financial Operational Efficiency and Security</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Chidi Egbufor brings over 19 years of extensive post-graduate experience in Computer Engineering and Information Technology, with a strong foundation in Mathematics from Obafemi Awolowo University, Ile-Ife, Osun State. His expertise spans critical areas such as Computer Hardware/Software Installation, Management, Network Administration (Windows 2008/2012 platforms), Systems Security, Integration, Configuration, and Disaster Planning.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                As a Chief Info-technology Officer and former Group Head of ICT at leading pension management firms in Nigeria, Chidi has a proven track record of overseeing day-to-day business operations, preparing strategic ICT plans, implementing IT policies and security strategies, managing IT infrastructure, and ensuring regulatory compliance. His background includes significant roles in managing critical financial software like Fundfusion Manager and overseeing data integrity and backup procedures. A Senior Member of the Chartered Portfolio Management Institute and an Associate Chartered Economist, Chidi combines technical prowess with a deep understanding of financial sector operations, making him a valuable asset for driving technological advancement and operational resilience within financial institutions.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>IT Infrastructure & Security</li>
                                <li>Financial Software Implementation</li>
                                <li>Strategic Planning & Governance</li>
                                <li>Regulatory Compliance</li>
                                <li>Portfolio Management</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'felicia': {
                name: 'Felicia Adegbola',
                position: 'Compliance',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/felicia.png" alt="Felicia Adegbola" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Felicia Adegbola</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Group Head, Compliance</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Expert Legal Counsel & Regulatory Compliance Specialist for Financial Services</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Felicia Adegbola is a dynamic legal professional specializing in corporate commercial law, regulatory compliance, and company secretarial functions, with a robust track record particularly within the financial services and energy sectors. She holds an LL.B from Ekiti State University, Ado-Ekiti, a B.L from Nigerian Law School, Yenagoa, and an LL.M in Energy Law from the Center for Petroleum Energy Economics and Law (CPEEL), University of Ibadan.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Along with certifications in Arbitration and Chartered Secretarial practices, Felicia brings a comprehensive legal and compliance perspective to wealth management and asset solutions. Her experience as Deputy Head Legal & Company Secretary at Sky Capital and Financial Allied International Limited highlights her proficiency in monitoring regulatory obligations, providing legal advisory on credit facilities and collateral security, and preparing critical legal and policy documents, including AML/CFT and Data Protection Policies. Notably, she significantly decreased a company's Non-Performing Loan Portfolio by 40% within a financial year. Her deep understanding of legal frameworks and commitment to compliance make her an invaluable asset for any financial institution focused on secure, regulated, and transparent operations in the Nigerian market.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Corporate Commercial Law</li>
                                <li>Regulatory Compliance</li>
                                <li>Contract Drafting & Review</li>
                                <li>Corporate Governance</li>
                                <li>Risk Management</li>
                            </ul>
                        </div>
                    </div>
                `
            },

            'isabella-sales': {
                name: 'Isabella Ozobu',
                position: 'Vp Promotions',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-pink-600 to-red-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/isabella.png" alt="Isabella Ozobu" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Isabella Ozobu</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Group Head, Sales / Marketing & Promotions</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Dynamic Business Development & Operational Leadership</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Isabella Ozobu is a highly adaptable professional with diverse experience in business development and operations, holding a BA in History & International Studies from Lagos State University demonstrating a strong ability to drive growth and enhance customer relationships. In her current role as Group Head of Sales/Marketing & Promotions, she excels at cultivating and maintaining client relationships, identifying new business opportunities, negotiating terms, and ensuring high levels of customer satisfaction.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Her background also includes significant experience as an Operations Supervisor, where she managed teams, oversaw inventory, implemented quality control standards, and coordinated distribution logistics. Isabella possesses strong core competencies in organizational planning, customer relationship management, problem-solving, and decision-making. While her primary experience is not directly in financial services, her proven ability to drive business growth, manage complex operations, build strong client relationships, and maintain confidentiality makes her a versatile asset for roles focused on business expansion, client engagement, or operational efficiency within a financial company.
                            </p>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Key Competencies</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Business Development & Strategy</li>
                                <li>Client Relationship Management</li>
                                <li>Operational Leadership</li>
                                <li>Strategic Negotiations</li>
                                <li>Team Management</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            'juliet': {
                name: 'Juliet Njoku',
                position: 'Group HR',
                content: `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="text-center">
                            <div class="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden">
                                <img src="attached_assets/Juliet Njoku. Grp HR_1753583144210.jpeg" alt="Juliet Njoku" class="w-full h-full object-cover rounded-full">
                                <div class="absolute top-4 right-4">
                                    <div class="w-4 h-4 bg-gold rounded-full animate-pulse"></div>
                                </div>
                            </div>
                            <h2 class="text-3xl font-bold text-navy-900 mb-2">Juliet Njoku</h2>
                            <p class="text-gold font-semibold text-xl mb-4">Group HR</p>
                            <div class="flex justify-center space-x-4">
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fab fa-linkedin"></i>
                                </div>
                                <div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition cursor-pointer">
                                    <i class="fas fa-envelope"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold text-navy-900 mb-4">Human Resources Leadership & Organizational Development Expert</h3>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Juliet Njoku serves as Group Head of Human Resources, bringing extensive expertise in talent management, organizational development, and strategic HR operations to Prodigy Portfolio Advisors. Her leadership ensures the company maintains a world-class workforce aligned with its mission of delivering exceptional financial advisory services.
                            </p>
                            <p class="text-gray-700 leading-relaxed mb-6">
                                With a focus on building high-performance teams and fostering a culture of excellence, Juliet oversees all aspects of human capital development including recruitment, training, performance management, and employee engagement. Her strategic approach to HR management supports the company's growth objectives while ensuring compliance with employment regulations and industry best practices.
                            </p>
                            <div class="bg-blue-50 p-6 rounded-lg mb-6">
                                <h4 class="text-lg font-bold text-navy-900 mb-3">Profile Details Coming Soon</h4>
                                <p class="text-gray-700 text-sm">
                                    Comprehensive professional background and detailed competencies will be updated shortly. Please check back for complete profile information.
                                </p>
                            </div>
                            <h4 class="text-xl font-bold text-navy-900 mb-3">Core Areas of Focus</h4>
                            <ul class="list-disc list-inside text-gray-700 space-y-2">
                                <li>Strategic Human Resources Management</li>
                                <li>Talent Acquisition & Development</li>
                                <li>Organizational Development</li>
                                <li>Performance Management Systems</li>
                                <li>Employee Engagement & Culture Building</li>
                            </ul>
                        </div>
                    </div>
                `
            }
        };

        const profile = profiles[profileId];
        if (profile) {
            if(profileContent && modal){
                profileContent.innerHTML = profile.content;
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                document.body.style.overflow = 'hidden';
            }

        }
    };

    window.closeProfile = function() {
        const modal = document.getElementById('profileModal');
        if(modal){
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }

    };

    // Handle Read More buttons for architect cards and board members
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Get profile ID based on the team member name
            const card = this.closest('.architect-card, .bg-white, .professional-card');
            if (!card) return;
            
            const nameElement = card.querySelector('h3');
            if (!nameElement) return;
            
            const name = nameElement.textContent.trim();

            let profileId = '';

            // Map names to profile IDs based on navigators.html content
            switch (name) {
                case 'Mohammed Yunusa':
                    profileId = 'mohammed';
                    break;
                case 'Bode Ojeniyi':
                    profileId = 'bode';
                    break;
                case 'Lanre Ajayi':
                case 'Ajayi Olanrewaju Oluwashina Michael':
                    profileId = 'lanre';
                    break;
                case 'Sanusi Ayama':
                case 'Sanusi Mohammed Ayama':
                    profileId = 'sanusi';
                    break;
                case 'Chinyere Nwoagu':
                case 'Chinyere A. Nwaogu':
                    profileId = 'chinyere';
                    break;
                case 'Steven Ekundayo Modeyin':
                case 'Modeyin Ekundayo Stephen':
                    profileId = 'steven';
                    break;
                case 'Chigoziri Irunokhai':
                case 'Irunokhai Chigoziri Lauretha':
                    profileId = 'lauretha';
                    break;
                case 'Chidi Egbufor':
                    profileId = 'chidi-cto';
                    break;
                case 'Felicia Adegbola':
                    profileId = 'felicia';
                    break;
                case 'Isabella Ozobu':
                    profileId = 'isabella-sales';
                    break;
                case 'Juliet Njoku':
                    profileId = 'juliet';
                    break;
                case 'Isabella Chizoba Ozobu':
                    profileId = 'isabella';
                    break;
                case 'Chidi Egubjor Paschal':
                    profileId = 'chidi';
                    break;
                case 'Adekemi Felicia Adebgola':
                    profileId = 'adekemi';
                    break;
                default:
                    console.log('Profile not found for:', name);
                    return;
            }

            if (window.openProfile && profileId) {
                window.openProfile(profileId);
            }
        });
    });
});

// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        if (element) {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Initialize counter animations when stats come into view
const statsCounterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target.querySelector('.text-3xl');
            if (statValue && statValue.textContent) {
                const value = statValue.textContent;

                if (value.includes('65')) {
                    animateCounter(statValue, 65);
                } else if (value.includes('500')) {
                    animateCounter(statValue, 500);
                } else if (value.includes('98')) {
                    animateCounter(statValue, 98);
                }
            }
        }
    });
}, {
    threshold: 0.5
});

// Apply observer to stats after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelectorAll('.backdrop-blur-sm').forEach(stat => {
            if (stat) {
                statsCounterObserver.observe(stat);
            }
        });
    }, 1000);
});

// Enhanced mountain rise effect for architect cards
function triggerMountainRise() {
    const architectCards = document.querySelectorAll('.architect-card');
    architectCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');

            // Add additional mountain peak effect
            setTimeout(() => {
                card.style.animation = 'mountainRise 2s ease-in-out, mountainFloat 3s ease-in-out infinite';
            }, 2000);
        }, index * 300);
    });
}

// Mountain float animation after rise
const mountainFloatCSS = `
@keyframes mountainFloat {
    0%, 100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-8px) scale(1.02);
    }
}
`;

// Add the float animation CSS
const style = document.createElement('style');
style.textContent = mountainFloatCSS;
document.head.appendChild(style);