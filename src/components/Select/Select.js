import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
        <SelectWrapper value={value} onChange={onChange}>
            {children}
        </SelectWrapper>
        <SelectIcon id="chevron-down" size="16" strokeWidth="2" />
    </Wrapper>

  );
};

const Wrapper = styled.div`
    position: relative;
    width: fit-content;
`;
const SelectIcon = styled(Icon)`
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: ${COLORS.gray700};

`;

const SelectWrapper = styled.select`
    appearance: none;
    border-radius: 8px;
    border: none;
    width: fit-content;
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    padding: 12px 52px 12px 16px;
    
    &:hover {
        color: ${COLORS.black};

        & + ${SelectIcon} {
            color: ${COLORS.black};
        }
    }
`;




export default Select;
