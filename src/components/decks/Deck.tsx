/** @jsxImportSource solid-js */

import { IDeck } from "common/types/api"

export default function Deck(props) {
	const deck: IDeck = props.deck
	return (
		<>
			<div class="scale-100 transform transition-all duration-300 hover:scale-95 flex w-full flex-col justify-center hover:cursor-pointer">
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
