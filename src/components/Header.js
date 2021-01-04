import React from 'react'

export default function Header() {
    return (
        <nav class="flex bg-black h-20 container-sm">
            <div class="flex w-2/12	 text-white bg-gray-100">
                <p class="text-white">button</p>
            </div>
            <div class="">
                <a class="flex-auto items-center tracking-wide no-underline hover:no-underline font-bold text-green-800 text-2xl " href="/">
                        Eilhwan's Portfolio
                </a>
            </div>
        </nav>
    )
}
