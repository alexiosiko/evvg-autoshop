import React from "react"

export default function Description({ children, className }: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div className={`${className} text-2xl text-[var(--text-other)]`}>
			{children}
		</div>
	)
}