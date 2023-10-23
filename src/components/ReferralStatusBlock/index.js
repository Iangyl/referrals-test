import { useMemo } from 'react';
import {
  fontHeading,
  fontRefStatus,
  generalPadding,
  mgBt5,
  textCapitalize,
} from '../../styles/constants';
import styled from 'styled-components';

const StatusBlock = styled.div`
  padding: ${generalPadding};
  &:last-of-type {
    margin-left: 50px;
  }
`;

const Status = styled.p`
  width: 100%;
  font-family: ${fontHeading.fontFamily};
  font-weight: ${fontHeading.fontWeight};
  font-size: ${fontHeading.fontSize};
  text-transform: ${textCapitalize};
  margin-bottom: ${mgBt5};
`;

const Details = styled.p`
  width: 100%;
  font-family: ${fontRefStatus.fontFamily};
  font-weight: ${fontRefStatus.fontWeight};
  font-size: ${fontRefStatus.fontSize};
  color: ${props => props.$isFailed ? 'red' : '#c7c7c7'};
  text-transform: ${textCapitalize};
`;

const UserBlock = ({ status }) => {
  const isFailed = useMemo(() => {
    if (status === 'blocked' || status === 'volded' || status === 'flagged') return true
    else return false
  }, [status])

  return (
    <StatusBlock>
      <Status>{status}</Status>
      <Details $isFailed={isFailed}>
        {isFailed ? 'Marked as fraud' : 'Passed fraud checks'}
      </Details>
    </StatusBlock>
  )
};

export default UserBlock;
