import React from 'react'

function newprojectform() {
	return (
		<div>
			<div class="mb-6">
				<label
					for="message"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Abstract
				</label>
				<textarea
					id="message"
					rows="4"
					class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Leave a comment..."
				></textarea>
			</div>
			<div class="mb-6">
				<label
					for="base-input"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Base input
				</label>
				<input
					type="text"
					id="base-input"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>
			<div>
				<label
					for="small-input"
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					Small input
				</label>
				<input
					type="text"
					id="small-input"
					class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>

			<label
				class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				for="user_avatar"
			>
				Upload file
			</label>
			<input
				class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
				aria-describedby="user_avatar_help"
				id="user_avatar"
				type="file"
			/>
			{/* <div
				class="mt-1 text-sm text-gray-500 dark:text-gray-300"
				id="user_avatar_help"
			></div> */}
		</div>
	);
}

export default newprojectform