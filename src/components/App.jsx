import Profile from './profile/Profile.jsx';
import user from './user.json';
import Statistics from './statistics/Statistics.jsx';
import data from './data.json';
import FriendList from './friendlist/FriendList.jsx';
import friends from './friends.json';
import TransactionHistory from './transactionhistory/TransactionHistory.jsx';
import transactions from './transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
