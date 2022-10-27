// Kung Fu Panda Character Look Up

// Variables for HTML elements
let searchBtnEl = document.getElementById("search");
let inputEl = document.getElementById("input-name");
let characterH2El = document.getElementById("character-name");
let characterImgEl = document.getElementById("main-img");
let characterQuoteEl = document.getElementById("quote");

// Event Listener
searchBtnEl.addEventListener("click", searchBtnClicked);

// Event Function
function searchBtnClicked() {
  // Get Input Value (what character to look for?)
  let name = inputEl.value;
  name = name.toLowerCase();

  // Update Page to Match Character
  if (name === "po") {
    setCharacter("Po", "Buddy, I am the Dragon Warrior", "po.png");
  } else if (name === "tigress") {
    setCharacter("Master Tigress", "That was pretty hardcore!", "tigress.png");
  } else if (name === "mantis") {
    setCharacter("Mantis", "Fear the bug!", "mantis.png");
  } else if (name === "monkey") {
    setCharacter("Monkey", "We should hang out.", "monkey.png");
  } else if (name === "crane") {
    setCharacter(
      "Crane",
      "You can chain my body, but you will never chain my warrior spirit!", "crane.png"
    );
  } else if (name === "viper") {
    setCharacter("Viper", "I don't need to bite to fight!", "viper.png");
  } else if (name === "shifu") {
    setCharacter("Master shifu", "There is now a Level Zero.", "shifu.png");
  } else if (name === "mr. ping") {
    setCharacter(
      "Mr. Ping",
      "We are noodle folk, broth runs through our veins!", "mr-ping.png"
    );
  } else {
    setCharacter("?????", "Character Not Found", "question-mark.png");
  }
}

function setCharacter(characterName, characterQuote, characterImage) {
  characterH2El.innerHTML = characterName;
  characterImgEl.src = `img/${characterImage}`;
  characterQuoteEl.innerHTML = characterQuote;
}

// remmeber to deifine function  setCharacter :)

//   // Test Input Variable and update the page
//   if (name === 'po' || name === 'dragon warrior') {
//     // Update page to Po
//     document.getElementById('character-name').innerHTML = 'Po';
//     document.getElementById('main-img').src = 'img/po.png';
//     document.getElementById('quote').innerHTML =
//       'Buddy, I am the Dragon Warrior.';
//   } else if (name === 'tigress' || name === 'master tigress') {
//     // Update page to Tigress
//     document.getElementById('character-name').innerHTML = 'Master Tigress';
//     document.getElementById('main-img').src = 'img/tigress.png';
//     document.getElementById('quote').innerHTML = 'That was pretty hardcore!';
//   } else if (name === 'mantis' || name === 'master mantis') {
//     // Update page to Mantis
//     document.getElementById('character-name').innerHTML = 'Master Mantis';
//     document.getElementById('main-img').src = 'img/mantis.png';
//     document.getElementById('quote').innerHTML = 'Fear the bug!';
//   } else if (name === 'monkey' || name === 'master monkey') {
//     // Update page to Monkey
//     document.getElementById('character-name').innerHTML = 'Master Monkey';
//     document.getElementById('main-img').src = 'img/monkey.png';
//     document.getElementById('quote').innerHTML = 'We should hang out.';
//   } else if (name === 'crane' || name === 'master crane') {
//     // Update page to Crane
//     document.getElementById('character-name').innerHTML = 'Master Crane';
//     document.getElementById('main-img').src = 'img/crane.png';
//     document.getElementById('quote').innerHTML =
//       'You can chain my body, but you will never chain my warrior spirit!';
//   } else if (name === 'viper' || name === 'master viper') {
//     // Update page to Viper
//     document.getElementById('character-name').innerHTML = 'Master Viper';
//     document.getElementById('main-img').src = 'img/viper.png';
//     document.getElementById('quote').innerHTML =
//       "I don't need to bite to fight!";
//   } else if (name === 'shifu' || name === 'master shifu') {
//     // Update page to Master Shifu
//     document.getElementById('character-name').innerHTML = 'Master Shifu';
//     document.getElementById('main-img').src = 'img/shifu.png';
//     document.getElementById('quote').innerHTML = 'There is now a Level Zero.';
//   } else if (name === 'ping' || name === 'mr. ping') {
//     // Update page to Mr. Ping
//     document.getElementById('character-name').innerHTML = 'Mr. Ping';
//     document.getElementById('main-img').src = 'img/mr-ping.png';
//     document.getElementById('quote').innerHTML =
//       'We are noodle folk, broth runs through our veins!';
//   } else {
//     // Update page to Question Mark
//     document.getElementById('character-name').innerHTML = '?????';
//     document.getElementById('main-img').src = 'img/question-mark.png';
//     document.getElementById('quote').innerHTML = 'Character Not Found';
//   }
// }
