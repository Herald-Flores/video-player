
import { togglePip } from './picture-in-picture.js'
import { showControls, hideControls } from './show-hidden-controls'
import { toggleFullScreen } from './full-screen.js'
import { toggleMute } from './volume.js'
import { animatePlayback } from './playback-animation.js'
import { togglePlay, video } from './play-pause.js'


const keyboardShortcuts = new Map([
	['k', togglePlay],
	['m', toggleMute],
	['f', toggleFullScreen],
	['p', togglePip]
])

export const handleKeyboardShortcuts = (event) => {
	const { key } = event
	const shortcut = keyboardShortcuts.get(key)
	if (shortcut) {
		shortcut()
	}
	if (key === 'k') {
		animatePlayback()
		if (video.paused) {
			showControls()
		} else {
			setTimeout(() => {
				hideControls()
			}, 2000)
		}
	}
}
