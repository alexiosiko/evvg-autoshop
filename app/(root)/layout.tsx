import backgroundImage from '@/assets/photos/evvg-background.png'

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
		<div style={{
			marginTop: 30,
			backgroundImage: `url(${backgroundImage.src})`,
			aspectRatio: 16/12,
			margin: 'auto',
			maxHeight: 800,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			borderRadius: 15,
			}}>
		</div>
      <div className='max-w-screen-lg m-auto text-white '>
			{children}
		</div>
    </>
  )
}
