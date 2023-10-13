import { useInterval } from '@/hooks';
import { SpanProps } from 'react-html-props';

export type TimerProps = SpanProps
export const Timer = ({...props}: TimerProps) => {
	const now = Date.now();
	useInterval(() => new Date(now + 1000), 1000, [now]);

	return (
		<span></span>
	)
}
