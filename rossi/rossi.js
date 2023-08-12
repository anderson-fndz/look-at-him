function playVeredito(){
    var buttonPlay = document.querySelector('.button-veredito')
    var audioMion = document.querySelector('.audio-Mion')
    var sectionVeredito = document.querySelector('.veredito-section')
    var body = document.querySelector('.container')

    audioMion.play();
    sectionVeredito.style.display = 'flex'
    body.style.backgroundColor = '#2cc62c'
}