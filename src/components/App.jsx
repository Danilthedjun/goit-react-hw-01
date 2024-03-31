import friends from "../friends.json";
import userData from "../userData.json";
import transactions from "../transactions.json";

import Profile from "./Profile/Profile";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile info={userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
