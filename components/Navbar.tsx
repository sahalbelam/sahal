'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const navLinks = (
        <>
            <Link href={'/'} className="block py-2 px-4" onClick={() => setMenuOpen(false)}>Sahal Belam</Link>
            <Link href={'#projects'} className="block py-2 px-4" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link target='_blank' href={'https://drive.google.com/file/d/15L5RaV2z0TfU4ZoDbJGiwCp2R3I0ePaI/view?usp=sharing'} className="block py-2 px-4" onClick={() => setMenuOpen(false)}>Resume</Link>
            <Link href={'/my-thoughts'} className="block py-2 px-4" onClick={() => setMenuOpen(false)}>My-thoughts</Link>
            <Button variant="outline" size="icon" className="ml-2 relative" onClick={toggleTheme} aria-label="Toggle theme">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </>
    )

    return (
        <div className='flex justify-center border-b-1 border-b-neutral-300'>
            <div className='max-w-5xl flex w-full justify-between items-center p-4 text-xl'>
                {/* Desktop Nav */}
                <div className="hidden md:flex w-full justify-between items-center">
                    {navLinks}
                </div>
                {/* Mobile Nav */}
                <div className="flex md:hidden w-full justify-between items-center">
                    <Link href={'/'} className="font-bold">Sahal Belam</Link>
                    <Button variant="outline" size="icon" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <X /> : <Menu />}
                    </Button>
                </div>
                {/* Mobile Menu Drawer */}
                {menuOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setMenuOpen(false)}>
                        <div
                            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white dark:bg-neutral-900 shadow-lg flex flex-col p-6 gap-2 z-50"
                            onClick={e => e.stopPropagation()}
                        >
                            <Button variant="outline" size="icon" className="self-end mb-4" onClick={() => setMenuOpen(false)}>
                                <X />
                            </Button>
                            {navLinks}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
