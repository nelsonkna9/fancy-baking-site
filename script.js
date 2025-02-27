// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Fancy Baking site loaded!");

  // Exemple d'animation additionnelle : 
  // On fait apparaître lentement la section .three-frames
  const threeFrames = document.querySelector('.three-frames');
  if (threeFrames) {
    threeFrames.style.opacity = '0';
    setTimeout(() => {
      threeFrames.style.transition = 'opacity 1.5s ease';
      threeFrames.style.opacity = '1';
    }, 500);
  }

  // Vous pouvez ajouter d'autres interactions ici
  // Par exemple, un message de confirmation à la soumission du formulaire
  const form = document.querySelector('.form-left form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for signing up! We will keep you updated with our latest baking news.');
      form.reset();
    });
  }
});
