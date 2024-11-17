// Portfolio Items Data
const portfolioItems = [
    {
        title: "Security Research Platform",
        description: "Advanced platform for security research and vulnerability assessment, featuring tools for analyzing shellcode and exploiting system vulnerabilities.",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/meterpreterOwnage.png?etag=%223dab8-54e8dc68%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1500,844&quality=85",
        technologies: ["Python", "Assembly", "Metasploit", "GDB"],
        link: "#"
    },
    {
        title: "System Security Analysis",
        description: "Comprehensive security analysis toolkit for identifying and mitigating system vulnerabilities, including memory exploitation and network security testing.",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/UsingRailgunMeterpreter.png?etag=%2224c99-54ed0a46%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1100,619",
        technologies: ["C++", "Assembly", "Wireshark", "IDA Pro"],
        link: "#"
    },
    {
        title: "Cryptography Implementation",
        description: "Implementation of cryptographic algorithms and security protocols, based on Stanford University's cryptography course.",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/Cryptography_Course_2012_StandfordUni.png?etag=%225fa9b-548f8e32%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=627,392",
        technologies: ["Cryptography", "Python", "OpenSSL", "Security Protocols"],
        link: "#"
    },
    {
        title: "JavaFX Booking System",
        description: "Modern booking system with intuitive user interface, secure authentication, and real-time updates.",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/JavaFXBookingSys.png?etag=%2263f6c-56e700e8%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1000,660&quality=85",
        technologies: ["Java", "JavaFX", "SQL", "UI/UX Design"],
        link: "#"
    },
    {
        title: "Network Security Tools",
        description: "Suite of tools for network security analysis and frequency measurement, essential for security assessments.",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/2.4ghz.png?etag=%223552-548f8e30%22&sourceContentType=image%2Fpng",
        technologies: ["Network Security", "Python", "RF Analysis", "Security Testing"],
        link: "#"
    },
    {
        title: "Arduino Projects",
        description: "Hardware-software integration projects using Arduino, including sensors and real-time data processing.",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/ardunio_LoveOMeter.jpg?etag=%22fd862-56e703e3%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=221,392",
        technologies: ["Arduino", "C++", "Hardware Integration", "IoT"],
        link: "#"
    }
];

