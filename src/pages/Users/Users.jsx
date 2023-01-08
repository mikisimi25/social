import React, { useEffect, useState } from 'react';

import UserListItem from './../../components/UserListItem/UserListItem';
import * as UserService from './../../services/User.service.jsx';


const Users = () => {
    const [ userColl, setUserColl ] = useState([]);
  
    useEffect(() => {
      UserService.getUser()
          .then(({data}) => {
              setUserColl(data);
          })
    }, []);
    
    return(
        <div className="col-12 col-md-6">
          <h2>LIST OF USERS</h2>
          <ul>
            {
              setUserColl.length ?
              <li className={'notFoundItem'}>USERS NOT FOUND</li>
              :
              userColl.map( user => <UserListItem data={user} /> )
            }
          </ul>
        </div>
    )

}

export default Users;