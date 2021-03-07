
//Etape 1 : Sélectionner les elements necessaires
let button = document.querySelector('#mode');
let span   = document.querySelector('span');

//Etape 4 : local storage, lorsque je recharge ma page
if(localStorage.getItem('theme')){
  if(localStorage.getItem('theme') == 'sombre') {
    modeSombre();
  }
}

//Etape 2 : Rendre le button fonctionnel et donc detecter le clic sur le button
button.addEventListener('click', () => {
  if(document.body.classList.contains('dark')) {
    document.body.className = ''; //on retire ttes les classes de notre element body
    span.textContent = 'Thème sombre'; //changement du texte
    localStorage.setItem('theme', 'clair'); //créer un nouvel element via le local storage
  }
  else {
    modeSombre();
  }
});

// Etape3: Créer la fonction mode sombre
function modeSombre() {
  document.body.className = 'dark';
  span.textContent = 'Thème clair';
  localStorage.setItem('theme', 'sombre');
}