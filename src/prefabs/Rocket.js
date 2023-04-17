import { GameObjects } from 'phaser';

export class Rocket extends GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);

    // add object to existing scene
    scene.add.existing(this);
  }
}