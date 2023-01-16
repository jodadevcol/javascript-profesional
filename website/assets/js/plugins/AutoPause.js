class AutoPause {
	run(player) {
		const observer = new IntersectionObserver(this.handleIntersection, {
			threshold: 0.25,
		})

		observer.observer(player.media)
	}

	handleIntersection(entries) {
		const entry = entries[0]

		entry.intersectionRatio >= this.

		this.player.play()
		this.player.pause()
	}
}

export default AutoPause
