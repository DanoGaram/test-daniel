import React from 'react';
import { Email } from '../../../models/Email';
import './EmailItem.scss';

const EmailItem = (props: {email: Email, isActive: boolean}) => {
    return (
        <div className={`email-item ${props.email.isReaded ? '' : 'unread'} ${props.isActive ? 'active' : ''}`}>
            <div className="column-info">
                <span className="title">{props.email.subject}</span> <span className="truncate">{props.email.body}</span> 
            </div>
            <div className="column-date">
                <span className="gray">{props.email.date}</span><span>@</span>
            </div>
        </div>
    );
}

export default EmailItem;
