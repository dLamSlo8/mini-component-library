/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


const ProgressBar = ({ value, size }) => {
  let Component;

	switch (size) {
		case 'large':
			Component = LargeWrapper;
			break;
		case 'medium':
			Component = MediumWrapper;
			break;
		case 'small':
			Component = SmallWrapper;
			break;
		default:
			throw new Error(`No size variant of ProgressBar with name ${size}`);
	}

  return (
		<Component role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
			<VisuallyHidden>{value}%</VisuallyHidden>
			<InnerBar progressPercent={value / 100} />
		</Component>
	);
};

const BaseWrapper = styled.div`
	box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
	overflow: hidden;
`;

const LargeWrapper = styled(BaseWrapper)`
  border-radius: 8px;
  padding: 4px;
  height: 20px;
`;

const MediumWrapper = styled(BaseWrapper)`
	border-radius: 4px;
	height: 12px;
`;

const SmallWrapper = styled(BaseWrapper)`
	border-radius: 4px;
	height: 8px;
`;

const InnerBar = styled.div`
	border-radius: 4px 0 0 4px;

	transform: scaleX(${props => props.progressPercent});
	transform-origin: left;
	height: 100%;
	background-color: ${COLORS.primary};
`;

export default ProgressBar;
