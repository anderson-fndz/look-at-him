function playVeredito(){
    var buttonPlay = document.querySelector('.button-veredito')
    var audioMion = document.querySelector('.audio-Mion')
    var sectionVeredito = document.querySelector('.veredito-section')
    var color = document.querySelector('.section')

    audioMion.play();
    sectionVeredito.style.display = 'flex'
    color.style.backgroundColor = '#D90429'
}