import React from 'react';
import Header from '../Common/Header';
import { Icon } from "@iconify/react";
import styles from "./Admin.module.scss";
import UserDetails from './UserDetails';
import { Router, Route } from 'react-router-dom';
import EditUserDetails from './EditUserDetails';

const Admin = () => {
    return (  
        <main>
            <Header 
            message="List of non-verified users"
            ficon={<Icon icon="fluent:text-bullet-list-dismiss-20-regular" />}
            />  
        <div className={styles.box}>
               <table className="table table-stripped table border">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Date of Birth</th>
                    </tr>
                    </thead>
                    <tbody>
            <UserDetails fname="Lucifer" lname="Vishwa" email="vish@gmail.com" dob="1997-08-12" uid={1} />
            <UserDetails fname="Lucifer" lname="Vishwa" email="vish@gmail.com" dob="1997-08-12" uid={1} />
        </tbody>
        </table>
        </div>


        </main>
    );
}
 
export default Admin;