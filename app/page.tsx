"use client"

import Br from '@/components/br'
import About from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import Contributions from '@/components/sections/contributions'
import Footer from '@/components/sections/footer'
import Intro from '@/components/sections/intro'
import HowItStarted from '@/components/sections/ourstory'
import Services from '@/components/sections/services'
import Wallpaper from '@/components/wallpaper'
import wallpaperSVG from "@/images/image5.jpg"
import WhyUs from '@/components/sections/whyus'

export default function Home() {
	return (
		<main id='home' className='overflow-x-hidden flex flex-col	place-items-center ' >
			<Wallpaper className="-top-[00px]" svg={wallpaperSVG} />
			<Intro />
			<About />	
			<Br  size={6}/>
			<HowItStarted />
			<Services />
			<Br  size={6}/>
			<WhyUs />
			<Contact />
			<Footer />
			{/* <Wallpaper className="-top-[500px]" svg={wallpaperSVG} />
			<Br  size={3}/>
			<Br size={6} />
			<Wallpaper className='translate-y-44 !h-[1900px]' svg={middle}/>
			<div id='services' />
			<Br  size={6 } />
			<Br size={4} />
			<Stats />
			<Br size={12} />
			<Br size={7} />
			<Wallpaper className='!h-[1000px] !bg-bottom' svg={bottomWallpaper}  />
			<Br size={4} />
			<Br size={12} />
			<Contributions />
				 */}
		</main>
	)
}
