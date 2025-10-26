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

            <Link href="/products/1" className={pathname === '/products/1' ? 'mx-4 font-semibold  ' : 'mx-4 font-semibold text-yellow-600 '}>Product1</Link>
        </nav>
    )
}

export default Navigation