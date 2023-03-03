/** @jsxImportSource solid-js */

import {onMount} from "solid-js"
import {register} from "swiper/element/bundle"
import Deck from "@component/decks/Deck";
import {IDeck} from "common/types/api"


register();
export default function Slider(props) {
	onMount(async () => {
	})

	const spaceBetween = 10;

	const decks: [IDeck] = [
		{
			id: 1,
			name: 'Deck 1',
			description: 'This is the first deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 2,
			name: 'Deck 2',
			description: 'This is the second deckThis is the second deckThis is the second deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 3,
			name: 'Deck 3',
			description: 'This is the third deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 4,
			name: 'Deck 4',
			description: 'This is the fourth deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 5,
			name: 'Deck 5',
			description: 'This is the fifth deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 6,
			name: 'Deck 6',
			description: 'This is the sixth deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 7,
			name: 'Deck 7',
			description: 'This is the seventh deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 8,
			name: 'Deck 8',
			description: 'This is the eighth deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		},
		{
			id: 9,
			name: 'Deck 9',
			description: 'This is the ninth deck',
			lang: 'en',
			banner: 'https://loremflickr.com/320/240',
		}
	]

	return (
		<>
			<div class="flex items-center justify-center h-full px-5 py-5">
				{/*// @ts-ignore */}
				<swiper-container
					slides-per-view={1}
					space-between={spaceBetween}
					navigation={true}
					class={"w-screen h-full"}
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
					{decks.map(deck => {
						return (
							<>
								<swiper-slide class="flex items-center justify-center text-center ">
									<div class="flex flex-col items-center justify-center w-full h-full">
										<Deck deck={deck}/>
										<div class="swiper-lazy-preloader dark:swiper-lazy-preloader-white"></div>
									</div>
								</swiper-slide>
							</>
						)
					})
					}
				</swiper-container>
			</div>
		</>
	)
}
