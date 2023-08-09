window.onload = () => {
    //travaillons sur le menu 
    //nous appelons nos elements concerné
    //lorsque le menu est ouvert
    //lorsque nous voulons fermer le menu

    const OpenNav = document.querySelector(".icon1")
    const FermerNav = document.querySelector(".fermer")
    const Menu = document.querySelector(".menu")
    
   
    //pour retourner les lements tel que defini au prealable 
    const PositionMenu = Menu.getBoundingClientRect().left;
    
    //ajoute un evenement lorsque l'utilisateur clique avec sa souris
   //montrer ici est une classe que nous allons creer 
   // et associer au css pour dire comment la page doit regair
   //lorsque l'utilisateur clique 
    OpenNav.addEventListener("click", () => {
        if (PositionMenu <0){
            Menu.classList.add("montrer")
        }
    })

    FermerNav.addEventListener('click', () => {
        if (PositionMenu <0){
            Menu.classList.remove("montrer")
        }
    })
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//notre page de produits

// les lettres animées
//nos lettres avec un tableau utilisé en wrap -100 et 100 et que les lettres viennent d'en haut et d'en bas
const allLetters = document.querySelectorAll('.bloc span');
const ligne = document.querySelector('.ligne');

const TLLetters = gsap.timeline();

TLLetters 
.from(ligne, {width:'0%' , opacity: 0, duration: 0.7, ease:"power1.in"})
.from(allLetters,{opacity:0, top:gsap.utils.wrap([100,-100]), stagger:0.1, ease:"power2.out"})
.set(ligne,{width:'85vw'})

// le panier mis a jour 
const quantite = document.getElementById('quantite1');
const total = document.querySelector('.total');

function updateTotal() {
    const prix = parseInt(document.getElementById('prix').value);
  const quantiteValue = parseInt(quantite.value);
  const nouveauTotal = prix * quantiteValue;
  total.textContent = `Total: ${nouveauTotal.toFixed(2)}fcfa`;
}

document.querySelector('.btn-decre').addEventListener('click', () => {
  if (quantite.value > 1) {
    quantite.value--;
    updateTotal();
  }
});

document.querySelector('.btn-incre').addEventListener('click', () => {
  quantite.value++;
  updateTotal();
});

quantite.addEventListener('input', () => {
  if (quantite.value < 1) {
    quantite.value = 1;
  }
  updateTotal();
});