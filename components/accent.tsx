export default function Accent({ children} : {
	children: string,
}) {
	return <span className="text-[var(--accent)]">{children}</span>
}