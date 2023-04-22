import { GameObjects } from 'phaser'
import { Storage } from '../utils/storage'
import { WIDTH } from '../main'

// Spaceship prefab
export class Ship extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, pointValue) {
    super(scene, x, y, texture, frame)
    scene.add.existing(this) // add to existing scene
    this.points = pointValue // store pointValue
    this.moveSpeed = Storage.getSpeed() // pixels per frame
  }

  update() {
    // move spaceship left
    this.x -= this.moveSpeed
    // wrap around from left edge to right edge
    if (this.x <= 0 - this.width) {
      this.reset()
    }
  }

  // position reset
  reset() {
    this.x = WIDTH
  }
}
