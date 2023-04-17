import { Scene } from 'phaser';

export class Menu extends Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}