import { Menu } from './scenes/menu';
import { Play } from './scenes/play';
import './style.css'
import { Game, CANVAS } from 'phaser';

const canvasElement = document.getElementById('game');

export const WIDTH = 640
export const HEIGHT = 480
export const BORDER_UI_SIZE = HEIGHT / 15
export const BORDER_PADDING = BORDER_UI_SIZE / 3

const config = {
  type: CANVAS,
  width: WIDTH,
  height: HEIGHT,
  canvas: canvasElement,
  scene: [
    Menu, Play
  ]
}

new Game(config);
