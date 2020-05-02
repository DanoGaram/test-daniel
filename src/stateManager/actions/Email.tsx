import { Email } from "../../models/Email"

export const markAsUnread = (emailId: string) => ({
    type: MarkEmailUnread,
    id: emailId
})

export const markAsRead = (emailId: string) => ({
    type: MarkEmailRead,
    id: emailId
})

export const markAsSpam = (emailId: string) => ({
    type: MarkEmailSpam,
    id: emailId
})

export const deleteEmail = (emailId: string) => ({
    type: DeleteEmail,
    id: emailId
})

export const selectEmail = (email: Email) => ({
    type: SelectEmail,
    email: email
})

export const setEmails = (emails: Email[]) => ({
    type: SetEmailAction,
    data: emails
})

export const addEmails = (emails: Email[]) => ({
    type: AddEmailsAction,
    data: emails
})


export const MarkEmailUnread = 'MARK_UNREAD';
export const MarkEmailRead = 'MARK_READ';
export const MarkEmailSpam = 'MARK_SPAM';
export const DeleteEmail = 'DELETE';
export const SetEmailAction = 'SET';
export const AddEmailsAction = 'ADD';

export const SelectEmail = 'SELECT';
