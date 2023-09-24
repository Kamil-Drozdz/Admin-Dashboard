import CardContainer from './CardContainer';
import { convert } from '@/lib/convert';
import { totalValue } from '@/lib/entities/totalValue';
import { ReactNode } from 'react';

interface CardDataProps {
	className?: string;
	title: string;
	data: {
		labels: string[];
		datasets: {
			fill?: boolean;
			label: string;
			data: number[];
			backgroundColor: string;
			borderColor?: string;
		}[];
	};
	children: ReactNode;
	icon?: ReactNode;
	iconColor?: string;
}
const CardChart = ({ className, title, data, icon, children, iconColor }: CardDataProps) => {
	return (
		<CardContainer className={className}>
			{icon && <div className={`${iconColor} h-12 w-12 rounded-full bg-opacity-25 flex justify-center items-center `}>{icon}</div>}
			<div className='text-white'>{title}</div>
			<h4 className='text-gray-200 text-2xl'>{convert(totalValue(data))}</h4>
			{children}
		</CardContainer>
	);
};

export default CardChart;
