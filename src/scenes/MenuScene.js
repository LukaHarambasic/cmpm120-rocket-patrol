import { BaseScene } from '../BaseScene'

export class MenuScene extends BaseScene {
  constructor() {
    super('menuScene')
  }

  create() {
    this.add.text(20, 20, 'Rocket Patrol Menu')
    this.scene.start('gameScene')
  }
}
