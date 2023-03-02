<template>
	<ais-instant-search :search-client="searchClient" index-name="decks">
		<ais-search-box
			:class-names="{
				'ais-SearchBox-input': 'input'
				// ...
			}"
		/>
		<ais-hits>
			<template v-slot:item="{ item }">
				<h2>{{ item.title }}</h2>
			</template>
		</ais-hits>
	</ais-instant-search>
</template>

<script lang="ts">
import { ref } from "vue"
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch"

export default {
	props: {
		token: String
	},
	data() {
		console.log(this.token)
		return {
			searchClient: instantMeiliSearch("http://localhost:7700", this.token)
		}
	}
}
</script>

<style>
.counter {
	display: grid;
	font-size: 2em;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	margin-top: 2em;
	place-items: center;
}

.counter-message {
	text-align: center;
}
</style>
