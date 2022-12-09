const pipButton = document.getElementById('pip-button')
const video = document.getElementById('video')

export const togglePip = async () => {
	pipButton.disabled = true
	try {
		if (video === document.pictureInPictureElement) {
			await document.exitPictureInPicture()
		} else {
			await video.requestPictureInPicture()
		}
	} catch (error) {
		console.error(error)
	}
	pipButton.disabled = false
}

pipButton.addEventListener('click', togglePip)

document.addEventListener('DOMContentLoaded', () => {
	if (!('pictureInPictureEnabled' in document)) {
		pipButton.classList.add('hidden')
	}
})

