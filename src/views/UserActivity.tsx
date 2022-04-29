import React,{FC} from 'react';
import UserDetail from '../UserActivity/UserActivity';
interface UserResultListProp{
   users: Array<UserSearch>,
   noOfApiCall: number
}
const UserActivityView = () => {

const userList = users.map((user,index) =>
     <UserActivity user={user} key={index}/>
    );
  if(users.length <= 0) return <div>
    <h3>User Results : (called api {noOfApiCall} times)</h3>
    <p>No Users!</p>
  </div>
  return (
    <div className="UserResultList__Container">
        <h3>User Results : (called api {noOfApiCall} times)</h3>
        {userList}
    </div>
  );

export default UserActivityView;
