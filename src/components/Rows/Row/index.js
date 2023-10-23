import Container from '../Container';
import UserBlock from '../../UserBlock';
import ReferralEventBlock from '../../ReferralEventBlock';
import ReferralStatusBlock from '../../ReferralStatusBlock';

const Row = ({
  date,
  event,
  price,
  status,
  advocateEmail,
  friendEmail,
  advocateStatus,
  friendStatus,
}) => (
  <Container>
    <ReferralEventBlock event={event} date={date} price={price} />
    <UserBlock email={advocateEmail} userStatus={advocateStatus} />
    <UserBlock email={friendEmail} userStatus={friendStatus} />
    <ReferralStatusBlock status={status} />
  </Container>
);

export default Row;
