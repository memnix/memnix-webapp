import type { App } from "vue"
import InstantSearch from "vue-instantsearch/vue3/es"

export default (app: App) => {
	app.use(InstantSearch)
}
