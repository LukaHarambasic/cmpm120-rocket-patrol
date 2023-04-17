import { WIDTH, HEIGHT, BORDER_UI_SIZE, BORDER_PADDING } from '../main';
import { Rocket } from '../prefabs/Rocket';
import { BaseScene } from '../BaseScene';
import { EVENT_RIGHT, EVENT_LEFT } from '../plugins/ControlsPlugin';

export class GameScene extends BaseScene {
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
        // background
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        // ui
        this.add.rectangle(0, BORDER_UI_SIZE + BORDER_PADDING, WIDTH, BORDER_UI_SIZE * 2, 0x00FF00).setOrigin(0, 0);
        this.add.rectangle(0, 0, WIDTH, BORDER_UI_SIZE, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, HEIGHT - BORDER_UI_SIZE, WIDTH, BORDER_UI_SIZE, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, BORDER_UI_SIZE, HEIGHT, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(WIDTH - BORDER_UI_SIZE, 0, BORDER_UI_SIZE, HEIGHT, 0xFFFFFF).setOrigin(0, 0);
        // rocket
        this.p1Rocket = new Rocket(this, WIDTH/2, HEIGHT - BORDER_UI_SIZE - BORDER_PADDING, 'rocket').setOrigin(0.5, 0);

        // This is the most complicated part, because you have to make sure that all event listeners will be removed when the scene shuts down
        this.events.once('shutdown', () => {
            this.events.off(EVENT_LEFT, null, this)
            this.events.off(EVENT_RIGHT, null, this)
        })

    }

    update() {
        this.starfield.tilePositionX -= 4;
        this.p1Rocket.update()
    }
}