/** @jsxImportSource solid-js */

import { createSignal, onMount } from "solid-js"

import { Icon } from "@iconify-icon/solid"
import {useStore} from "@nanostores/solid";
import {isSearchOpen} from "../../../store/searchStore";

export default function SearchHeader() {
	const $isSearchOpen = useStore(isSearchOpen);


	return (
		<>
			<span class="hoveranimation mx-5 h-8 w-8 hover:cursor-pointer" onclick={()=> isSearchOpen.set(!$isSearchOpen())}>
				<Icon icon="lucide:search" height="none" style={{ height: "100%" }} />
			</span>
		</>
	)
}
