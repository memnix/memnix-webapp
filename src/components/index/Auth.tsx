/** @jsxImportSource solid-js */

import { createSignal, createEffect, onCleanup, lazy, onMount } from "solid-js"
import { Icon } from "@iconify-icon/solid"
import {setDefaultNamespace, t} from "i18next"

setDefaultNamespace("common")

export default function Auth() {
	const [username, setUsername] = createSignal("")
	const [password, setPassword] = createSignal("")
	const login = async () => {}

	onMount(async () => {})

	return (
		<>
			<div class="flex flex-col gap-4 p-4 md:p-8">
				<div class="">
					<label class="label">
						<span class="label-text">{t("auth.email")}</span>
					</label>
					<input
						type="text"
						placeholder="Enter your username"
						class="input-bordered input w-full px-3 py-2 transition duration-100"
						onChange={(ev) => setUsername(ev.currentTarget.value)}
						value={username()}
					/>
				</div>

				<div class="">
					<label class="label">
						<span class="label-text">{t("auth.password")}</span>
					</label>
					<input
						type="password"
						placeholder="Enter your password"
						class="input-bordered input w-full px-3 py-2 transition duration-100"
						onChange={(ev) => setPassword(ev.currentTarget.value)}
						value={password()}
					/>
				</div>

				<button
					onClick={login}
					class="btn-primary btn px-8 py-3 transition duration-100"
				>
					{t("auth.login")}
				</button>

				<div class="relative flex items-center justify-center">
					<span class="absolute inset-x-0 h-px bg-base-content"></span>
					<span class="relative bg-base-100 px-4 text-sm">
						Log in with social
					</span>
				</div>

				<button class="btn-accent btn flex items-center justify-center gap-2 px-8 py-3 transition duration-100">
					<Icon icon="lucide:github" />
					Continue with github
				</button>
			</div>
		</>
	)
}
