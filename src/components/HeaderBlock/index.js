import { fontHeading, generalPadding } from '../../styles/constants';
import styled from 'styled-components';

const HeaderBlock = styled.h4`
  font-family: ${fontHeading.fontFamily};
  font-weight: ${fontHeading.fontWeight};
  font-size: ${fontHeading.fontSize};
  padding: ${generalPadding};
  &:last-of-type {
    margin-left: 50px;
  }
`;

export default HeaderBlock;
