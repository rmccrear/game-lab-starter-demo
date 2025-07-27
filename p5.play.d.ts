// p5.play.d.ts - TypeScript definitions for p5.play library

// Type alias for supported key strings
type P5PlayKey = 
  | 'BACKSPACE' | 'TAB' | 'ENTER' | 'SHIFT' | 'CTRL' | 'ALT' | 'PAUSE' | 'CAPS_LOCK' | 'ESC' | 'SPACE' | ' ' 
  | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'HOME' 
  | 'LEFT_ARROW' | 'LEFT' | 'UP_ARROW' | 'UP' | 'RIGHT_ARROW' | 'RIGHT' | 'DOWN_ARROW' | 'DOWN' 
  | 'INSERT' | 'DELETE' 
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' 
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' 
  | '0NUMPAD' | '1NUMPAD' | '2NUMPAD' | '3NUMPAD' | '4NUMPAD' | '5NUMPAD' | '6NUMPAD' | '7NUMPAD' | '8NUMPAD' | '9NUMPAD' 
  | 'MULTIPLY' | 'PLUS' | 'MINUS' | 'DOT' | 'SLASH1' 
  | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' 
  | 'EQUAL' | 'COMMA' | 'SLASH' | 'BACKSLASH';

declare namespace p5 {
  // Extend p5 prototype with p5.play methods
  interface p5 {
    // Core sprite creation and management
    createSprite(x: number, y: number, width: number, height: number): Sprite;
    removeSprite(sprite: Sprite): void;
    updateSprites(updating?: boolean): void;
    getSprites(...tags: string[]): Sprite[];
    drawSprites(group?: Group): void;
    
    // Sprite groups
    allSprites: Group;
    
    // Camera functions
    camera: Camera;
    cameraPush(): void;
    cameraPop(): void;
    
    // Key input methods
    keyWentDown(key: number | P5PlayKey): boolean;
    keyWentUp(key: number | P5PlayKey): boolean;
    keyDown(key: number | P5PlayKey): boolean;
  }
}

// Sprite class definition
declare class Sprite {
  constructor(pInst: p5, x: number, y: number, width: number, height: number);
  
  // Position properties
  position: p5.Vector;
  previousPosition: p5.Vector;
  newPosition: p5.Vector;
  deltaX: number;
  deltaY: number;
  x: number;
  y: number;
  
  // Movement properties
  velocity: p5.Vector;
  velocityX: number;
  velocityY: number;
  maxSpeed: number;
  friction: number;
  
  // Collision properties
  collider: any;
  touching: {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
  };
  mass: number;
  immovable: boolean;
  restitution: number;
  
  // Visual properties
  width: number;
  height: number;
  depth: number;
  visible: boolean;
  rotation: number;
  rotationSpeed: number;
  rotateToDirection: boolean;
  scale: number;
  mirrorX: boolean;
  mirrorY: boolean;
  shapeColor: any;
  
  // Animation properties
  animation: Animation;
  frame: number;
  frameDelay: number;
  
  // Debug properties
  debug: boolean;
  
  // Methods
  update(): void;
  remove(): void;
  
  // Animation methods
  addAnimation(label: string, animation: Animation): void;
  addAnimation(label: string, ...frameImages: (p5.Image | string)[]): void;
  changeAnimation(label: string): void;
  setAnimation(label: string): void;
  setAnimation(animation: Animation): void;
  setFrame(frame: number): void;
  
  // Movement methods
  setVelocity(x: number, y: number): void;
  setSpeed(speed: number): void;
  setDirection(direction: number): void;
  setPosition(x: number, y: number): void;
  moveTo(x: number, y: number): void;
  pointTo(x: number, y: number): void;
  getDirection(): number;
  getSpeed(): number;
  
  // Collision methods
  setCollider(type: string, ...args: any[]): void;
  collide(target: Sprite | Group, callback?: Function): boolean;
  overlap(target: Sprite | Group, callback?: Function): boolean;
  bounce(target: Sprite | Group): void;
  bounceOff(target: Sprite | Group): void;
  displace(target: Sprite | Group): void;
  isTouching(target: Sprite | Group): boolean;
  
  // Visual methods
  setImage(image: p5.Image | string): void;
  changeAnimation(animation: Animation): void;
  
  // Control methods
  pause(): void;
  play(): void;
  
  // Tagging methods
  addTag(tag: string): void;
  removeTag(tag: string): void;
  hasTag(tag: string): boolean;
  isTagged(tag: string): boolean;
  
  // Mouse interaction methods
  mouseIsOver(): boolean;
  mouseIsPressed(): boolean;
  mouseIsReleased(): boolean;
  
  // Utility methods
  clone(): Sprite;
  destroy(): void;
}

// Group class for managing multiple sprites
declare class Group {
  constructor();
  
  // Properties
  length: number;
  
  // Methods
  add(sprite: Sprite): void;
  remove(sprite: Sprite): void;
  clear(): void;
  get(index: number): Sprite;
  size(): number;
  maxDepth(): number;
  toArray(): Sprite[];
  
  // Collision methods
  collide(target: Sprite | Group, callback?: Function): boolean;
  overlap(target: Sprite | Group, callback?: Function): boolean;
  bounce(target: Sprite | Group): void;
  
  // Utility methods
  clone(): Group;
  destroy(): void;
}

// Camera class for viewport management
declare class Camera {
  constructor(pInst: p5, x: number, y: number, zoom: number);
  
  // Properties
  position: p5.Vector;
  zoom: number;
  
  // Methods
  follow(sprite: Sprite): void;
  unfollow(): void;
  setPosition(x: number, y: number): void;
  setZoom(zoom: number): void;
}

// Animation class for sprite animations
declare class Animation {
  constructor(pInst: p5);
  
  // Properties
  frames: p5.Image[];
  frameDelay: number;
  loop: boolean;
  
  // Methods
  addFrame(image: p5.Image | string): void;
  nextFrame(): void;
  previousFrame(): void;
  goToFrame(frame: number): void;
  play(): void;
  pause(): void;
  stop(): void;
}

// SpriteSheet class for managing sprite sheets
declare class SpriteSheet {
  constructor(pInst: p5);
  
  // Methods
  addFrame(x: number, y: number, width: number, height: number): void;
  getFrame(index: number): p5.Image;
  getFrameCount(): number;
}

// Global functions (for convenience)
declare function createSprite(x: number, y: number, width: number, height: number): Sprite;
declare function drawSprites(group?: Group): void;
declare function updateSprites(updating?: boolean): void;
declare function getSprites(...tags: string[]): Sprite[];
declare function removeSprite(sprite: Sprite): void;
declare function cameraPush(): void;
declare function cameraPop(): void;
declare function CreateEdgeSprites(): void;

// Key input global functions
declare function keyWentDown(key: number | P5PlayKey): boolean;
declare function keyWentUp(key: number | P5PlayKey): boolean;
declare function keyDown(key: number | P5PlayKey): boolean;

// Animation global functions
declare function loadAnimation(...frameImages: (p5.Image | string)[]): Animation; 