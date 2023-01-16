import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('[data-node="video"]')
const btnTogglePlay = document.querySelector('[data-node="btn-togglePlay"]')
const btnToggleMute = document.querySelector('[data-node="btn-toggleMute"]')

const onPlayer = new MediaPlayer({
	selector: video,
	plugins: [
		new AutoPlay()
	],
})
btnTogglePlay.onclick = () => onPlayer.togglePlay()
btnToggleMute.onclick = () => onPlayer.toggleMute()
