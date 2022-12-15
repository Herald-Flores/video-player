import { formatTime } from './format-time.js'
const progressBar = document.querySelector('#progress-bar')
const progressInput = document.querySelector('#progress-input')
const video = document.getElementById('video')
const seekTooltip = document.querySelector('#progress-tooltip')
const canvas = document.querySelector('#snapshot-canvas')

export const updateProgress = () => {
	progressInput.value = Math.floor(video.currentTime)
	progressBar.value = Math.floor(video.currentTime)
}

export const updateProgressTooltip = (event) => {
	const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10))
	progressInput.setAttribute('data-seek', skipTo)
	const t = formatTime(skipTo)
	seekTooltip.textContent = `${t.minutes}:${t.seconds}`
	const rect = video.getBoundingClientRect()
	seekTooltip.style.left = `${event.pageX - rect.left}px`
}

export const skipAhead = (event) => {
	const skipTo = event.target.dataset.seek
		? event.target.dataset.seek
		: event.target.value
	video.currentTime = skipTo
	progressBar.value = skipTo
	progressInput.value = skipTo
}

progressInput.addEventListener('mousemove', updateProgressTooltip)
progressInput.addEventListener('input', skipAhead)

const snapshotGenerator = () => {
	canvas.width = 1280
	canvas.height = 720
	const context = canvas.getContext('2d')

	context.drawImage(video, 0, 0, canvas.width, canvas.height)
	canvas.style.display = 'block'
}

progressInput.addEventListener('mousemove', snapshotGenerator)

progressInput.addEventListener('mouseout', () => {
	canvas.style.display = 'none'
})
