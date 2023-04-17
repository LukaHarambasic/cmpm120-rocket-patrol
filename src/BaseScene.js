import { Scene } from 'phaser';

export class BaseScene extends Scene {

    update () {
        console.log("BaseScene.update()")
        this.controls.update()
    }
}
