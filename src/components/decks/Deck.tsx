/** @jsxImportSource solid-js */
import type {IDeck} from "common/types/api"

export default function Deck(props: { deck: IDeck }) {
	const deck: IDeck = props.deck
	return (
		<>
			<div class="flex w-full scale-100 transform flex-col justify-center transition-all duration-300 hover:scale-95 hover:cursor-pointer">
				<img
					src={deck.banner}
					class="mr-2.5 max-h-32 w-full  object-contain"
					alt={deck.name}
					height="64"
					width="64"
					loading="lazy"
				/>

				<h1 class="w-full text-2xl font-bold">{deck.name}</h1>
				<p class="block w-full truncate">{deck.description}</p>
			</div>
		</>
	)
}
