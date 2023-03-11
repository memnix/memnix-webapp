/** @jsxImportSource solid-js */

import { createSignal, onMount } from "solid-js"
import { login } from "@common/utils/security"
import { LoginResponse } from "@common/types/api"

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

	const { labels } = props

	const onLoginWithDiscord = async () => {
		await fetch("/login/discord")
	}

	const onLoginWithGithub = async () => {
		await fetch("/login/github")
	}

	return (
		<>
			<div class="flex flex-col gap-4 p-4 md:p-8">
				<div class="">
					<label class="label">
						<span class="label-text">{labels.email}</span>
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
						<span class="label-text">{labels.password}</span>
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
					{labels.login}
				</button>
			</div>
		</>
	)
}
