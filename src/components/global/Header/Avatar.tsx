/** @jsxImportSource react */
import {Menu, Transition} from "@headlessui/react"
import {Fragment} from "react"

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ")
}

export default function Avatar({avatar}: { avatar: string }) {
	return (
		<>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button
						className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm">
						<img
							src={avatar}
							loading={"eager"}
							decoding={"async"}
							alt="Avatar"
							className="rounded-full"
							width={64}
							height={64}
						/>
					</Menu.Button>
				</div>

				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items
						className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						<div className="py-1">
							<Menu.Item>
								{({active}) => (
									<a
										href="#"
										className={classNames(
											active ? "bg-base-content text-base-100" : "",
											"block px-4 py-2 text-sm"
										)}
									>
										Edit
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({active}) => (
									<a
										href="#"
										className={classNames(
											active ? "bg-base-content text-base-100" : "",
											"block px-4 py-2 text-sm"
										)}
									>
										Duplicate
									</a>
								)}
							</Menu.Item>
						</div>
						<div className="py-1">
							<Menu.Item>
								{({active}) => (
									<a
										href="#"
										className={classNames(
											active ? "bg-base-content text-base-100" : "",
											"block px-4 py-2 text-sm"
										)}
									>
										Archive
									</a>
								)}
							</Menu.Item>
							<Menu.Item>
								{({active}) => (
									<a
										href="/logout"
										className={classNames(
											active ? "bg-base-content text-base-100" : "",
											"block px-4 py-2 text-sm"
										)}
									>
										Logout
									</a>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</>
	)
}
