function lookathim() {
    var loader = document.querySelector('.efeito-loading')
    var audioPride = document.querySelector('.audio-pride')
    var wrapPage = document.querySelector('.wrap-lookathim')

    audioPride.play();
    loader.style.opacity = '100%'
    wrapPage.style.animation = 'transition linear 2s forwards';
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
function enterRossi() {
    var audioRossi = document.querySelector('#audio-rossi')
    audioRossi.play();
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
function outRossi(){
    var audioRossi = document.querySelector('#audio-rossi')
    audioRossi.load();
}