'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navigation() {
    const pathname = usePathname()

    return (
        <nav>
            <Link href="/" className={pathname === '/' ? 'mx-4 font-semibold  ' : 'mx-4 font-semibold text-yellow-600 '}>Home</Link>

            <Link href="/about" className={pathname === '/about' ? 'mx-4 font-semibold  ' : 'mx-4 font-semibold text-yellow-600 '}>About</Link>

        </nav>
    )
}

export default Navigation