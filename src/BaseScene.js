import { Scene, Input } from 'phaser'

// All event related stuff should live in their own class,
// but this already makes keyboad handling way more convient
export const EVENT_RIGHT = 'CONTROL_RIGHT'
export const EVENT_LEFT = 'CONTROL_LEFT'
export const EVENT_SHOOT = 'CONTROL_SHOOT'
export const EVENT_RESTART = 'CONTROL_RESTART'

export class BaseScene extends Scene {
  constructor(key) {
    super(key)
    this.keys = {
      right: [Input.Keyboard.KeyCodes.RIGHT, Input.Keyboard.KeyCodes.D],
      left: [Input.Keyboard.KeyCodes.LEFT, Input.Keyboard.KeyCodes.A],
      shoot: [Input.Keyboard.KeyCodes.F, Input.Keyboard.KeyCodes.SPACE],
      restart: [Input.Keyboard.KeyCodes.R],
    }
  }

  update() {
    this._emitKeyEvent({ keys: this.keys.right, eventName: EVENT_RIGHT })
    this._emitKeyEvent({ keys: this.keys.left, eventName: EVENT_LEFT })
    this._emitKeyEvent({ keys: this.keys.shoot, eventName: EVENT_SHOOT })
    this._emitKeyEvent({ keys: this.keys.restart, eventName: EVENT_RESTART })
  }

  _emitKeyEvent({ keys, eventName }) {
    keys.forEach((key) => {
      const keyObj = this.input.keyboard.addKey(key)
      if (Input.Keyboard.JustDown(keyObj)) {
        this.events.emit(eventName, this)
      }
    })
  }
}
