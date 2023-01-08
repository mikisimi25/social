import React, { useEffect, useState } from 'react';

import './App.scss';
import UserListItem from './components/UserListItem/UserListItem';
import * as UserService from './services/User.service.jsx';

const App = () => {
  const [ userColl, setUserColl ] = useState([]);

  useEffect(() => {
    UserService.getUser()
        .then(({data}) => {
            setUserColl(data);
        })
  }, []);

  return (
    <div className="App container">
      <div className="row justify-content-center pt-md-3">
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
      </div>
    </div>
  );
}

export default App;
