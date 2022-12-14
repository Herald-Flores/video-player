import { video, togglePlay } from './play-pause'


export const setVideoSpeed = (speed) => {
	video.playbackRate = speed

	if (video.paused) { togglePlay() }
}
