const btn = document.querySelector('.mudar-btn')
const video = document.querySelector('.video-container')


btn.addEventListener('click', function() {
    if(!btn.classList.contains('quadr')){
        btn.classList.add('quadr');
        video.pause();
    }
    else{
        btn.classList.remove('quadr');
        video.play();
    }
})
