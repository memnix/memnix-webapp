/** @jsxImportSource solid-js */

export default function Marquee() {
	const TAGS = [
		"Open Source",
		"Learn",
		"FOSS",
		"Free",
		"AI",
		"Optimized",
		"Golang",
		"Astro",
		"Tailwind",
		"Memnix",
		"Responsive",
		"Unique"
	]
	const DURATION = 15000
	const ROWS = 3
	const TAGS_PER_ROW = 7

	const random = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min)) + min
	const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random())

	const InfiniteLoopSlider = ({
		children,
		duration,
		reverse = false
	}: {
		children: any
		duration: number
		reverse: boolean
	}) => {
		return (
			<div
				style={{
					"--duration": `${duration}ms`,
					"--direction": reverse ? "reverse" : "normal"
				}}
			>
				{reverse ? (
					<div class={"animate-slider2 flex w-fit"}>
						{children}
						{children}
					</div>
				) : (
					<div class={"animate-slider flex w-fit"}>
						{children}
						{children}
					</div>
				)}
			</div>
		)
	}

	const Tag = ({ text }: { text: string }) => (
		<div class="bg-base-200/80 mr-4 flex items-center gap-y-1 rounded-md p-4 text-sm drop-shadow-md">
			<span>#</span> {text}
		</div>
	)

	return (
		<>
			<div class="p-x-4 relative mx-auto flex w-[50%] max-w-[90%] flex-shrink-0 flex-col gap-y-4 overflow-hidden">
				{[...new Array(ROWS)].map((_, i) => (
					<InfiniteLoopSlider
						/*// @ts-expect-error */
						key={i}
						duration={random(DURATION - 5000, DURATION + 5000)}
						reverse={i % 2 === 0}
					>
						{shuffle(TAGS)
							.slice(0, TAGS_PER_ROW)
							.map((tag) => (
								/*// @ts-expect-error */
								<Tag text={tag} key={tag} />
							))}
					</InfiniteLoopSlider>
				))}
				<div class="from-base-100 to-base-100 pointer-events-none absolute inset-0 bg-gradient-to-r via-transparent " />
			</div>
		</>
	)
}
