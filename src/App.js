import tableData, { tableHeaders } from './data/tableData';

import Row from './components/Rows/Row';
import Wrapper from './components/Wrapper';
import AppTitle from './components/AppTitle';
import RowHeader from './components/Rows/RowHeader';

function App() {
  return (
    <Wrapper>
      <AppTitle>Referrals - 345</AppTitle>
      <RowHeader headers={tableHeaders} />
      {tableData.map((item, idx) => (
        <>
          <Row
            key={idx}
            event={item.refEvent.name}
            date={item.refEvent.date}
            price={item.refEvent.price}
            advocateEmail={item.advocate.email}
            advocateStatus={item.advocate.userStatus}
            friendEmail={item.friend.email}
            friendStatus={item.friend.userStatus}
            status={item.refStatus.status}
          />
        </>
      ))}
    </Wrapper>
  );
}

export default App;
