import { formatTime } from './format-time.js'
const timeElapsed = document.getElementById('time-elapsed')
const video = document.getElementById('video')

export const updateTimeElapsed = () => {
	const time = formatTime(Math.round(video.currentTime))
	timeElapsed.innerText = `${time.minutes}:${time.seconds}`
	timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
}
