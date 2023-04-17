import { Scene } from 'phaser';
import { WIDTH, HEIGHT, BORDER_UI_SIZE, BORDER_PADDING } from '../main';

export class Play extends Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './graphics/rocket.png');
        this.load.image('spaceship', './graphics/spaceship.png');
        this.load.image('starfield', './graphics/starfield.png');
    }
    
    create() {
        this.add.rectangle(0, BORDER_UI_SIZE + BORDER_PADDING, WIDTH, BORDER_UI_SIZE * 2, 0x00FF00).setOrigin(0, 0);
        // white borders
        this.add.rectangle(0, 0, WIDTH, BORDER_UI_SIZE, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, HEIGHT - BORDER_UI_SIZE, WIDTH, BORDER_UI_SIZE, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, BORDER_UI_SIZE, HEIGHT, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(WIDTH - BORDER_UI_SIZE, 0, BORDER_UI_SIZE, HEIGHT, 0xFFFFFF).setOrigin(0, 0);
    }
}