'use client'
import Link from 'next/link'
import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const { setTheme } = useTheme()
    return (
        <div className='flex justify-center border-b-1 border-b-neutral-300'>
            <div className='max-w-5xl flex w-full justify-between items-center p-4 text-xl'>
                <Link href={'/'}>Sahal Belam</Link>
                <Link href={'#projects'}>Projects</Link>
                <Link target='_blank' href={'https://drive.google.com/file/d/15L5RaV2z0TfU4ZoDbJGiwCp2R3I0ePaI/view?usp=sharing'}>Resume</Link>
                <Link href={'/my-thoughts'}>My-thoughts</Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default Navbar