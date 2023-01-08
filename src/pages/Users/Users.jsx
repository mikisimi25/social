import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import UserListItem from './../../components/UserListItem/UserListItem';
import * as UserService from './../../services/User.service.jsx';


const Users = () => {

  const { isLoading, error, data } = useQuery('users', UserService.getUser) 
  
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
    
    return(
        <div className="col-12 col-md-6">
          <h2>LIST OF USERS</h2>
          <ul>
            {
              (data.length <= 0) ?
              <li className={'notFoundItem'}>USERS NOT FOUND</li>
              :
              data.data.map( user => <UserListItem key={user} data={user} /> )
            }
          </ul>
        </div>
    )

}

export default Users;