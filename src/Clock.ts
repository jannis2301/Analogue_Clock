export class Clock {
  private el: HTMLElement
  private clockHands: HTMLDivElement[]

  constructor(el: HTMLElement) {
    this.el = el

    this.clockHands = [
      this.el.querySelector('.second-hand') as HTMLDivElement,
      this.el.querySelector('.min-hand') as HTMLDivElement,
      this.el.querySelector('.hour-hand') as HTMLDivElement,
    ]
    this.init()
  }

  private setDate(): void {
    const now = new Date()

    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const degrees = [
      (seconds / 60) * 360 + 90,
      (minutes / 60) * 360 + 90,
      (hours / 12) * 360 + 90,
    ]

    this.clockHands.forEach((hand, index) => {
      hand.style.transform = `rotate(${degrees[index]}deg)`
      hand.classList.toggle('no-transition', seconds === 0)
    })
  }

  private init(): void {
    setInterval(() => this.setDate(), 1000)
  }
}
