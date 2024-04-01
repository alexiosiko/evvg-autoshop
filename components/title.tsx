import React from "react";

export default function Title({ children, className }: {
	children: React.ReactNode,
	className?: string
}) {
	return (
		<h1 className={` text-6xl text-[var(--text)] ${className}`}>{children}</h1>
	)
}