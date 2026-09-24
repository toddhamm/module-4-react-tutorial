import React from 'react';

interface Props {
	children: string;
	color?: 'primary' | 'danger' | 'warning';
	onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {

	return (
		<button color="primary" className = {"btn btn-" + color} onClick={onClick}>{children}</button>
	)

}

export default Button;