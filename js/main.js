const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const slider = document.querySelector(".slider");

for (let i = 0; i < images.length; i++) {

    const imageContainer =  

    `<div class="image_container">
        <img class="image" src="${images[i].image}"/>
        <div class="image_text">
            <h3>${images[i].title}</h3>
            <p>${images[i].text}</p>
        </div>
    </div>`;

    slider.innerHTML += imageContainer;
}

const   imageContainerArray = document.getElementsByClassName("image_container");

let currentImage = 0;

imageContainerArray[currentImage].classList.add("d-block");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener("click", function() {

    imageContainerArray[currentImage].classList.remove("d-block");
    currentImage = (currentImage + 1) % images.length;
    imageContainerArray[currentImage].classList.add("d-block"); 
    }
);

prev.addEventListener("click", function() {

    imageContainerArray[currentImage].classList.remove("d-block");
    currentImage = (currentImage - 1 + images.length) % images.length;
    imageContainerArray[currentImage].classList.add("d-block"); 
    }
);


//Bottoni Bonus 

function autoPlay() {
    imageContainerArray[currentImage].classList.remove("d-block");
    currentImage = (currentImage + 1) % images.length;
    imageContainerArray[currentImage].classList.add("d-block");
}

const auto = document.querySelector("#auto");

auto.addEventListener("click", function() {
    setInterval(autoPlay, 3000);
});

function autoPlayReverse() {
    imageContainerArray[currentImage].classList.remove("d-block");
    currentImage = (currentImage - 1 + images.length) % images.length;
    imageContainerArray[currentImage].classList.add("d-block");
}

const autoReverse = document.querySelector("#auto_reverse");

autoReverse.addEventListener("click", function() {
    setInterval(autoPlayReverse, 3000);
});





  