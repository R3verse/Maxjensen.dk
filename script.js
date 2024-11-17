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
        name: "Jesper Juul Jensen",
        position: "CEO at Ideanote",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/jesper.jpg?etag=W%2F%22495f-5773b80c%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=200%2B200&quality=85",
        statement: "Max Jensen is a intelligent young man with high ambitions. He has previous experience in the establishment of SMEs, which has given great practical and theoretical experience in entrepreneurship and IT support. Alongside his studies, he has always several projects on the working board which has provided him with a large client base and remarkable social skills. I can recommend Max Jensen as a classified It-Supporter and Programmer. I have worked with him in the establishment of a consulent firm, which were shut down due to the importance of his education as well as mine. With his age taken in consideration, i find his talents regarding computer programming and adjustment, in a level beyond his category."
    },
    {
        name: "Henrik Faaborg",
        position: "IT-Chef, Handelsskolen København Nord",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/hefa.jpg?etag=%22QjpdHI14qKByDm5SduiJyWNgqfA%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=150%2B210&extract=0%2B0%2B150%2B157&quality=85",
        statement: "Max Jensen has been in practice in the IT department at Handelsskolen København Nord. Max has a great interest in IT and is very solution-oriented. Max Jensen worked well with colleagues in the IT department. If you have any further questions, you are welcome to contact me at 40170797"
    },
    {
        name: "Jakob Heegaard",
        position: "IT-Direktør, Jet Time A/S",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/30b04e1.jpg?etag=%225cc4-5773b730%22&sourceContentType=image%2Fjpeg&ignoreAspectRatio&resize=200%2B200&quality=85",
        statement: "Max Jensen has been employed as a student assistant, as an IT supporter at Jet Time A/S in the period 17.06.2013 - 30.06.2016. The tasks have been many with the main area within IT operations and support, IT security and with on various IT projects. All tasks have been solved to our complete satisfaction. Max works very independently and can handle stressful situations, in addition, he can come up with many suggestions and good ideas. Max has shown great initiative and been a responsible employee. Max has always been ready to lend a helping hand, at the same time he is never afraid of new challenges. Jet Time A/S can give Max Jensen the best recommendations and is confident that he will do a good job in whatever position, he ever holds."
    },
    {
        name: "Connie Vang Jensen",
        position: "Uddannelseschef HG",
        image: "https://impro.usercontent.one/appid/oneComWsb/domain/maxjensen.dk/media/maxjensen.dk/onewebmedia/32bdde7.jpg?etag=%2282GdqmNfVv%2B92g54lmasz%2FRNado%22&sourceContentType=image%2Fjpeg",
        statement: "Max joined the business school in the second year of the basic programme. He was quickly part of the school's IT specialists because of his IT knowledge. IT specialists are a group of students who are super users of the school's systems and can help and support their classmates. Max was one of the most active students and made presentations for a student support website and a mobile app. I am sure he is a great supporter and I would recommend him. If you have any more questions, you are welcome to contact me at 24404751."
    },
    {
        name: "Flemming Agner Jørgensen",
        position: "IT Support Coordinator hos Cloud People A/S",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQGy4cF6SD5eYw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1673460006588?e=2147483647&v=beta&t=zLRgNOuBjYpBRNTiDO6ZhnR8ziS11aD3HlWrH7uons8",
        statement: "Jeg har haft fornøjelsen af Max som supporter i Cloud People og kan give ham mine bedste anbefalinger. Max er gået til opgaverne med stort engagement og lyst til at lære nyt og han har været hurtig til finde sin plads i teamet. Max har fået løst de givne opgaver på bedste vis og kundernes tilfredshed og han har helt sikkert potentiale til meget mere end 1. line support."
    }
];

