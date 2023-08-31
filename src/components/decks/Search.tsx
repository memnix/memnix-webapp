/** @jsxImportSource react */
/** @jsxImportSource react */
import type {IDeck} from "@common/types/api"
import {Dialog, Transition} from "@headlessui/react"
import {instantMeiliSearch} from "@meilisearch/instant-meilisearch"
import {useStore} from "@nanostores/react"
import {Fragment} from "react"
import {
    InstantSearch, SearchBox, useHits
} from "react-instantsearch-hooks-web"
import {isSearchOpen} from "../../store/searchStore"

const Hit = ({hit}: { hit: any }) => {
    const deck: IDeck = {
        name: hit.name, description: hit.description, banner: hit.banner, id: hit.id, lang: hit.lang
    }
    return (<>
            <div
                className="flex w-full scale-100 transform flex-col justify-center transition-all duration-300 hover:scale-95 hover:cursor-pointer">
                <img
                    src={deck.banner}
                    className="mr-2.5 max-h-32 w-full  object-contain"
                    alt={deck.name}
                    height="64"
                    width="64"
                    loading="lazy"
                />

                <h1 className="w-full text-2xl font-bold">{deck.name}</h1>
                <p className="block w-full truncate">{deck.description}</p>
            </div>
        </>)
}


function CustomHits(props: any) {
    const {hits, results, sendEvent} = useHits(props)

    return (<>
            <div className="mt-5 w-full gap-12 sm:columns-2 lg:columns-3">
                {hits.length ? hits.map((hit, index) => {
                    return <Hit key={index} hit={hit}/>
                }) : null}
            </div>
        </>)
}

export default function Search({
                                   meilisearchToken
                               }: {
    meilisearchToken: string
}) {
    const searchClient = instantMeiliSearch(//  "https://meilisearch.memnix.app",
        "localhost:7700", meilisearchToken)


    const $isSearchOpen = useStore(isSearchOpen)

    function closeModal() {
        isSearchOpen.set(false)
    }

    function openModal() {
        isSearchOpen.set(true)
    }

    return $isSearchOpen ? (<>
            <Transition appear show={$isSearchOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="bg-base-100 fixed inset-0 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel
                                    className="bg-base-200 relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:max-h-[80%] sm:max-w-full">
                                    <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div
                                                className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10"></div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-base font-semibold leading-6"
                                                >
                                                    Find a deck
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <InstantSearch
                                                        indexName="decks"
                                                        searchClient={searchClient}
                                                    >
                                                        <SearchBox
                                                            autoFocus={true}
                                                            submitIconComponent={({classNames}) => (
                                                                <a className={classNames.submitIcon}>
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        className="h-6 w-6"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        stroke="currentColor"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            strokeWidth="2"
                                                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                        />
                                                                    </svg>
                                                                </a>)}
                                                            classNames={{
                                                                root: "form-control", form: "input-group", submit: "btn btn-square btn-ghost mx-2", input: "input input-bordered w-full input-secondary", loadingIndicator: "hidden", reset: "hidden"
                                                            }}
                                                        />
                                                        {/*// @ts-ignore */}
                                                        <CustomHits hitComponent={Hit}/>
                                                    </InstantSearch>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>) : null
}
