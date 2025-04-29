import React from 'react'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import Navbar from './Navbar'
import Waitlist from './ui/Waitlist'
export default function HeroSection() {
    

    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Waitlist/>
            </main>
        </>
    )
}

