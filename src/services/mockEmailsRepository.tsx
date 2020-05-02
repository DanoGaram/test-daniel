import { EmailRepository } from "./emailsRepository";
import Axios from "axios";

class MockEmailRepository extends EmailRepository{
    constructor(){
        super();
    }

    getEmails() {
        return Axios({
            url: 'src/assets/data/mail-data.json',
            method: 'GET'
        });
    }
}
export let emailRepository = new MockEmailRepository();