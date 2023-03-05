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

export default function Search({ meilisearchToken }) {
	const $isSearchOpen = useStore(isSearchOpen)

	const searchClient = instantMeiliSearch(
		"http://localhost:7700",
		meilisearchToken
	)

	const Hit = ({ hit }) => <Highlight attribute="name" hit={hit} />

	return $isSearchOpen ? (
		<>
			<InstantSearch indexName="decks" searchClient={searchClient}>
				<SearchBox />
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</>
	) : null
}
