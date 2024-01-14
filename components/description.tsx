import React from "react"

export default function Description({ children, className }: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<p className={`${className} text-lg text-[var(--text-other)]`}>
			{children}
		</p>
	)
}