import React from 'react';
import { Email } from '../../models/Email';
import EmailItem from './EmailItem';
import './EmailList.scss';

const EmailList = (props: {list: Array<Email>, selectedId: string, onSelectEmail: Function}) => {
    const getEmail = (email: Email, key: string) => {
        return <li key={key} onClick={() => props.onSelectEmail(email)}><EmailItem email={email} isActive={props.selectedId === key} ></EmailItem><hr/></li>
    }
    const emailList = props.list.map((x,i) => getEmail(x,x._id));
    return (
        <div className="email-list-container">
            <ul className="ul-email">{emailList}</ul>
        </div>
    );
}

export default EmailList;