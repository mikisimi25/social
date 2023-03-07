import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useFetchRepositories } from '../../hooks/useRepos';

import UserListItem from './../../components/UserListItem/UserListItem';


const Users = () => {
    const { data, error, isLoading } = useFetchRepositories();
    // const favoriteRepos = useFavoriteReposStore(
    //   (state) => state.favoriteReposIds
    // );

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
              data.map( user => <UserListItem key={user} data={user} /> )
            }
          </ul>
        </div>
    )

}

export default Users;