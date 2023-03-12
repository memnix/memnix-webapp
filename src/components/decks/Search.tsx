/** @jsxImportSource react */
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import {
	Highlight,
	Hits,
	InstantSearch,
	SearchBox
} from "react-instantsearch-hooks-web"
import {JSXElement} from "@babel/types";

export default function Search({ meilisearchToken } : { meilisearchToken: string }) {
	const searchClient = instantMeiliSearch(
		"https://meilisearch.memnix.app",
		meilisearchToken
	)

	const Hit = ({ hit } : {hit: JSXElement}) => <Highlight attribute="name" hit={hit} />

	return (
		<>
			<p></p>
			<InstantSearch indexName="decks" searchClient={searchClient}>
				<SearchBox />
				{/*// @ts-ignore */}
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</>
	)
}
