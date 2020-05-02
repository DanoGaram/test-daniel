import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import InboxNavigation from '../InboxNavigation';
import EmailDetail from '../EmailDetail';
import { emailRepository } from '../../services/mockEmailsRepository';
import { setEmails, addEmails } from '../../stateManager/actions/Email';
import { Email, INBOX_EMAIL_STATUS } from '../../models/Email';
import './EmailManager.scss';

const EmailManager = (props) => {

    emailRepository.getEmails().then(x => {
        x.data.forEach((element: Email) => {
            element._id = Email.uuidv4();
            element.status = element.status ? element.status : INBOX_EMAIL_STATUS;
        });
        props.setEmails(x.data);
    });
    setInterval(() => {
        const newEmails: Array<Email> = [{_id: Email.uuidv4(), from: 'daniel', to: 'karen', subject: 'Hello', body: 'Hello my friend', date: '01/05/2020', isReaded: false, tag: 'Ddd', status: 1},
        {_id: Email.uuidv4(), from: 'daniel', to: 'karen', subject: 'Bye', body: 'Bye my friend', date: '01/05/2020', isReaded: false, tag: 'Kkk', status: 1}]
        props.addEmails(newEmails);
    }, 90000);
    return(
        <div className="email-manager-container">
            <InboxNavigation/>
            <EmailDetail />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    setEmails: (emails) => dispatch(setEmails(emails)),
    addEmails: (emails) => dispatch(addEmails(emails)),
})

export default connect(null, mapDispatchToProps)(EmailManager);