import { useRef } from 'react'
import CopyBtn from './CopyBtn'

const CopyableInput = ({ 
	value, 
	inputId = "exlint-install-command", 
	ariaLabel = "Copyable text", 
	className = "", 
}) => {

	const inputRef = useRef(null);

	const handleClick = () => {
		inputRef.current.select();
	}

	return (
		<div className={`${className}`}>
      <input
        ref={inputRef}
        id={inputId}
        type="text"
        value={value}
        readOnly
        onClick={handleClick}
        aria-label={ariaLabel}
      />
			<CopyBtn targetId={inputId} />
		</div>
	);
}

export default CopyableInput;
