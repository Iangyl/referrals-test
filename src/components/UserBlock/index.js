import { useEffect, useRef, useState } from 'react';
import { truncateText } from '../../utils/helpers';

import {
  fontHeading,
  fontUserStatus,
  generalPadding,
  mgBt5,
  textCapitalize,
} from '../../styles/constants';
import styled from 'styled-components';

const UBlock = styled.div`
  padding: ${generalPadding};
`;

const Email = styled.p`
  width: 100%;
  font-family: ${fontHeading.fontFamily};
  font-weight: ${fontHeading.fontWeight};
  font-size: ${fontHeading.fontSize};
  margin-bottom: ${mgBt5};
`;

const Status = styled.p`
  width: 100%;
  font-family: ${fontUserStatus.fontFamily};
  font-weight: ${fontUserStatus.fontWeight};
  font-size: ${fontUserStatus.fontSize};
  color: ${fontUserStatus.color};
  text-transform: ${textCapitalize};
`;

const UserBlock = ({ email, userStatus }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const divWidth = containerRef.current.getBoundingClientRect().width;
      setContainerWidth(divWidth);
    }
  }, []);

  return (
    <UBlock ref={containerRef}>
      <Email>{truncateText(email, 20)}</Email>
      <Status>{userStatus}</Status>
    </UBlock>
  );
};

export default UserBlock;
