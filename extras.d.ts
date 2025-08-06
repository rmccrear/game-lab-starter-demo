/**
 * extras.d.ts - TypeScript definitions for extras.js functions
 * 
 * This file provides TypeScript type definitions for utility functions
 * that extend the p5.js and p5.play.js libraries with additional
 * functionality for game development.
 * 
 * @see vendor/extras.js
 */

/**
 * Global variables for edge sprites
 */
declare var topEdge: Sprite;
declare var bottomEdge: Sprite;
declare var leftEdge: Sprite;
declare var rightEdge: Sprite;
declare var edges: Group;

/**
 * Sound management object
 */
declare var sounds: { [filename: string]: HTMLAudioElement };

/**
 * Math Functions - Random number generation
 */

/**
 * Returns a random number between min and max (inclusive)
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (inclusive)
 * @returns Random number between min and max
 * @example
 * let x = randomNumber(0, 400); // Random X position
 * let speed = randomNumber(2, 8); // Random speed
 * let health = randomNumber(10, 100); // Random health value
 */
declare function randomNumber(min: number, max: number): number;

/**
 * Sound Functions - Audio playback using HTML5 Audio API
 */

/**
 * Plays an audio file with optional looping
 * @param filename - Path to the audio file (e.g., "sound.mp3", "music.wav")
 * @param loop - Whether to loop the audio (default: false)
 * @example
 * playSound("jump.mp3"); // Play once
 * playSound("background_music.mp3", true); // Loop continuously
 * playSound("explosion.wav"); // Play sound effect
 */
declare function playSound(filename: string, loop?: boolean): void;

/**
 * Stops playing an audio file and resets it to the beginning
 * @param filename - Path to the audio file to stop
 * @example
 * stopSound("background_music.mp3");
 * stopSound("jump.mp3");
 */
declare function stopSound(filename: string): void;

/**
 * Boundary Functions - Screen edge collision detection
 */

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
declare function createEdgeSprites(): void;

/**
 * Constants and Types
 */

/**
 * HTML5 Audio element type for sound management
 */
declare interface HTMLAudioElement {
  currentTime: number;
  loop: boolean;
  play(): Promise<void>;
  pause(): void;
}

/**
 * Sound management object type
 */
declare interface SoundManager {
  [filename: string]: HTMLAudioElement;
} 