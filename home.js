function lookathim() {
    var buttonPride = document.querySelector('.button-pride')
    var audioPride = document.querySelector('.audio-pride')
    var wrapPage = document.querySelector('.wrap-lookathim')

    audioPride.play();
    wrapPage.style.display = 'none';
}

function enterMion() {
    var audioMion = document.querySelector('#audio-mion')
    audioMion.play();
}
function enterMuzy() {
    var audioMuzy = document.querySelector('#audio-muzy')
    audioMuzy.play();
}
function enterCocielo() {
    var audioCocielo = document.querySelector('#audio-cocielo')
    audioCocielo.play();
}

/* MOUSE OUT*/
function outMion(){
    var audioMion = document.querySelector('#audio-mion')
    audioMion.load();
}

function outMuzy(){
    var audioMuzy = document.querySelector('#audio-muzy')
    audioMuzy.load();
}

function outCocielo(){
    var audiococielo = document.querySelector('#audio-cocielo')
    audiococielo.load();
}