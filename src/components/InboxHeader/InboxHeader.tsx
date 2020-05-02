import React from 'react';
import './InboxHeader.scss';
import { INBOX_EMAIL_STATUS, SPAM_EMAIL_STATUS, DELETED_EMAIL_STATUS } from '../../models/Email';

const InboxHeader = (props: {unreadEmails: number, filterChanged: Function, filter: any}) => {
    const filterChanged = (e) => {
        props.filterChanged(e.target.value);
    }
    return (
        <div className="inbox-header-container">
            <span className="title">{!props.filter ? 'All' : props.filter == INBOX_EMAIL_STATUS ? 'Inbox' : props.filter == SPAM_EMAIL_STATUS ? 'Spam' : 'Deleted' }</span>
            <div className="badge error">{props.unreadEmails}</div>
            <div className="custom-select right">
                <select onChange={filterChanged}  >
                    <option value="">Filter by</option>
                    <option value={INBOX_EMAIL_STATUS}>Inbox</option>
                    <option value={SPAM_EMAIL_STATUS}>Spam</option>
                    <option value={DELETED_EMAIL_STATUS}>Deleted</option>
                </select>
            </div>
        </div>
    );
}

export default InboxHeader;