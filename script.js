const text = `
My love ❤️,
From the first day we met,
you made my world brighter.
Thank you for being my Valentine 💕
`;

let i = 0;
const speed = 50;
const letterEl = document.getElementById("letter");

function typeWriter() {
  if (i < text.length) {
    letterEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
