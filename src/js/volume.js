const video = document.getElementById('video')
const volumeButton = document.getElementById('volume-button')
const volume = document.getElementById('volume')
const volumeIcons = document.querySelectorAll('.volume-button use')
const volumeMute = document.querySelector('use[href="#volume-mute"]')
const volumeLow = document.querySelector('use[href="#volume-low"]')
const volumeHigh = document.querySelector('use[href="#volume-high"]')

export const updateVolume = () => {
	if (video.muted) {
		video.muted = false
	}

	video.volume = volume.value
}

export const updateVolumeIcon = () => {
	volumeIcons.forEach(icon => {
		icon.classList.toggle('hidden', true)
	})

	volumeButton.setAttribute('data-title', 'Mute (m)')

	if (video.muted || video.volume === 0) {
		volumeMute.classList.toggle('hidden', false)
		volumeButton.setAttribute('data-title', 'Unmute (m)')
	} else if (video.volume > 0 && video.volume <= 0.5) {
		volumeLow.classList.toggle('hidden', false)
	} else {
		volumeHigh.classList.toggle('hidden', false)
	}
}

export const toggleMute = () => {
	video.muted = !video.muted
	volume.value = video.muted ? 0 : volume.dataset.volume
}

volume.addEventListener('input', updateVolume)
volumeButton.addEventListener('click', toggleMute)
