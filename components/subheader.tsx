import React from "react"

export default function SubHeader({ children, className }: {
	children: React.ReactNode,
	className?: string
}) {
	return (
		<p className={`${className} text-[var(--accent)]`}>
			{children}
		</p>
	)
}