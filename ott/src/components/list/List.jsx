import { useState, useRef } from 'react';

import {
	ArrowBackIosOutlined,
	ArrowForwardIosOutlined,
} from '@material-ui/icons';

import ListItem from '../list-item/ListItem';
import './list.scss';

const List = () => {
	const [isMoved, setIsMoved] = useState(false);
	const [slideNumber, setSlideNumber] = useState(0);

	const listRef = useRef();

	const handleClick = (direction) => {
		setIsMoved(true);
		let distance = listRef.current.getBoundingClientRect().x - 50;

		console.log(distance);
		if (direction === 'left' && slideNumber > 0) {
			setSlideNumber(slideNumber - 1);
			listRef.current.style.transform = `translateX(${230 + distance}px)`;
		}
		if (direction === 'right' && slideNumber < 5) {
			setSlideNumber(slideNumber + 1);
			listRef.current.style.transform = `translateX(${-230 + distance}px)`;
		}
	};
	return (
		<div className='list'>
			<span className='list-title'>continue to watch</span>
			<div className='wrapper'>
				<ArrowBackIosOutlined
					className='sliderArrow left'
					onClick={() => handleClick('left')}
					style={{ display: !isMoved && 'none' }}
				/>
				<div className='container' ref={listRef}>
					<ListItem index={0} />
					<ListItem index={1} />
					<ListItem index={2} />
					<ListItem index={3} />
					<ListItem index={4} />
					<ListItem index={5} />
					<ListItem index={6} />
					<ListItem index={7} />
					<ListItem index={8} />
					<ListItem index={9} />
					<ListItem index={10} />
					<ListItem index={11} />
					<ListItem index={12} />
					<ListItem index={13} />
					<ListItem index={14} />
				</div>
				<ArrowForwardIosOutlined
					className='sliderArrow right'
					onClick={() => handleClick('right')}
				/>
			</div>
		</div>
	);
};

export default List;
