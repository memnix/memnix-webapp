/** @jsxImportSource solid-js */

import { createSignal, onMount } from "solid-js"
import { Icon } from "@iconify-icon/solid"
import { login } from "../../../common/utils/security"
import { LoginResponse } from "../../../common/types/api"

export default function Auth(props) {
	const [username, setUsername] = createSignal("")
	const [password, setPassword] = createSignal("")
	const onLogin = async () => {
		await login(username(), password())
			.then(({ token }: LoginResponse) => {
				window.location.href = "/callback/" + token
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const {t} = props


	const onLoginWithDiscord = async () => {
		window.location.href = "http://localhost:1815/v2/security/discord"
	}

	const onLoginWithGithub = async () => {
		window.location.href = "http://localhost:1815/v2/security/github"
	}

	onMount(async () => {})

	// Create a prop for the login button

	return (
		<>
			<div class="flex flex-col gap-4 p-4 md:p-8">
				<div class="">
					<label class="label">
						<span class="label-text">{t.email}</span>
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
						<span class="label-text">{t.password}</span>
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
					onClick={onLogin}
					class="btn-primary btn px-8 py-3 transition duration-100"
				>
					{t.login}
				</button>

				<div class="relative flex items-center justify-center">
					<span class="absolute inset-x-0 h-px bg-base-content"></span>
					<span class="relative bg-base-100 px-4 text-sm">
						Log in with social
					</span>
				</div>

				<button
					onClick={onLoginWithGithub}
					class="btn-accent btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100"
				>
					<Icon icon="lucide:github" height="none" style={{ height: "100%" }} />
					Continue with github
				</button>
				<button
					onClick={onLoginWithDiscord}
					class="btn-secondary btn flex items-center justify-center gap-2 px-8 py-2 transition duration-100"
				>
					<Icon
						icon="ic:baseline-discord"
						height="none"
						style={{ height: "100%" }}
					/>
					Continue with discord
				</button>
			</div>
		</>
	)
}
