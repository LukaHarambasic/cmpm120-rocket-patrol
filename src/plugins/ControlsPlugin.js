import { Plugins, Input } from 'phaser';

export const EVENT_RIGHT = 'CONTROL_RIGHT'
export const EVENT_LEFT = 'CONTROL_LEFT'
export const EVENT_SHOOT = 'CONTROL_SHOOT'
export const EVENT_RESTART = 'CONTROL_RESTART'

// Inspired by NickHatBoecker
// https://phaser.discourse.group/t/configure-keyboard-inputs-once-for-all-scenes-to-use/10470/2
export class ControlsPlugin extends Plugins.ScenePlugin {
    constructor (scene, pluginManager) {
        super(scene, pluginManager)

        this.keys = {
            right: [Input.Keyboard.KeyCodes.RIGHT, Input.Keyboard.KeyCodes.D],
            left: [Input.Keyboard.KeyCodes.LEFT, Input.Keyboard.KeyCodes.A],
            shoot: [Input.Keyboard.KeyCodes.F, Input.Keyboard.KeyCodes.SPACE],
            restart: [Input.Keyboard.KeyCodes.R],
        }
    }

    update () {
        console.log("ControlsPlugin.update()")
        this._emitKeyEvent({ keys: this.keys.right, eventName: EVENT_RIGHT })
        this._emitKeyEvent({ keys: this.keys.left, eventName: EVENT_LEFT })
        this._emitKeyEvent({ keys: this.keys.shoot, eventName: EVENT_SHOOT })
        this._emitKeyEvent({ keys: this.keys.restart, eventName: EVENT_RESTART })
    }

    _emitKeyEvent ({ keys, eventName }) {
        keys.forEach(key => {
            const keyObj = this.scene.input.keyboard.addKey(key)
            if (Input.Keyboard.JustDown(keyObj)) {
                console.log(`Emitting ${eventName} event`)
                this.scene.events.emit(eventName, this.scene)
            }
        })
    }
}