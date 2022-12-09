const videoControls = document.getElementById('video-controls')
const video = document.getElementById('video')

export const hideControls = () => {
	if (video.paused) {
		return
	}
	videoControls.classList.add('hidden')
}

export const showControls = () => {
	videoControls.classList.remove('hidden')
}


videoControls.addEventListener('mouseenter', showControls)
videoControls.addEventListener('mouseleave', hideControls)
video.addEventListener('mouseenter', showControls)
video.addEventListener('mouseleave', hideControls)
