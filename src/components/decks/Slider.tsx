/** @jsxImportSource solid-js */

import { onMount} from "solid-js"
import {register} from "swiper/element/bundle"


register();
export default function Slider(props) {
	onMount(async () => {
	})

	const spaceBetween = 30;
	const onProgress = (e) => {
		const [swiper, progress] = e.detail;
		console.log(progress);
	};
	const onSlideChange = (e) => {
		console.log('slide changed');
	};

	const decks = [
		{
			id: 1,
			name: 'Deck 1',
			description: 'This is the first deck',
		},
		{
			id: 2,
			name: 'Deck 2',
			description: 'This is the second deck',
		},
		{
			id: 3,
			name: 'Deck 3',
			description: 'This is the third deck',
		},
		{
			id: 4,
			name: 'Deck 4',
			description: 'This is the fourth deck',
		},
		{
			id: 5,
			name: 'Deck 5',
			description: 'This is the fifth deck',
		},
		{
			id: 6,
			name: 'Deck 6',
			description: 'This is the sixth deck',
		},
		{
			id: 7,
			name: 'Deck 7',
			description: 'This is the seventh deck',
		},
		{
			id: 8,
			name: 'Deck 8',
			description: 'This is the eighth deck',
		},
		{
			id: 9,
			name: 'Deck 9',
			description: 'This is the ninth deck',
		}
	]

	return (
		<>
			<div class="flex items-center justify-center h-screen">
				<swiper-container
					slides-per-view={5}
					space-between={spaceBetween}
					navigation={true}
					class={"w-full h-full"}
				>
					{decks.map(deck => {
						return (
							<swiper-slide class="flex items-center justify-center text-center bg-base-200">
								<div class="flex flex-col items-center justify-center w-full h-full">
									<h1 class="text-2xl font-bold text-white">{deck.name}</h1>
									<p class="text-white">{deck.description}</p>
								</div>
							</swiper-slide>
						)
					})
					}
				</swiper-container>
			</div>
		</>
	)
}
