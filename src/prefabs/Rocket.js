import { GameObjects, Input } from 'phaser'
import { BORDER_UI_SIZE, BORDER_PADDING, WIDTH } from '../main'

export class Rocket extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame)

    scene.add.existing(this)
    this.isFiring = false
    this.moveSpeed = 2
  }

  update() {
    // left/right movement
    if (!this.isFiring) {
      console.log('not firing')
      if (this.keyLEFT.isDown && this.x >= BORDER_UI_SIZE + this.width) {
        this.x -= this.moveSpeed
      } else if (this.keyRIGHT.isDown && this.x <= WIDTH - BORDER_UI_SIZE - this.width) {
        this.x += this.moveSpeed
      }
    }
    // fire button
    if (Input.Keyboard.JustDown(this.keyF) && !this.isFiring) {
      this.isFiring = true
      this.sfxRocket.play()
    }
    // if fired, move up
    if (this.isFiring && this.y >= BORDER_UI_SIZE * 3 + BORDER_PADDING) {
      this.y -= this.moveSpeed
    }
    // reset on miss
    if (this.y <= BORDER_UI_SIZE * 3 + BORDER_PADDING) {
      this.reset()
    }
  }
}
