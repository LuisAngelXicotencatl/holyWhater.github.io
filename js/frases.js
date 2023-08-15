const frases = [
  { frase: "Todo parecia ir  bien y uno actuaba conforme a las reglas del juego, pero entonces cometia un error y !pum¡, el cielo se desboronaba", autor: "Milla verde Stephen king" },
  { frase: "La mente humana no está preparada para despertar sabiendo que ese será su último día de vida, pero para mí eso es un lujo, no una maldición. Saber que llega el fin es una liberación", autor: "Call of duty" },
  { frase: "Ningun mortal es capaz de guardar un secreto.Si tus labios callan, hablara por las puntas de los dedos; hasta el ultimo de sus porros lo delata", autor: "La paciente silenciosa - Sigmund Freud" },
  { frase: "Mi vida era unica debido a la ausencia de todas esas pequeñas cosas que contituyen la normalidad de cualquier persona.", autor: "La historia de loco -- John Katzenbach" },
  { frase: "Esperaba lo peor ahora que lo peor no ha sucedido me siento decepcionado.Asi pues, soy el artifice de mi propio desencanto.", autor: "Yo me he llevado tu queso" },
];

let currentFraseIndex = 0;
const fraseElement = document.getElementById("fraseActual");
const autorElement = document.getElementById("autorActual");

let currentCharacterIndex = 0;
let typingInterval;
const typingDelay = 100; // Delay entre caracteres

function typeFrase() {
  if (currentCharacterIndex < frases[currentFraseIndex].frase.length) {
    fraseElement.textContent += frases[currentFraseIndex].frase.charAt(currentCharacterIndex);
    currentCharacterIndex++;
  } else {
    clearInterval(typingInterval);
  }
}

function cambiarFrase() {
  currentCharacterIndex = 0;
  fraseElement.textContent = ""; // Reiniciar el contenido
  autorElement.textContent = "";

  const randomIndex = Math.floor(Math.random() * frases.length);
  if (randomIndex !== currentFraseIndex) {
    currentFraseIndex = randomIndex;
  } else {
    cambiarFrase();
    return;
  }

  autorElement.textContent = "- " + frases[currentFraseIndex].autor;

  typingInterval = setInterval(typeFrase, typingDelay);
}

cambiarFrase(); // Cambiar la frase inicial al cargar la página
setInterval(cambiarFrase, 20000); // Cambiar la frase cada 15 segundos