// Load Portfolio Items
function loadPortfolioItems() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item fade-in';
        portfolioItem.setAttribute('data-project-id', item.title.replace(/\s+/g, '-').toLowerCase());
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="technologies">
                    ${item.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                </div>
                <a href="#" class="cta-button" onclick="openModal('${item.title.replace(/\s+/g, '-').toLowerCase()}'); return false;">View Project</a>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// References Data
const references = [
    {
        name: "Jesper Nielsen",
        position: "Senior Developer at Systematic",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/jesper.jpg?etag=W%2F%22495f-5773b80c%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=200%2B200&quality=85",
        statement: "Max is an exceptional developer with strong problem-solving skills and attention to detail."
    },
    {
        name: "Henrik Fabricius",
        position: "CTO at HEFAISTOS",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/hefa.jpg?etag=%22QjpdHI14qKByDm5SduiJyWNgqfA%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=150%2B210&extract=0%2B0%2B150%2B157&quality=85",
        statement: "Highly skilled in full-stack development with excellent communication abilities."
    },
    {
        name: "Mathias Lund Ahrens",
        position: "Tech Lead at Hesehus",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/30b04e1.jpg?etag=%225cc4-5773b730%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=200%2B200&quality=85",
        statement: "A dedicated professional who consistently delivers high-quality solutions."
    },
    {
        name: "Christian Kjær",
        position: "Senior Developer at Hesehus",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/32bdde7.jpg?etag=%2282GdqmNfVv%2B92g54lmasz%2FRNado%22&sourceContentType=image%2Fjpeg",
        statement: "Innovative thinker with strong technical expertise and collaborative mindset."
    }
];

// Load References
function loadReferences() {
    const referencesGrid = document.querySelector('.references-grid');
    referencesGrid.innerHTML = '';

    references.forEach(ref => {
        const referenceItem = document.createElement('div');
        referenceItem.className = 'reference-item';
        
        referenceItem.innerHTML = `
            <div class="reference-image">
                <img src="${ref.image}" alt="${ref.name}">
            </div>
            <div class="reference-name">${ref.name}</div>
            <div class="reference-position">${ref.position}</div>
            <div class="reference-text">${ref.statement}</div>
        `;
        
        referencesGrid.appendChild(referenceItem);
    });
}

// Carousel Data
const carouselItems = [
    {
        image: "https://placehold.co/800x400/0984e3/FFFFFF/png?text=Team+Collaboration",
        text: "Working together with an amazing team on innovative projects"
    },
    {
        image: "https://placehold.co/800x400/74b9ff/FFFFFF/png?text=Tech+Conference",
        text: "Speaking at tech conferences and sharing knowledge with the community"
    },
    {
        image: "https://placehold.co/800x400/0984e3/FFFFFF/png?text=Project+Success",
        text: "Celebrating successful project launches with clients"
    }
];

// News Carousel Data
const carouselData = [
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/safaf.png?etag=%22IE4SoLQNKiPkm93%2FJLo0o%2BAGlqk%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=600%2B300&extract=16%2B0%2B568%2B300",
        text: "Ethical hacking, has become more popular over the world, and as well I'm living my dreams out upon security threats!. To prevent against the recently updated security vulnerabillities exposed by OWASP, exploit-db, packetstormsecurity, 1337day etc."
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/meterpreterOwnage.png?etag=%223dab8-54e8dc68%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1500,844&quality=85",
        text: "Analysing 3rd party shellcode with Libemu."
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/meterpreterOwnage.png?etag=%223dab8-54e8dc68%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1500,844&quality=85",
        text: "Exploiting Memcpy() within a simple TCP echo server on WinXP SP3: - Meterpreter shell style"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/UsingRailgunMeterpreter.png?etag=%2224c99-54ed0a46%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1100,619",
        text: "Exploitation from AoE - Web Server: I was calculating about how large my NOP sled should be and allign the 78-byte shellcode, since the buffer was 500 bytes I knew that I had a chance to get control over the program execution - and thereby exploited the web server!"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/UsingRailgunMeterpreter.png?etag=%2224c99-54ed0a46%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1100,619",
        text: "Using Railgun within Meterpreter to invoke a syscall that locks the client workstation"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/Sk%C3%A6rmbillede%202013-04-25%20kl.%2009.42.56.png?etag=%22c9c4d-54ed08f2%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1070,721",
        text: "I learn stuff by drawing them down on my whiteboard."
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/FreesshDExploit.png?etag=%224c441-54ed05af%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1100,619",
        text: "Exploitation of FreeSSHd - example"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/GDBAdd&StripIT.png?etag=%2217f98-54ed04ae%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1100,619",
        text: "Adding debugging content to exsisting programs and Stripping it afterwards"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/B_mCdUfVEAA-wxv.jpg%20large.jpg?etag=%2215b55-56e6fefb%22&sourceContentType=image%2Fjpeg&quality=85",
        text: "Finished up last part of the course material on assembly language & shell coding within linux"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/EncodeingDecodingPython.png?etag=%222389-54ed0ac3%22&sourceContentType=image%2Fpng",
        text: "Encoding and decoding within Python"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/B9P8R5GCYAMrmmU.png%20large.png?etag=%2275748-56e6fefb%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1000,563&quality=85",
        text: "Security research and development"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/CAtm6S3WAAEdDsl.png%20large.png?etag=%224f361-56e6fefc%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1000,563&quality=85",
        text: "Advanced security analysis and testing"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/Sk%C3%A6rmbillede%202013-04-25%20kl.%2009.42.56.png?etag=%22c9c4d-54ed08f2%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=1070,721",
        text: "System analysis and vulnerability assessment"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/p2.png?etag=%225dbc-55f87406%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1000,447&quality=85",
        text: "Security testing and validation"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/p5.png?etag=%223e58b-55f87af8%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1500,971&quality=85",
        text: "Advanced security implementation"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/JavaFXBookingSys.png?etag=%2263f6c-56e700e8%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1000,660&quality=85",
        text: "JavaFX Booking System Development"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/CVKTGDlVAAA7utJ.png%20large.png?etag=%222fce5-56e70752%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1000,472&quality=85",
        text: "System Architecture and Design"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/Cryptography_Course_2012_StandfordUni.png?etag=%225fa9b-548f8e32%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=627,392",
        text: "Completed Standford University - Introduction to Cryptography. Teached by Dan Boneh, Professor at Standford"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/ardunio_LoveOMeter.jpg?etag=%22fd862-56e703e3%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=221,392",
        text: "Finished Arduino projects - coding project during KEA computer science"
    },
    {
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/2.4ghz.png?etag=%223552-548f8e30%22&sourceContentType=image%2Fpng",
        text: "If you want to make some messurements and get a hang on how far your frequences are reaching, then it's also essential to remember where your pointing is at"
    }
];

