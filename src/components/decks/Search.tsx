/** @jsxImportSource react */
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"
import {
	Highlight,
	Hits,
	InstantSearch,
	SearchBox
} from "react-instantsearch-hooks-web"
import { JSXElement } from "@babel/types"
import { useStore } from "@nanostores/react"
import { isSearchOpen } from "../../store/searchStore"

export default function Search({
	meilisearchToken
}: {
	meilisearchToken: string
}) {
	const searchClient = instantMeiliSearch(
		"https://meilisearch.memnix.app",
		meilisearchToken
	)

	const Hit = ({ hit }: { hit: JSXElement }) => {
		{
			/*// @ts-ignore */
		}
		return <Highlight attribute="name" hit={hit} />
	}

	const $isSearchOpen = useStore(isSearchOpen)

	return $isSearchOpen ? (
		<>
			<p></p>
			<InstantSearch indexName="decks" searchClient={searchClient}>
				<SearchBox />
				{/*// @ts-ignore */}
				<Hits hitComponent={Hit} />
			</InstantSearch>
		</>
	) : null
}
