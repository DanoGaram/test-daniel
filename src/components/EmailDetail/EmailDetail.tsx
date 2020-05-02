import React from 'react';
import {connect} from 'react-redux';
import EmailActionsBar from '../EmailActionsbar';
import TagsBar from '../partials/TagsBar';
import { Email } from '../../models/Email';
import Card from '../partials/Card';
import CardContent from '../partials/Card/CardContent';
import CardActions from '../partials/Card/CardActions';
import Button from '../partials/Button';
import { markAsRead, markAsUnread, markAsSpam, deleteEmail } from '../../stateManager/actions/Email';
import './EmailDetail.scss';

const EmailDetail = (props) => {
    // const markUnread = () => {
    //     props.marke
    // }
    return props.email ?(
        <div className="email-detail-container">
            <EmailActionsBar deleted={() => props.deleteEmail(props.email._id)} spamed={() => props.markEmailSpam(props.email._id)}
             unreaded={() => props.markEmailAsUnRead(props.email._id)}/>
            <hr/>
            <div className="email-info">
                <p className="title">{props.email.subject}</p>
                <TagsBar tags={[props.email.tag]} />
                <Card className="card-email-body">
                    <CardContent className="card-email-content">
                        {props.email.body}
                    </CardContent>
                    <CardActions className="card-email-actions">
                        <span>@</span><Button text="Replay" theme="primary"></Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    ): null;
}

const mapStateToProps = (state) => {return {email: state.emailsReducer.selected}}

const mapDispatchToProps = (dispatch) => ({
    markEmailAsRead: (emailId) => dispatch(markAsRead(emailId)),
    markEmailAsUnRead: (emailId) => dispatch(markAsUnread(emailId)),
    markEmailSpam: (emailId) => dispatch(markAsSpam(emailId)),
    deleteEmail: (emailId) => dispatch(deleteEmail(emailId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EmailDetail);
