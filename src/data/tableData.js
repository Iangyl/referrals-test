import { parseDateStringToDatePDT } from '../utils/helpers';

export const tableHeaders = ['Referral event', 'Advocate', 'Friend', 'Referral status']

const tableData = [
  {
    refEvent: {
      name: 'purchase',
      date: parseDateStringToDatePDT('06/17/2020 at 7:13 PM PDT'),
      price: 120,
    },
    advocate: {
      email: 'autouser02345@gmail.com',
      userStatus: 'advocate'
    },
    friend: {
      email: 'fr58272@gmail.com',
      userStatus: 'friend'
    },
    refStatus: {
      status: 'pending'
    }
  },
  {
    refEvent: {
      name: 'purchase',
      date: parseDateStringToDatePDT('07/10/2020 at 4:05 AM PDT'),
      price: 100,
    },
    advocate: {
      email: 'ad0379118142@gmail.com',
      userStatus: 'advocate'
    },
    friend: {
      email: 'fr0379118142@gmail.com',
      userStatus: 'friend'
    },
    refStatus: {
      status: 'flagged'
    }
  },
  {
    refEvent: {
      name: 'purchase',
      date: parseDateStringToDatePDT('06/09/2020 at 12:42 PM PDT'),
      price: 28,
    },
    advocate: {
      email: 'ad02345@gmail.com',
      userStatus: 'advocate'
    },
    friend: {
      email: 'fr94250@gmail.com',
      userStatus: 'friend'
    },
    refStatus: {
      status: 'approved'
    }
  },
  {
    refEvent: {
      name: 'purchase',
      date: parseDateStringToDatePDT('08/07/2020 at 4:20 AM PDT'),
      price: 100,
    },
    advocate: {
      email: 'user.to.be.blocked92187@gmail.com',
      userStatus: 'advocate'
    },
    friend: {
      email: 'user.to.be.blocked2682@gmail.com',
      userStatus: 'friend'
    },
    refStatus: {
      status: 'blocked'
    }
  },
  {
    refEvent: {
      name: 'purchase',
      date: parseDateStringToDatePDT('06/09/2020 at 2:08 AM PDT'),
      price: 100,
    },
    advocate: {
      email: 'ad0693677382@gmail.com',
      userStatus: 'advocate'
    },
    friend: {
      email: 'fr0693677382@gmail.com',
      userStatus: 'friend'
    },
    refStatus: {
      status: 'volded'
    }
  },
];

export default tableData;