// Carousel Functionality
function setupCarousel() {
    const carousel = document.querySelector('.carousel');
    const dotsContainer = document.querySelector('.carousel-dots');
    const textContainer = document.querySelector('.carousel-text');
    
    if (!carousel || !dotsContainer || !textContainer) return;

    // Clear existing content
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Create carousel items
    carouselData.forEach((item, index) => {
        // Create carousel item
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        // Create image element
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.text || `Slide ${index + 1}`;
        slide.appendChild(img);
        carousel.appendChild(slide);

        // Create dot
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Set initial text
    if (carouselData[0].text) {
        textContainer.textContent = carouselData[0].text;
    }

    let currentSlide = 0;
    let isAutoPlaying = true;
    let autoPlayInterval;

    function goToSlide(n) {
        const items = carousel.getElementsByClassName('carousel-item');
        const dots = dotsContainer.getElementsByClassName('dot');
        
        items[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (n + items.length) % items.length;
        
        items[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Update text
        if (carouselData[currentSlide].text) {
            textContainer.textContent = carouselData[currentSlide].text;
        }
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function startAutoPlay() {
        if (!autoPlayInterval) {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    // Add hover listeners to pause/resume autoplay
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Start autoplay
    startAutoPlay();
}

function initializeCarousel() {
    const carousel = document.querySelector('.news-carousel');
    const dotsContainer = document.querySelector('.news-carousel-dots');
    
    if (!carousel || !dotsContainer) return;

    // Clear existing content
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';

    // Create carousel items
    carouselData.forEach((item, index) => {
        // Create carousel item
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        // Create image element
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.text || `Slide ${index + 1}`;
        
        // Create text overlay
        const textOverlay = document.createElement('div');
        textOverlay.className = 'carousel-text';
        textOverlay.textContent = item.text || '';

        // Append elements
        slide.appendChild(img);
        slide.appendChild(textOverlay);
        carousel.appendChild(slide);

        // Create dot
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    let currentSlide = 0;
    let isAutoPlaying = true;
    let autoPlayInterval;

    function goToSlide(n) {
        const items = carousel.getElementsByClassName('carousel-item');
        const dots = dotsContainer.getElementsByClassName('dot');
        
        items[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = (n + items.length) % items.length;
        
        items[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function startAutoPlay() {
        if (!autoPlayInterval) {
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    // Add hover listeners to pause/resume autoplay
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Start autoplay
    startAutoPlay();
}

// Portfolio Modal Functionality
function setupPortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalTags = document.getElementById('modalTags');
    const modalDescription = document.getElementById('modalDescription');
    const modalTechnologies = document.getElementById('modalTechnologies');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalLiveLink = document.getElementById('modalLiveLink');

    // Sample project data (replace with your actual projects)
    const projects = {
        'security-research-platform': {
            title: 'Cyber Security Dashboard',
            image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg',
            tags: ['Security', 'Analytics', 'Real-time'],
            description: 'A comprehensive security monitoring dashboard that provides real-time threat analysis and network security status.',
            technologies: ['Node.js', 'React', 'WebSocket', 'D3.js'],
            features: [
                'Real-time threat detection and alerts',
                'Network traffic analysis',
                'Interactive data visualization',
                'Automated incident response',
                'Custom reporting system'
            ],
            liveLink: 'https://maxjensen.dk'
        },
        'system-security-analysis': {
            title: 'System Security Analysis',
            image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
            tags: ['Cryptography', 'Security', 'Tools'],
            description: 'A collection of encryption and decryption tools for secure data transmission and storage.',
            technologies: ['Python', 'PyQt', 'OpenSSL', 'SQLite'],
            features: [
                'Multiple encryption algorithms',
                'Secure key management',
                'File encryption/decryption',
                'Password strength analysis',
                'Encrypted file sharing'
            ],
            liveLink: 'https://maxjensen.dk'
        },
        'network-monitoring': {
            title: 'Network Monitoring System',
            image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
            tags: ['Networking', 'Security', 'Monitoring'],
            description: 'Advanced network monitoring system with intrusion detection and traffic analysis capabilities.',
            technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
            features: [
                'Real-time network monitoring',
                'Intrusion detection system',
                'Traffic pattern analysis',
                'Automated alerts',
                'Performance metrics'
            ],
            liveLink: 'https://maxjensen.dk'
        }
    };

    function openModal(projectId) {
        const project = projects[projectId];
        if (!project) return;

        modalImage.src = project.image;
        modalTitle.textContent = project.title;
        
        // Set tags
        modalTags.innerHTML = project.tags
            .map(tag => `<span class="modal-tag">${tag}</span>`)
            .join('');
        
        modalDescription.textContent = project.description;
        
        // Set technologies
        modalTechnologies.innerHTML = project.technologies
            .map(tech => `<span class="modal-tag">${tech}</span>`)
            .join('');
        
        // Set features
        modalFeatures.innerHTML = project.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
        
        modalLiveLink.href = project.liveLink;
        
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Event Listeners
    document.querySelectorAll('.portfolio-item .cta-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = button.closest('.portfolio-item').getAttribute('data-project-id');
            openModal(projectId);
        });
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

// Mobile Navigation Toggle
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // Prevent menu from staying open on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // If clicking home link or logo, scroll to top with animation
                if (this.getAttribute('href') === '#home') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                } else {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }

            // Close mobile menu if open
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            if (hamburger && navLinks) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
}

// Notification System
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    loadPortfolioItems();
    loadReferences();
    setupCarousel();
    initializeCarousel();
    setupMobileNav();
    setupSmoothScroll();
    setupNavbarScroll();
    setupPortfolioModal();
});
