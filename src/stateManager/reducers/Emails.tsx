import { MarkEmailSpam, MarkEmailUnread, MarkEmailRead, DeleteEmail, SelectEmail, SetEmailAction, AddEmailsAction } from "../actions/Email";
import { Email, SPAM_EMAIL_STATUS, DELETED_EMAIL_STATUS } from "../../models/Email";
import { combineReducers } from "redux";

export const emailsReducer = (state = {emails:[], selected: undefined}, action) => {
    switch (action.type) {
        case MarkEmailSpam:
            return {emails: getNewEmailsAndChangeProp(state.emails, action.id, 'status', SPAM_EMAIL_STATUS), selected: state.selected};
        case DeleteEmail:
            return {emails: getNewEmailsAndChangeProp(state.emails, action.id, 'status', DELETED_EMAIL_STATUS), selected: state.selected};
        case MarkEmailUnread:
            return {emails: getNewEmailsAndChangeProp(state.emails, action.id, 'isReaded', false), selected: state.selected};
        case MarkEmailRead:
            return {emails: getNewEmailsAndChangeProp(state.emails, action.id, 'isReaded', true), selected: state.selected};
        case SelectEmail:
            return {selected: action.email, emails: getNewEmailsAndChangeProp(state.emails, action.email._id, 'isReaded', true)};
        case SetEmailAction:
            return {emails: action.data, selected: state.selected};
        case AddEmailsAction:
            return {emails: [...action.data, ...state.emails], selected: state.selected};
        default:
            return state;
    }
}

const getNewEmailsAndChangeProp = (emails: Array<Email>, id: string, prop: string, newPropValue: any): Array<Email> => {
    const emailsCopy:(Array<Email>) = Object.assign([], emails);
    const email = emailsCopy.find(x => x._id === id);
    if(email)email[prop] = newPropValue;

    return emailsCopy;
}

const rootReducer = combineReducers({
    emailsReducer
})

export default rootReducer;