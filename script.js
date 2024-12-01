const menu = document.getElementById('menu')
const header = document.querySelector('header')
const nav = document.querySelector('nav')
const main_box = document.querySelector('main')


menu.onclick = function()
{
    nav.classList.toggle('hidden')
}

window.addEventListener("scroll", function(){
    header.classList.toggle('sticky', window.scrollY > 450)
})

// ACCORDEON

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Fermer les autres items
    accordionItems.forEach((otherItem) => {
      otherItem.classList.remove('active');
    });

    // Activer/désactiver le clic actuel
    if (!isActive) {
      item.classList.add('active');
    }
  });
});


// THE PLAYING VIDEO ANIMATION ON SCROLL JS CODE SECTION
gsap.registerPlugin(ScrollTrigger);

const section = document.getElementById("video_section");
const video = document.getElementById("video");

// Fixe la vidéo au défilement
ScrollTrigger.create({
    trigger: section,
    start: "top top", // Quand le haut de la section atteint le haut de l'écran
    end: "+=3500", // Durée de "fixation"
    pin: video, // La vidéo reste fixée
    scrub: true, // Synchronise avec le défilement
});
