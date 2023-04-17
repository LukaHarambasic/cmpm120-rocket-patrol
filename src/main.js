import { MenuScene } from './scenes/MenuScene';
import { GameScene } from './scenes/GameScene';
import './style.css'
import { Game, CANVAS } from 'phaser';

const canvasElement = document.getElementById('game');

export const WIDTH = 640
export const HEIGHT = 480
export const BORDER_UI_SIZE = HEIGHT / 15
export const BORDER_PADDING = BORDER_UI_SIZE / 3

const CONFIG = {
  type: CANVAS,
  width: WIDTH,
  height: HEIGHT,
  canvas: canvasElement,
  scene: [
    MenuScene, GameScene
  ]
}

new Game(CONFIG);

console.log("main.js loaded");