// Load References
function loadReferences() {
    const referencesGrid = document.querySelector('.references-grid');
    referencesGrid.innerHTML = '';

    references.forEach((ref, index) => {
        const referenceItem = document.createElement('div');
        referenceItem.className = 'reference-item';
        
        referenceItem.innerHTML = `
            <div class="reference-image">
                <img src="${ref.image}" alt="${ref.name}">
            </div>
            <div class="reference-name">${ref.name}</div>
            <div class="reference-position">${ref.position}</div>
            <div class="reference-text">${ref.statement}</div>
            <button class="show-more-btn">Show more</button>
        `;
        
        const showMoreBtn = referenceItem.querySelector('.show-more-btn');
        showMoreBtn.addEventListener('click', () => {
            // Create modal
            const modal = document.createElement('div');
            modal.className = 'reference-modal';
            modal.innerHTML = `
                <div class="reference-modal-content">
                    <button class="reference-modal-close">&times;</button>
                    <div class="reference-modal-header">
                        <div class="reference-modal-image">
                            <img src="${ref.image}" alt="${ref.name}">
                        </div>
                        <div class="reference-modal-info">
                            <div class="reference-modal-name">${ref.name}</div>
                            <div class="reference-modal-position">${ref.position}</div>
                        </div>
                    </div>
                    <div class="reference-modal-text">${ref.statement}</div>
                </div>
            `;

            document.body.appendChild(modal);
            
            // Add active class after a small delay for animation
            requestAnimationFrame(() => {
                modal.classList.add('active');
                // Prevent body scrolling when modal is open
                document.body.style.overflow = 'hidden';
            });

            // Close modal handlers
            const closeModal = () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
                setTimeout(() => modal.remove(), 300);
            };

            // Close on X button click
            const closeBtn = modal.querySelector('.reference-modal-close');
            closeBtn.addEventListener('click', closeModal);

            // Close on outside click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Close on ESC key
            const escHandler = (e) => {
                if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeModal();
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
        });
        
        referencesGrid.appendChild(referenceItem);
    });
}

// RSS Feed Functionality
async function fetchRSSFeed(url, containerId) {
    try {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear existing items
        
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
        const data = await response.json();
        
        if (data.status === 'ok') {
            const items = data.items.slice(0, 5); // Display only the first 5 items
            
            items.forEach(item => {
                const date = new Date(item.pubDate).toLocaleDateString();
                const rssItem = document.createElement('div');
                rssItem.className = 'rss-item';
                rssItem.innerHTML = `
                    <a href="${item.link}" target="_blank">${item.title}</a>
                    <div class="date">${date}</div>
                `;
                container.appendChild(rssItem);
            });
        }
    } catch (error) {
        console.error('Error fetching RSS feed:', error);
        const container = document.getElementById(containerId);
        container.innerHTML = '<div class="rss-error">Failed to load feed. Please try again later.</div>';
    }
}

// Load RSS feeds
function loadRSSFeeds() {
    fetchRSSFeed('https://www.zerodayinitiative.com/rss/upcoming/', 'upcoming-advisories');
    fetchRSSFeed('https://www.zerodayinitiative.com/rss/published/', 'published-advisories');
}

// Refresh RSS feeds with animation
async function refreshRSSFeeds() {
    const button = document.querySelector('.refresh-button');
    const icon = button.querySelector('i');
    
    // Disable button and add spinning animation
    button.disabled = true;
    icon.classList.add('refreshing');
    
    try {
        // Only refresh the RSS feeds
        await Promise.all([
            fetchRSSFeed('https://www.zerodayinitiative.com/rss/upcoming/', 'upcoming-advisories'),
            fetchRSSFeed('https://www.zerodayinitiative.com/rss/published/', 'published-advisories')
        ]);
    } catch (error) {
        console.error('Error refreshing feeds:', error);
    } finally {
        // Re-enable button and remove spinning animation
        button.disabled = false;
        icon.classList.remove('refreshing');
    }
}

// Initialize RSS feeds on page load
document.addEventListener('DOMContentLoaded', () => {
    loadRSSFeeds();
    const refreshButton = document.querySelector('.refresh-button');
    if (refreshButton) {
        refreshButton.addEventListener('click', refreshRSSFeeds);
    }
});

// Carousel Data
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

