const carousels = {
    problema: [
        'images/problem1.jpg',
        'images/problem2.jpg',
        'images/problem3.jpg'
    ],
    tecnologia: [
        'images/technology1.jpg',
        'images/technology2.webp',
        'images/technology3.jpg'
    ],
    objetivos: [
        'images/objectives1.jpg',
        'images/objectives2.jpg',
        'images/objectives3.jpeg'
    ],
    publico: [
        'images/audience1.jpg',
        'images/audience2.jpeg',
        'images/audience3.jpg'
    ],
    beneficios: [
        'images/benefits1.jpg',
        'images/benefits2.jpg',
        'images/benefits3.jpg'
    ],
    'dia-a-dia': [
        'images/daily_life1.jpg',
        'images/daily_life2.jpg',
        'images/daily_life3.jpg'
    ]
};

const currentIndices = {
    problema: 0,
    tecnologia: 0,
    objetivos: 0,
    publico: 0,
    beneficios: 0,
    'dia-a-dia': 0
};

function changeSlide(section, direction) {
    const images = carousels[section];
    let currentIndex = currentIndices[section];
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    currentIndices[section] = currentIndex;
    document.querySelector(`#${section} img`).src = images[currentIndex];
}

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('show');
}

document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por se cadastrar! Você receberá atualizações em breve.');
    this.reset();
});