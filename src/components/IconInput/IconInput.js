import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZE_STYLES = {
  small: {
    '--font-size': `${14 / 16}rem`,
    '--padding-left': '24px',
    '--border': '1px solid black'
  },
  large: {
    '--font-size': `${18 / 16}rem`,
    '--padding-left': '36px',
    '--border': '2px solid black'
  }
};

const ICON_STYLES = {
  small: {
    size: 16,
    strokeWidth: 2
  },
  large: {
    size: 24,
    strokeWidth: 2
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizeStyles = SIZE_STYLES[size];
  const iconStyles = ICON_STYLES[size];

  if (!sizeStyles) {
    throw new Error(`Could not find size with name ${size}.`);
  }

  return (
      <Wrapper style={{ 
        '--width': `${width}px`,
      }}>
        <Input 
        id={label}
        type="text"
        style={sizeStyles}
        placeholder={placeholder} />
        <InputLabel htmlFor={label}>
          <VisuallyHidden>{label}</VisuallyHidden>
          <Icon id={icon} {...iconStyles} />
        </InputLabel>
      </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray500};

  &:hover {
    color: black;
  }
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: var(--width);
  padding: 7px 0;
  padding-left: var(--padding-left);
  border: none;
  border-radius: 0;
  outline-offset: 3px;
  border-bottom: var(--border);
  font-size: var(--font-size);
  font-weight: 700;

  &::placeholder {
    font-weight: 400;
  }
`;


export default IconInput;
