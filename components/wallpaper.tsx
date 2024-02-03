export default function Wallpaper({ svg, className }: {
	svg: any
	className?: string,
}) {
	return (
		<div className={className} style={{
			backgroundImage: `url(${svg.src})`,
			backgroundSize: 'cover',
			backgroundPosition: 'top',
			fill: "true",
			height: '1400px', // Adjust the height as needed
			position: 'absolute',
			zIndex: -10,
			width: '150vw',
			left: 'calc(-50vw + 50%)',
			overflow: 'visible'
		  }} />
		)
}