import {
  fontHeading,
  fontDate,
  generalPadding,
  mgBt5,
  mgBt7,
  textCapitalize,
} from '../../styles/constants';
import { formatMoney, formatPDTDateToString } from '../../utils/helpers';

import styled from 'styled-components';

const ReferralBlock = styled.div`
  padding: ${generalPadding};
`;

const Event = styled.p`
  width: 100%;
  font-family: ${fontHeading.fontFamily};
  font-weight: ${fontHeading.fontWeight};
  font-size: ${fontHeading.fontSize};
  text-transform: ${textCapitalize};
  margin-bottom: ${mgBt5};
`;

const Date = styled.p`
  width: 100%;
  font-family: ${fontDate.fontFamily};
  font-weight: ${fontDate.fontWeight};
  font-size: ${fontDate.fontSize};
  color: ${fontDate.color};
  margin-bottom: ${mgBt7};
`;

const Price = styled.p`
  width: 100%;
  font-family: ${fontHeading.fontFamily};
  font-weight: ${fontHeading.fontWeight};
  font-size: ${fontHeading.fontSize};
`;

const ReferralEventBlock = ({ event, date, price }) => (
  <ReferralBlock>
    <Event>{event}</Event>
    <Date>{formatPDTDateToString(date)}</Date>
    <Price>{formatMoney(price)}</Price>
  </ReferralBlock>
);

export default ReferralEventBlock;
