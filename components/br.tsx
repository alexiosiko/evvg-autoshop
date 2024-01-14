export default function Br({ size }: { size: number}) {
	const brs = Array.from({ length: size }, (_, index) => <br key={index} />);
	return (
		<>
			{brs}
		</>
	)
}