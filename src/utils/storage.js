export class Storage {
  static setSpeed(speed) {
    localStorage.setItem('speed', speed)
  }

  static getSpeed() {
    return localStorage.getItem('speed') || 3 // easy mode
  }

  static setTimer(timer) {
    localStorage.setItem('timer', timer)
  }

  static getTimer() {
    return localStorage.getItem('timer') || 60 * 1000 // easy mode
  }
}
