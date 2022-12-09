export const animatePlayback = () => {
	const playbackAnimation = document.getElementById('playback-animation')

	playbackAnimation.animate([
		{
			opacity: 1,
			transform: 'scale(1)'
		},
		{
			opacity: 0,
			transform: 'scale(1.3)'
		}
	], {
		duration: 500
	})
}
