import * as videoPlay from './play-pause'
const video = document.getElementById('video')
const playlist = document.getElementById('playlist')


// Get the list of videos
const videos = playlist.querySelectorAll('div.video-in-list')
let currentVideo = 0

export const updateVideo = () => {
	for (const element of videos) {
		element.classList.remove('bg-violet-300')
	}
	video.src = videos[currentVideo].getAttribute('data-url')
	videos[currentVideo].classList.add('bg-violet-300')
	video.load()
	videoPlay.togglePlay()
}

export const previousVideo = () => {
	currentVideo--
	if (currentVideo < 0) {
		currentVideo = videos.length - 1
	}
	updateVideo()
}

export const nextVideo = () => {
	currentVideo++
	if (currentVideo >= videos.length) {
		currentVideo = 0
	}
	updateVideo()
}
