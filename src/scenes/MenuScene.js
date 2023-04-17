import { Scene } from 'phaser';

export class MenuScene extends Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("gameScene");
        console.log("menuScene loaded")
    }
}