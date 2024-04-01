import React from 'react'
import LeftRight from '../leftright'
import Image from 'next/image'
import img from "@/images/image1.jpg"
import Description from '../description'
import SubHeader from '../subheader'
import Title from '../title'

export default function WhyUs() {
  return (
	<LeftRight className='mb-12'>
		<div className="p-12 flex flex-row justify-end">
				<Image className="rounded-lg h-[600px] object-contain" src={img} alt="mechanic-image" />
		</div>
		<div className="max-sm:mt-12 max-w-4xl pt-12 xl:-translate-x-24 p-4 pb-12">
			<SubHeader>Our Story</SubHeader>
			<Title  className='pb-4'>Why EVVG?</Title>
			<Description>At EVVG Auto Services, trust is key. With over 30 years of experience, we're a trusted name in our community. Count on honest, reliable service at fair prices. Our skilled technicians prioritize your safety and satisfaction, offering personalized care for your vehicle. Join our family today for peace of mind with EVVG Auto Services.</Description>
			<ul>
				<li><Description>Fair and Transparent Pricing: Clear, honest pricing with no hidden fees.</Description></li>
				<li><Description>Affordable Options: Quality service accessible to all budgets.</Description></li>
				<li><Description>Value for Money: Excellent service that maximizes the value of your investment.</Description></li>
				<li><Description>Trustworthy Advice: Honest recommendations tailored to your needs.</Description></li>
			</ul>
		</div>
	</LeftRight>
  )
}
