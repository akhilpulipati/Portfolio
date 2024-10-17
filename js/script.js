

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, initializing Typed.js.');
    initializeTypedJs();  // Initialize only once
    initializeDarkMode(); // Apply saved theme
    assignEventListeners(); // Attach event listeners
});

// Initialize Typed.js for typing effect
function initializeTypedJs() {
    new Typed('#typed-output', {
        strings: ['Welcome to My Mindspace!'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        cursorChar: '|'
    });
}

// Function to assign all event listeners
function assignEventListeners() {
    console.log('Assigning event listeners to buttons.');

    // Navbar buttons for section switching
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            console.log(`Navigating to section: ${targetId}`);
            showSection(targetId);
        });
    });

    // Get in Touch button navigation
    const getInTouchBtn = document.querySelector('.get-in-touch-btn');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', () => {
            console.log('Navigating to contact section.');
            showSection('contact');
        });
    }

// Ensure DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, attaching event listeners.');

    assignBackButtonListeners(); // Attach listeners to back buttons
    assignEventListeners();      // Attach listeners to other buttons
});



// Navbar buttons for section switching
function assignEventListeners() {
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            console.log(`Navigating to section: ${targetId}`);
            showSection(targetId);
        });
    });
}

// Section switching function
function showSection(targetId) {
    console.log(`Showing section: ${targetId}`);

    document.querySelectorAll('section').forEach(section => {
        if (section.id === targetId) {
            section.classList.add('active');
            section.style.display = 'block';
        } else {
            section.classList.remove('active');
            section.style.display = 'none';
        }
    });
}



    // Dark Mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleDarkMode);
}

// Section switching function
function showSection(targetId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('active', section.id === targetId);
        section.style.display = section.id === targetId ? 'block' : 'none';
    });
    console.log(`Showing section: ${targetId}`);
}

// Dark Mode toggle function with state preservation
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.innerHTML = isDarkMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    console.log(`Dark mode: ${isDarkMode ? 'enabled' : 'disabled'}`);
}

// Initialize dark mode based on saved preference
function initializeDarkMode() {
    const savedTheme = localStorage.getItem('darkMode');
    const themeToggle = document.getElementById('theme-toggle');

    if (savedTheme === 'enabled') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.innerHTML = isDarkMode
        ? '<i class="fas fa-sun"></i>'  // Sun icon for light mode
        : '<i class="fas fa-moon"></i>'; // Moon icon for dark mode

    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}


// Resume download function
function downloadResume(event) {
    event.preventDefault();
    const resumePath = 'assets/CV_AkhilP.pdf';

    fetch(resumePath)
        .then(response => {
            if (!response.ok) throw new Error('Resume not found.');
            const link = document.createElement('a');
            link.href = resumePath;
            link.download = 'Akhil_Pulipati_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log('Resume downloaded successfully.');
        })
        .catch(() => alert('Resume not available.'));
}
// Assign all event listeners
function assignEventListeners() {
    console.log('Assigning event listeners to buttons.');

    // Navbar buttons for section switching
    document.querySelectorAll('.nav-btn').forEach(button => {
        const targetId = button.getAttribute('data-target');
        if (targetId) {
            button.addEventListener('click', () => {
                console.log(`Navigating to section: ${targetId}`);
                showSection(targetId);
            });
        }
    });

    // Get in Touch button navigation
    const getInTouchBtn = document.querySelector('.get-in-touch-btn');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', () => showSection('contact'));
    }

    // Home button navigation
    document.querySelectorAll('.home-icon-btn').forEach(button => {
        button.addEventListener('click', () => showSection('hero'));
    });

    // Dark Mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleDarkMode);
}
function showSection(targetId) {
    if (!targetId) {
        console.warn('Invalid section ID:', targetId);
        return;
    }

    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('active', section.id === targetId);
        section.style.display = section.id === targetId ? 'block' : 'none';
    });

    console.log(`Showing section: ${targetId}`);
}
localStorage.removeItem('darkMode');
function initializeTypedJs() {
    new Typed('#typed-output', {
        strings: ['Welcome to My Mindspace!'],  // Single string, properly configured
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const educationCards = document.querySelectorAll('#education .card'); // Select only education cards
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    // Function to update which card is visible
    function updateEducationCards() {
        educationCards.forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
    }

    // Event listeners for the arrows
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + educationCards.length) % educationCards.length;
        updateEducationCards();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % educationCards.length;
        updateEducationCards();
    });

    // Initial display of the first card
    updateEducationCards();
});
const educationCards = document.querySelectorAll('#education .card');
let currentCardIndex = 0;
const cards = document.querySelectorAll('.education-container .card');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateCardVisibility() {
    cards.forEach((card, index) => {
        card.style.display = index === currentCardIndex ? 'block' : 'none';
    });
}

prevBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    updateCardVisibility();
});

nextBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCardVisibility();
});

// Initialize with the first card visible
updateCardVisibility();
