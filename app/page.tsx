"use client"

import Br from '@/components/br'
import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Contributions from '@/components/sections/contributions'
import Footer from '@/components/sections/footer'
import Intro from '@/components/sections/intro'
import OurStory from '@/components/sections/ourstory'
import Services from '@/components/sections/services'
import Stats from '@/components/sections/stats'
import Wallpaper from '@/components/wallpaper'
import middle from "@/images/svgs/middle.svg";
import wallpaperSVG from "@/images/image5.jpg"
import bottomWallpaper from "@/images/image3.jpg"

export default function Home() {
	return (
		<main id='home' className='max-w-7xl m-auto' >
			<Wallpaper className="-top-[550px] " svg={wallpaperSVG} />
			<Intro />
			<Br size={6} />
			<Wallpaper className='translate-y-44 !h-[1900px]' svg={middle}/>
			<About />
			<div id='services' />
			<Br  size={6 } />
			<Services />
			<Br size={4} />
			<Stats />
			<Br size={12} />
			<OurStory />
			<Br size={7} />
			<Wallpaper className='!h-[1000px] !bg-bottom' svg={bottomWallpaper}  />
			<Br size={4} />
			<Contact />
			<Br size={12} />
			<Contributions />
			<Footer />	
		</main>
	)
}
