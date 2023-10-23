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

const UserBlock = ({ email, userStatus }) => (
  <UBlock>
    <Email>{email}</Email>
    <Status>{userStatus}</Status>
  </UBlock>
);

export default UserBlock;