// Modal functionality
function createImageModal() {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    const modalImage = document.createElement('img');
    modalImage.className = 'modal-image';
    
    const modalDescription = document.createElement('div');
    modalDescription.className = 'modal-description';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'close-modal';
    closeButton.innerHTML = '×';
    
    const prevButton = document.createElement('button');
    prevButton.className = 'prev-modal';
    prevButton.innerHTML = '‹';
    
    const nextButton = document.createElement('button');
    nextButton.className = 'next-modal';
    nextButton.innerHTML = '›';
    
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalDescription);
    modalContent.appendChild(closeButton);
    modalContent.appendChild(prevButton);
    modalContent.appendChild(nextButton);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    return {
        modal,
        modalImage,
        modalDescription,
        closeButton,
        prevButton,
        nextButton
    };
}

function setupModalEvents(modalElements, carousel) {
    const { modal, modalImage, closeButton, prevButton, nextButton } = modalElements;
    
    // Close modal when clicking close button
    closeButton.addEventListener('click', () => {
        closeModal(modal, carousel);
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal, carousel);
        }
    });
    
    // Close modal when pressing ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal(modal, carousel);
        }
    });
    
    // Handle image loading errors
    modalImage.addEventListener('error', () => {
        console.error('Failed to load image in modal');
        modalImage.src = 'path/to/fallback-image.jpg'; // Add a fallback image path
    });
    
    // Navigate to previous image
    prevButton.addEventListener('click', () => {
        const activeSlide = document.querySelector('.carousel-item.active');
        const activeIndex = Array.from(carousel.children).indexOf(activeSlide);
        const prevIndex = (activeIndex - 1 + carouselData.length) % carouselData.length;
        openImageModal(carouselData[prevIndex].image, carouselData[prevIndex].text, prevIndex);
    });
    
    // Navigate to next image
    nextButton.addEventListener('click', () => {
        const activeSlide = document.querySelector('.carousel-item.active');
        const activeIndex = Array.from(carousel.children).indexOf(activeSlide);
        const nextIndex = (activeIndex + 1) % carouselData.length;
        openImageModal(carouselData[nextIndex].image, carouselData[nextIndex].text, nextIndex);
    });
}

function openImageModal(imageSrc, imageText, currentIndex) {
    const modal = document.getElementById('imageModal');
    const modalImg = modal.querySelector('.modal-image');
    const modalText = modal.querySelector('.modal-text');
    const closeBtn = modal.querySelector('.close-modal');
    const prevBtn = modal.querySelector('.prev-modal');
    const nextBtn = modal.querySelector('.next-modal');

    if (!modal || !modalImg || !modalText || !closeBtn || !prevBtn || !nextBtn) {
        console.error('Image modal elements not found');
        return;
    }

    let currentImageIndex = currentIndex;
    let scale = 1;
    let translateX = 0;
    let translateY = 0;
    const ZOOM_SPEED = 0.1;
    const MAX_ZOOM = 4;
    const MIN_ZOOM = 1;

    function updateModalImage() {
        const currentItem = carouselData[currentImageIndex];
        modalImg.src = currentItem.image;
        modalText.textContent = currentItem.text || '';
        // Reset zoom when changing images
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateImageTransform();
    }

    function updateImageTransform() {
        modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    }

    function handleWheel(e) {
        e.preventDefault();

        // Only handle zoom if it's a scroll event (not a touchpad pinch)
        if (!e.ctrlKey) {
            const rect = modalImg.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            // Calculate zoom
            const oldScale = scale;
            scale *= e.deltaY > 0 ? (1 - ZOOM_SPEED) : (1 + ZOOM_SPEED);
            scale = Math.min(Math.max(scale, MIN_ZOOM), MAX_ZOOM);

            if (scale !== oldScale) {
                // Calculate the point where we're zooming
                const scaleRatio = scale / oldScale;
                
                // Adjust translation to zoom at mouse position
                if (scale > 1) {
                    translateX = mouseX - (mouseX - translateX) * scaleRatio;
                    translateY = mouseY - (mouseY - translateY) * scaleRatio;
                } else {
                    // Reset position when zooming out to normal
                    translateX = 0;
                    translateY = 0;
                }

                updateImageTransform();
            }
        }
    }

    function handleMouseMove(e) {
        if (scale > 1 && e.buttons === 1) {
            e.preventDefault();
            translateX += e.movementX;
            translateY += e.movementY;
            updateImageTransform();
        }
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % carouselData.length;
        updateModalImage();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + carouselData.length) % carouselData.length;
        updateModalImage();
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Remove all event listeners
        closeBtn.removeEventListener('click', closeModal);
        modal.removeEventListener('click', handleModalClick);
        document.removeEventListener('keydown', handleKeyPress);
        prevBtn.removeEventListener('click', prevImage);
        nextBtn.removeEventListener('click', nextImage);
        modalImg.removeEventListener('wheel', handleWheel);
        modalImg.removeEventListener('mousemove', handleMouseMove);
    }

    function handleModalClick(e) {
        if (e.target === modal) {
            closeModal();
        }
    }

    function handleKeyPress(e) {
        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    }

    updateModalImage();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add event listeners
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', handleModalClick);
    document.addEventListener('keydown', handleKeyPress);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    modalImg.addEventListener('wheel', handleWheel, { passive: false });
    modalImg.addEventListener('mousemove', handleMouseMove);
}

