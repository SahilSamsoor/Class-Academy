const courses = document.querySelectorAll('.courses');

const allCourses = [
    {
    "coureseName": 'Web Development',
    "courseImage" : '/images/svg/course-image.svg',
    "mentor": "Samsoor Sahil",
    "mentorPic": "/images/pngAjpg/teacher.PNG"
    },
    {
    "coureseName": 'Graphic Design',
    "courseImage" : '/images/svg/course-image.svg',
    "mentor": "Samsoor Sahil",
    "mentorPic": "/images/pngAjpg/teacher.PNG"
    }
]


allCourses.forEach(course => {
    courses[0].innerHTML += `
            <div class="course-card">  
                    <img src="${course.courseImage}" alt="course-image">
                    <div class="card-details">
                        <h2>${course.coureseName}</h2>
                        <div class="rating-avalible">
                            <p><span class="circle-mark"></span>Avilable</p>
                            <img src="images/svg/rating.svg" alt="rating">
                        </div>
                        <div class="teacher-enroll">
                            <div class="teacher">
                                <img src="${course.mentorPic}" alt="teacher">
                                <h3>${course.mentor}</h3>
                            </div>

                            <button>Enroll Now</button>
                        </div>
                    </div>
            </div>      
`
})



// Courses Catagories

const slider = document.querySelector('.slider');
const catagoryImage = document.querySelectorAll('.img');


console.log(slider[0])


const catagories = [
    {
        "image": '/images/svg/web_development_icon.svg',
        "title": "Web Development"
    },
    {
        "image": '/images/svg/book_icon.svg',
        "title": "Freelancing"
    },
    {
        "image": '/images/svg/business_icon.svg',
        "title": "Digital Marketing"
    },{
        "image": '/images/svg/cours_decor_icon.svg',
        "title": "UI/UX Design"
    },{
        "image": '/images/svg/background.svg',
        "title": "Graphic Design"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Mobile Development"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Accounting"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Amazon FBA"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Front-End Development"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Back-End Development"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Motiong Graphic"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Video Editing"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Tajweed"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Quran Translation"
    },{
        "image": '/images/svg/web_development_icon.svg',
        "title": "Quran Tafseer"
    }
]


let html = '';
catagories.forEach(catagory => {
    html += `
        <div class="catagorie swiper-slide">
            <div class="img" style="background-image: url('${catagory.image}')"></div>
                <h3>${catagory.title}</h3>
                <span>Avilable</span>
        </div>
    `
 
})


slider.innerHTML = html;