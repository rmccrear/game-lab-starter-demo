// extras.js - Simple sound playing using HTML5 Audio

let sounds = {};

/**
 * Returns a random number between min and max (inclusive)
 * @param {number} min - Minimum value (inclusive)
 * @param {number} max - Maximum value (inclusive)
 * @returns {number} Random number between min and max
 * @example
 * let x = randomNumber(0, 400); // Random X position
 * let speed = randomNumber(2, 8); // Random speed
 * let health = randomNumber(10, 100); // Random health value
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Plays an audio file with optional looping
 * @param {string} filename - Path to the audio file (e.g., "sound.mp3", "music.wav")
 * @param {boolean} [loop=false] - Whether to loop the audio continuously
 * @example
 * playSound("jump.mp3"); // Play once
 * playSound("background_music.mp3", true); // Loop continuously
 * playSound("explosion.wav"); // Play sound effect
 */
function playSound(filename, loop = false) {
  if (!sounds[filename]) {
    sounds[filename] = new Audio(filename);
  }
  sounds[filename].currentTime = 0;
  sounds[filename].loop = loop;
  sounds[filename].play();
}

/**
 * Stops playing an audio file and resets it to the beginning
 * @param {string} filename - Path to the audio file to stop
 * @example
 * stopSound("background_music.mp3");
 * stopSound("jump.mp3");
 */
function stopSound(filename) {
  if (sounds[filename]) {
    sounds[filename].pause();
    sounds[filename].currentTime = 0;
  }
} 

// Edge sprites for screen boundaries
var topEdge, bottomEdge, leftEdge, rightEdge, edges;

/**
 * Creates invisible sprites at the screen edges for boundary detection
 * Creates four sprites: topEdge, bottomEdge, leftEdge, rightEdge
 * Also creates an 'edges' group containing all four edge sprites
 * 
 * These edge sprites are useful for keeping game objects within the screen bounds
 * and creating boundary collision detection without manually positioning sprites.
 * 
 * @example
 * // Create edge sprites for boundary detection
 * createEdgeSprites();
 * 
 * // Make player bounce off all edges
 * player.bounceOff(edges);
 * 
 * // Make player bounce off specific edges
 * player.bounceOff(topEdge); // Bounce off top edge only
 * player.bounceOff(bottomEdge); // Bounce off bottom edge only
 * 
 * // Keep enemies within screen bounds
 * enemy.bounceOff(edges);
 * 
 * // Create a platformer with floor collision
 * player.bounceOff(bottomEdge); // Player lands on ground
 * player.bounceOff(leftEdge); // Player hits left wall
 * player.bounceOff(rightEdge); // Player hits right wall
 */
function createEdgeSprites() {
  // Create edge sprites just outside the screen boundaries
  topEdge = createSprite(width/2, -10, width, 20);
  bottomEdge = createSprite(width/2, height + 10, width, 20);
  leftEdge = createSprite(-10, height/2, 20, height);
  rightEdge = createSprite(width + 10, height/2, 20, height);
  
  // Make them invisible
  topEdge.visible = false;
  bottomEdge.visible = false;
  leftEdge.visible = false;
  rightEdge.visible = false;
  
  // Make them immovable
  topEdge.immovable = true;
  bottomEdge.immovable = true;
  leftEdge.immovable = true;
  rightEdge.immovable = true;
  
  // Create edges group
  edges = createGroup();
  edges.add(topEdge);
  edges.add(bottomEdge);
  edges.add(leftEdge);
  edges.add(rightEdge);
}