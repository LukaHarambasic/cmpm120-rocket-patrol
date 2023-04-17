import { Scene } from 'phaser';

export class BaseScene extends Scene {
    constructor (key) {
        super(key)
        console.log("new BaseScene()", key)
    }

    update () {
        console.log("BaseScene.update()")
        // this.controller.updateManually()
    }
}
