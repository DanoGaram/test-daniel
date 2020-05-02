import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import InboxHeader from '../InboxHeader';
import InputSearch from '../partials/InputSearch';
import EmailList from '../EmailList';
import { Email } from '../../models/Email';
import Card from '../partials/Card';
import { markAsRead, selectEmail } from '../../stateManager/actions/Email';
import './InboxNavigation.scss';

const InboxNavigation = (props) => {
    let [emailList, setEmailList] = useState<Email[]>([]);
    let [textSearch, setTextSearch] = useState('');
    let [statusEmailFilter, setStatusEmailFilter] = useState(null);
    useEffect(() => {
        let newEmailList = props.list.filter(x => (!statusEmailFilter || x.status == statusEmailFilter) && (!textSearch || x.subject.toLowerCase().includes(textSearch) || x.body.toLowerCase().includes(textSearch)))
        setEmailList(newEmailList);
    }, [props.list, textSearch, statusEmailFilter]);

    const filterChanged = (statusEmail) => {
        setStatusEmailFilter(statusEmail);
    }
    const textFilterChanged = (text: string) => {
        setTextSearch(text);
    }
    const selectedEmailChanged = (email: Email) => {
        props.selectEmail(email);
    }
    return (
        <Card className="inbox-container">
            <InboxHeader unreadEmails={props.list.filter(x => (!statusEmailFilter || x.status == statusEmailFilter) && !x.isReaded ).length} filterChanged={filterChanged} filter={statusEmailFilter}></InboxHeader>
            <hr/>
            <InputSearch textChanged={textFilterChanged}></InputSearch>
            <hr/>
            <EmailList list={emailList} onSelectEmail={selectedEmailChanged} selectedId={props.selected?._id}></EmailList>
        </Card>
    );
}

const mapStateToProps = (state) => {return {list: state.emailsReducer.emails, selected: state.emailsReducer.selected }}

const mapDispatchToProps = (dispatch) => ({
    markEmailAsRead: (emailId) => dispatch(markAsRead(emailId)),
    selectEmail: (emailId) => dispatch(selectEmail(emailId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(InboxNavigation);
