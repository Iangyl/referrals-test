import Container from '../Container';
import HeaderBlock from '../../HeaderBlock';

const RowHeader = ({ headers }) => (
  <Container>
    {headers.map((item, idx) => (
      <HeaderBlock key={idx}>{item}</HeaderBlock>
    ))}
  </Container>
);

export default RowHeader;
