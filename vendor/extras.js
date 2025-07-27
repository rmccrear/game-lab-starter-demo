// extras.js - Simple sound playing using HTML5 Audio

let sounds = {};

function playSound(filename, loop = false) {
  if (!sounds[filename]) {
    sounds[filename] = new Audio(filename);
  }
  sounds[filename].currentTime = 0;
  sounds[filename].loop = loop;
  sounds[filename].play();
}

function stopSound(filename) {
  if (sounds[filename]) {
    sounds[filename].pause();
    sounds[filename].currentTime = 0;
  }
} 