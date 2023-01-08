import React from 'react';
import styles from './UserListItem.module.scss';

  
const UserListItem = ({data}) => {

    return (
        <li className={styles.userItem}>
            <h5>{data}</h5>
        </li>
    )

}

export default UserListItem;