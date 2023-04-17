import { Scene, Input } from 'phaser';
import { WIDTH, HEIGHT, BORDER_UI_SIZE, BORDER_PADDING } from '../main';
import { Rocket } from '../prefabs/Rocket';

export class GameScene extends Scene {
    constructor() {
        super("gameScene");
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', './graphics/rocket.png');
        this.load.image('spaceship', './graphics/spaceship.png');
        this.load.image('starfield', './graphics/starfield.png');
    }
    
    create() {
        console.log("create gameScene")
        // background
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        // ui
        this.add.rectangle(0, BORDER_UI_SIZE + BORDER_PADDING, WIDTH, BORDER_UI_SIZE * 2, 0x00FF00).setOrigin(0, 0);
        this.add.rectangle(0, 0, WIDTH, BORDER_UI_SIZE, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, HEIGHT - BORDER_UI_SIZE, WIDTH, BORDER_UI_SIZE, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, BORDER_UI_SIZE, HEIGHT, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(WIDTH - BORDER_UI_SIZE, 0, BORDER_UI_SIZE, HEIGHT, 0xFFFFFF).setOrigin(0, 0);
        // define keys
        this.keyF = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.F);
        this.keyR = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.R);
        this.keyLEFT = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Input.Keyboard.KeyCodes.RIGHT);
        // rocket
        this.p1Rocket = new Rocket(this, WIDTH/2, HEIGHT - BORDER_UI_SIZE - BORDER_PADDING, 'rocket').setOrigin(0.5, 0);
        console.log("create gameScene done")
    }

    update() {
        this.starfield.tilePositionX -= 4;
        // Seems like it isn't called directly, people complained, might be fixed in v4
        // GitHub issue: https://github.com/photonstorm/phaser/issues/3378
        // Solution: https://www.html5gamedevs.com/topic/37637-spriteupdate-method-is-never-called/?do=findComment&comment=214887
        this.p1Rocket.update();
    }
}