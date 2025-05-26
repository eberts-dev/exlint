export const Icon = ({ id, ...props }) => (
	<svg {...props}>
		<use xlinkHref={`#${id}`} />
	</svg>
)
