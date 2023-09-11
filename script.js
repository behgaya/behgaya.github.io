var isContracted = false;
var isAnimating = false;


function contractElements() {
    if (isAnimating) {
        return;
    }

    isAnimating = true;

    var buttons = document.querySelectorAll('.contractable-button');
    var threeBar = document.getElementById('button--threebars');
    var initialValue = 6;

    if (!isContracted) {    
        buttons.forEach(button => {
            button.style.transform = `translateX(${initialValue}vw)`;
            initialValue +=4.8;
        });
        threeBar.style.transform = 'rotate(90deg)'; 

        setTimeout(() => {
            buttons.forEach(button => {
                button.style.opacity = '0';
                isAnimating = false;

            });
        }, 500)
    } else {
        buttons.forEach(button => {
            button.style.transform = 'translateX(0)';
            button.style.opacity = '1';
            threeBar.style.transform = 'rotate(0deg)'; 

            setTimeout(() =>{
                isAnimating = false;
            }, 500)
        });

    }

    isContracted = !isContracted;
}


function setActiveButton(button) {
    var buttons = document.querySelectorAll('.section-portfolio__button');

    buttons.forEach(function(btn) {
        btn.classList.remove('section-portfolio__active-button');
    });

    button.classList.add('section-portfolio__active-button');
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

var currentButton = null;
function changeImages(fileName) {
    if(currentButton != fileName){
        var imagesFirstList = document.querySelectorAll('.section-portfolio__list-image');
        var indices = [1, 2, 3, 4, 5, 6];

        imagesFirstList.forEach(function(image, index) {
            index = (index) % 6; 
            if(index % 6 == 0){
                shuffleArray(indices);
            }

            var randomIndex = indices[index]; 
            var newImageUrl = `images/portfolio-${fileName}-${randomIndex}.jpg`;
            image.style.opacity = '0';
            setTimeout(function() {
                image.src = newImageUrl;
                image.style.opacity = '1';
            }, 500);

        });

        currentButton = fileName;
    }
}


window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');

    if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'rgba(0,0,0,1)';
    } else {
        navbar.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});


document.getElementById('homeNav').addEventListener('click', function(event) {
    var targetSection = document.querySelector('#section-home');
    if (targetSection) {
        window.scrollTo({
            top: targetSection,
            behavior: 'smooth' 
        });
    }
});



document.getElementById('contactNav').addEventListener('click', function(event) {
    var targetSection = document.querySelector('#section-contact');
    var offset = 100; 
    if (targetSection) {
        var targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' 
        });
    }
});

document.getElementById('educationNav').addEventListener('click', function(event) {
    var targetSection = document.querySelector('#section-education');
    var offset = 160; 
    if (targetSection) {
        var targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' 
        });
    }
});

document.getElementById('experienceNav').addEventListener('click', function(event) {
    var targetSection = document.querySelector('#section-experience');
    var offset = 120; 
    if (targetSection) {
        var targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' 
        });
    }
});

document.getElementById('skillsNav').addEventListener('click', function(event) {
    var targetSection = document.querySelector('#section-skills');
    var offset = 100; 
    if (targetSection) {
        var targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' 
        });
    }
});

document.getElementById('portfolioNav').addEventListener('click', function(event) {
    var targetSection = document.querySelector('#section-portfolio');
    var offset = 80; 
    if (targetSection) {
        var targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' 
        });
    }
});

document.getElementById('aboutNav').addEventListener('click', function(event) {
    var targetSection = document.querySelector('#section-about');
    var offset = 150; 
    if (targetSection) {
        var targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' 
        });
    }
});

function submitForm() {
    const form = document.querySelector('.message__list')
    const formData = new FormData(form)
    const url = 'https://formsubmit.co/bernardo.gaya2@gmail.com'
    fetch(
      url,
      {
        method: 'POST',
        body: formData
      }
    )
    .then(response => {
        if (response.ok) {
            MessageSent();
        } else {
            MessageError();
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
        alert('An error occurred while submitting the form');
    });

    return false
}

const sendButton = document.querySelector('.section-contact__button');
const messageConfirmation = document.getElementById('messageConfirmation');

function MessageSent(){
    messageConfirmation.style.display = "flex";

    setTimeout(function() {
        messageConfirmation.style.opacity = "1";
    },100)


    setTimeout(function() {
        messageConfirmation.style.opacity = "0"; 
    },2500);

    setTimeout(function(){
        messageConfirmation.style.display = "none";
    }, 3000)

}

function MessageError(){
    messageConfirmation.style.display = "flex";


    setTimeout(function() {
        messageConfirmation.style.opacity = "1";
        document.getElementById("message-text").textContent = "Message Error";
        document.getElementById("successAnimation").style.opacity = 0;
    },100)


    setTimeout(function() {
        messageConfirmation.style.opacity = "0"; 
        
    },2500);

    setTimeout(function(){
        messageConfirmation.style.display = "none";
        document.getElementById("successAnimation").style.opacity = 1;

    }, 3000)

}



let isExperienceExpanded = false;
const seeMoreExperience = document.getElementById('moreExperience');

seeMoreExperience.addEventListener('click', function(event) {
    if(isExperienceExpanded){
        document.getElementById("experienceExpand").style.display = "none";
    } else {
        document.getElementById("experienceExpand").style.display = "flex";
    }
    isExperienceExpanded = !isExperienceExpanded;
    seeMoreExperience.textContent = isExperienceExpanded ? "See Less" : "See More";
});


let isEducationExpanded = false;
let seeMoreEducation = document.getElementById('moreButton');
let educationExpanded = document.querySelectorAll('.education-list__expanded');

seeMoreEducation.addEventListener('click', function (event) {
    educationExpanded.forEach(function (education) {
        if (isEducationExpanded) {
            education.style.display = "none";
        } else {
            education.style.display = "flex";
        }
    });
    isEducationExpanded = !isEducationExpanded;
    seeMoreEducation.textContent = isEducationExpanded ? "See Less" : "See More";
});

var elem = document.querySelector('.section-portfolio__carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true
});

let isMainExpanded = false;
let seeMoreMain = document.getElementById('moreMain');
let MainExpandedElements = document.querySelectorAll('.section-main__expanded');

seeMoreMain.addEventListener('click', function (event) {
    MainExpandedElements.forEach(function (main) {
        if (isMainExpanded) {
            main.style.display = "none";
        } else {
            main.style.display = "flex";
        }
    });
    isMainExpanded = !isMainExpanded;
    seeMoreMain.textContent = isMainExpanded ? "See Less" : "See More";
});
