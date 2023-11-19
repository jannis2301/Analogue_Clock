import { Clock } from './Clock'

const clock = document.querySelector('.clock') as HTMLDivElement

const bootstrap = () => new Clock(clock)

window.addEventListener('DOMContentLoaded', () => bootstrap())
