import React from 'react';
import Button from '../partials/Button';
import './EmailActionsBar.scss';

const EmailActionsBar = (props: {deleted: Function, spamed: Function, unreaded: Function}) => {
    return(
        <div className="actions-container">
            <Button text="Delete" theme="error" onclick={props.deleted}></Button>
            <Button text="Spam" theme="info" onclick={props.spamed}></Button>
            <Button text="Mark as unread" theme="primary right" onclick={props.unreaded}></Button>
        </div>
    );
}

export default EmailActionsBar;