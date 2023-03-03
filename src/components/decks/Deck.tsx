/** @jsxImportSource solid-js */

import {IDeck} from "common/types/api"


export default function Deck(props) {

	const deck: IDeck = props.deck
	return (
		<>
			<div
				class="hoveranimation flex w-full flex-col justify-center hover:cursor-pointer"
			>
				<img
					src={deck.banner}
					class="object-contain w-full mr-2.5  max-h-32"
					alt={deck.name}
					height="64"
					width="64"
					loading="lazy"
				/>

				<h1 class="text-2xl font-bold text-white w-full">{deck.name}</h1>
				<p class="text-white truncate w-full block">{deck.description}</p>

			</div>

		</>
	)
}
