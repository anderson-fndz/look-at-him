function playVeredito(){
    var buttonPlay = document.querySelector('.button-veredito')
    var audioMion = document.querySelector('.audio-Muzy')
    var sectionVeredito = document.querySelector('.veredito-section')
    var bodySection = document.querySelector('.container')

    audioMion.play();
    sectionVeredito.style.display = 'flex'
    bodySection.style.backgroundColor = '#D90429'
}