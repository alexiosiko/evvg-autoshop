export default function Wallpaper({ svg, className }: {
	svg: any
	className?: string,
}) {
	return (
		<div className={className} style={{
			backgroundImage: `url(${svg.src})`,
			backgroundSize: 'cover',
			backgroundPosition:'center',
			fill: "true",
			height: '110vh', // Adjust the height as needed
			position: 'absolute',
			zIndex: -10,
			width: '100%',
			overflow: 'hidden'
		  }} />
		)
}