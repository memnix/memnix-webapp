/** @jsxImportSource react */
import {
	InstantSearch,
	SearchBox,
	Hits,
	Highlight
} from "react-instantsearch-dom"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import { useStore } from "@nanostores/react"
import { isSearchOpen } from "../../store/searchStore"

export default function Marquee() {
	const COLORS = [
		"#bbf7d0",
		"#99f6e4",
		"#bfdbfe",
		"#ddd6fe",
		"#f5d0fe",
		"#fed7aa",
		"#fee2e2"
	]
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

	const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
	const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random())

	const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
		return (
			<div
				style={{
					"--duration": `${duration}ms`,
					"--direction": reverse ? "reverse" : "normal"
				}}
			>
				{reverse ? (
					<div className={"flex w-fit animate-slider2"}>
						{children}
						{children}
					</div>
				) : (
					<div className={"flex w-fit animate-slider"}>
						{children}
						{children}
					</div>
				)}
			</div>
		)
	}

	const Tag = ({ text }) => (
		<div className="mr-4 flex items-center gap-y-1 rounded-md bg-base-200/80 p-4 text-sm drop-shadow-md">
			<span>#</span> {text}
		</div>
	)

	return (
		<>
			<div className="p-x-4 relative mx-auto flex w-[50%] max-w-[90%] flex-shrink-0 flex-col gap-y-4 overflow-hidden">
				{[...new Array(ROWS)].map((_, i) => (
					<InfiniteLoopSlider
						key={i}
						duration={random(DURATION - 5000, DURATION + 5000)}
						reverse={i % 2}
					>
						{shuffle(TAGS)
							.slice(0, TAGS_PER_ROW)
							.map((tag) => (
								<Tag text={tag} key={tag} />
							))}
					</InfiniteLoopSlider>
				))}
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-base-100 via-transparent to-base-100 " />
			</div>
		</>
	)
}
