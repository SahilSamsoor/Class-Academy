
let course_quantity = document.getElementById('course_quantity');
let learner_quantity = document.getElementById('learner_quantity');
let program_quantity = document.getElementById('program_quantity');


function statastics(element, endValue, speed){
    let count = 0;

    const intarval = setInterval(() => {
        count++;
        element.innerText = count + '+';

        if(count >= endValue){
            clearInterval(intarval);
        }
    }, speed);

}

statastics(course_quantity, 5, 10);
statastics(learner_quantity, 100, 50);
statastics(program_quantity, 10, 10);


const swiper = new Swiper(".swiper", {

    slidesPerView: '6',
    slidesPerGroup: 1,
    spaceBetween: 10,

    loop:true,
    speed: 500,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },

    breakpoints:{

        320:{
            slidesPerView:2,
        },

        576:{
            slidesPerView:2,
        },

        768:{
            slidesPerView:4,
        },

        992:{
            slidesPerView:5,
        },

        1200:{
            slidesPerView:6,
        },

        1400:{
            slidesPerView:6,
        }

    }

});



const see_more = document.getElementById('see_more');
const see_less = document.getElementById('see_less');
const course_cards = document.querySelectorAll('.course-card');

if(course_cards.length < 3){
            see_more.style.display = 'none';
            console.log('no cards')
    }
see_more.addEventListener('click', () =>{
    course_cards.forEach(card => {
        card.style.display = 'block';
    })

    see_less.style.display = 'block';
    see_more.style.display = 'none';
})


see_less.addEventListener('click', () => {
    for(let i = 3; i <= course_cards.length; i++){
        course_cards[i].style.display = 'none';
    }

    see_less.style.display = 'none';
    see_more.style.display = 'block';

})


