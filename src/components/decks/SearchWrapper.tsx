/** @jsxImportSource solid-js */

import { useStore } from "@nanostores/solid"
import { Show } from "solid-js"
import { isSearchOpen } from "../../store/searchStore"

export default function SearchHeader(props) {
	const $isSearchOpen = useStore(isSearchOpen)

	return (
		<>
			<Show when={$isSearchOpen()} keyed>
				<p>Show</p>
				{props.children}
			</Show>
		</>
	)
}
