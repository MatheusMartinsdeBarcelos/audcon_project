$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            {
                title: 'Evento Exemplo',
                start: '2024-08-01'
            },
            {
                title: 'Outro Evento',
                start: '2024-08-07',
                end: '2024-08-10'
            }
        ]
    });
    
    calendar.render();
});

// Carrossel
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const transformValue = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${transformValue}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

setInterval(nextSlide, 3000);

showSlide(currentIndex);

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o evento de clique para cada item de postagem
    document.querySelectorAll('.post-item').forEach(item => {
        item.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const content = this.getAttribute('data-content');
            document.getElementById('post-title').innerText = title;
            document.getElementById('post-content').innerText = content;
            document.getElementById('post-details').classList.add('active');
        });
    });

    // Adiciona o evento de clique para o botão de fechar
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.getElementById('post-details').classList.remove('active');
    });
});