function setupCarousel() {
    console.log('Setting up carousel...');
    const carousel = document.querySelector('.carousel');
    const dotsContainer = document.querySelector('.carousel-dots');
    const textContainer = document.querySelector('.carousel-text');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!carousel || !dotsContainer || !textContainer) {
        console.error('Required carousel elements not found');
        return;
    }

    // Clear existing content
    carousel.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    // Create slides
    carouselData.forEach((item, index) => {
        // Create slide container
        const slide = document.createElement('div');
        slide.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        
        // Create image element
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.text || `Slide ${index + 1}`;
        
        // Add click event for modal
        slide.addEventListener('click', () => {
            const activeSlide = document.querySelector('.carousel-item.active');
            const activeIndex = Array.from(carousel.children).indexOf(activeSlide);
            openImageModal(item.image, item.text, activeIndex);
        });
        
        img.onerror = () => {
            console.error(`Failed to load image: ${item.image}`);
            img.src = 'images/placeholder.jpg'; // Add a fallback image path
        };

        // Append elements
        slide.appendChild(img);
        carousel.appendChild(slide);

        // Create dot
        const dot = document.createElement('span');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
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
        
        if (n >= items.length) {
            currentSlide = 0;
        } else if (n < 0) {
            currentSlide = items.length - 1;
        } else {
            currentSlide = n;
        }

        // Update text
        if (carouselData[currentSlide].text) {
            textContainer.textContent = carouselData[currentSlide].text;
        }

        // Update slides
        for (let i = 0; i < items.length; i++) {
            items[i].className = 'carousel-item';
            dots[i].className = 'dot';
        }

        items[currentSlide].className = 'carousel-item active';
        dots[currentSlide].className = 'dot active';
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    // Auto-play functionality
    function startAutoPlay() {
        if (!isAutoPlaying) {
            isAutoPlaying = true;
            autoPlayInterval = setInterval(nextSlide, 5000);
        }
    }

    function stopAutoPlay() {
        if (isAutoPlaying) {
            isAutoPlaying = false;
            clearInterval(autoPlayInterval);
        }
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // Start auto-play
    startAutoPlay();

    // Add hover pause functionality
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

// Mobile Navigation
function setupMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    if (!hamburger || !navLinks) return;

    // Toggle navigation
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking links
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Image Modal
function setupImageModal() {
    const images = document.querySelectorAll('.news-image');
    const modal = document.querySelector('.image-modal');
    const modalImg = document.querySelector('.modal-image img');
    const closeBtn = document.querySelector('.close-modal');

    if (!modal || !modalImg || !closeBtn) return;

    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            document.body.style.overflow = 'hidden';
            
            // Enable zoom on mobile
            modalImg.style.touchAction = 'manipulation';
            modalImg.style.userSelect = 'none';
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        modalImg.style.touchAction = '';
        modalImg.style.userSelect = '';
    }
}

// Smooth Scrolling
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar Scroll Effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

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

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing components...');
    setupCarousel();
    setupMobileNav();
    setupImageModal();
    setupSmoothScroll();
    setupNavbarScroll();
    loadPortfolioItems();
    loadReferences();
});
