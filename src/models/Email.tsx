export class Email {
    from: string;
    to: string;
    subject: string;
    body: string;
    date: string;
    isReaded: boolean;
    avatar?: string;
    tag: string;
    attachements?: Array<Attachment> = [];

    status: number = INBOX_EMAIL_STATUS;
    _id: string;

    static uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

export class Attachment {
    file: string;
    name: string;
}

export const DELETED_EMAIL_STATUS: number = 3;
export const INBOX_EMAIL_STATUS: number = 1;
export const SPAM_EMAIL_STATUS: number = 2;