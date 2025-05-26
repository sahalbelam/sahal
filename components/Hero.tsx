import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import sahal from '@/images/sahal.jpg'
import Link from 'next/link'
import { GithubIcon, TwitterIcon } from 'lucide-react'
const Hero = () => {
    return (
        <div className='flex justify-center'>
            <div className='max-w-5xl w-full p-4 mt-4 text-xl grid grid-cols-2 gap-4'>
                <div className='col-span-1 text-xl ml-4'>
                    <p className='mb-1'>Hi! my name is <span className='font-extrabold'>Sahal.</span> Full-stack Dev. </p>
                    <p className='mb-1'>I build stuff just because it lives rent-free in my brain.
                        Sometimes useful, but always built with love.</p>
                    <p>Check out my work at <Link target='_blank' href={'https://docs.google.com/presentation/d/1__SSqwTBD_VrxmKzvmZDjiv-TBgiFwlT/edit?usp=drivesdk&ouid=101756015580056967105&rtpof=true&sd=true'} className='font-extrabold text-base underline'>SAC-ISRO.</Link></p>
                    <div className='flex gap-x-5 mt-5 '>
                        <Link href={'https://github.com/sahalbelam/'}><Button className='font-extrabold hover:scale-x-105 duration-150' >Check out my<GithubIcon /></Button></Link>
                        <Link href={'https://x.com/SahalBelam/'}><Button className='font-bold hover:scale-x-105 duration-150' variant={'secondary'}>Follow me on <TwitterIcon /></Button></Link>

                    </div>
                </div>
                <div className='col-span-1 flex justify-end w-full'>
                    <Image src={sahal} alt='sahal.jpg' width={250}
                        className='rounded-xl mr-4 hover:scale-105 duration-150'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero