/** @jsxImportSource react */
import {
	InstantSearch,
	SearchBox,
	Hits,
	Highlight
} from "react-instantsearch-hooks-web"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

export default function Search({ meilisearchToken }) {
	const searchClient = instantMeiliSearch(
		"http://localhost:7700",
		meilisearchToken
	)

	const Hit = ({ hit }) => <Highlight attribute="name" hit={hit} />

	return (
		<>
			<p></p>
			<InstantSearch indexName="decks" searchClient={searchClient}>
				<SearchBox />
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</>
	)
}
