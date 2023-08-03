

const watchButton = document.querySelector('.watchButton');
const closeButton = document.querySelector('.closeButton');
const active = document.querySelector('.active');
const videoContainer = document.querySelector('.videoContainer');
const video = document.querySelector('video');

function ShowVideo(){
    videoContainer.classList.remove('active');
    video.autoplay = true;
    video.load();
    console.log("close video");
}

function CloseVideo(){
    videoContainer.classList.add('active');
    video.pause();
    video.currentTime = 0;
}

watchButton.addEventListener('click', ShowVideo);
closeButton.addEventListener('click', CloseVideo);