/** @jsxImportSource solid-js */

import Deck from "@component/decks/Deck"
import { IDeckList } from "common/types/api"
import { onMount } from "solid-js"
import { register } from "swiper/element/bundle"

register()
export default function Slider(props: { decks: IDeckList }) {
	onMount(async () => {})

	const spaceBetween = 10

	const decks: IDeckList = props.decks

	return (
		<>
			<div class="flex flex-row items-center justify-between px-5 pt-7">
				<h1 class="md:text-xl">Title</h1>
			</div>
			<div class="flex h-full items-center justify-center p-5">
				{/*// @ts-expect-error */}
				<swiper-container
					slides-per-view={1}
					space-between={spaceBetween}
					class={"h-full w-screen"}
					breakpoints={{
						// when window width is >= 320px
						320: {
							slidesPerView: 2,
							spaceBetween: 20
						},
						// when window width is >= 480px
						480: {
							slidesPerView: 3,
							spaceBetween: 30
						},
						// when window width is >= 640px
						640: {
							slidesPerView: 4,
							spaceBetween: 40
						},
						// when window width is >= 768px
						768: {
							slidesPerView: 5,
							spaceBetween: 50
						},
						// when window width is >= 1024px
						1024: {
							slidesPerView: 6,
							spaceBetween: 60
						},
						// when window width is >= 1280px
						1280: {
							slidesPerView: 7,
							spaceBetween: 70
						},
						// when window width is >= 1536px
						1536: {
							slidesPerView: 8,
							spaceBetween: 80
						}
					}}
				>
					{decks.map((deck) => {
						return (
							<>
								{/*// @ts-expect-error */}
								<swiper-slide class="flex items-center justify-center text-center ">
									<div class="flex h-full w-full flex-col items-center justify-center">
										<Deck deck={deck} />
										<div class="swiper-lazy-preloader dark:swiper-lazy-preloader-white"></div>
									</div>
									{/*// @ts-expect-error */}
								</swiper-slide>
							</>
						)
					})}
					{/*// @ts-expect-error */}
				</swiper-container>
			</div>
		</>
	)
}
