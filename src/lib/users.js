import {sitters} from './Sitters'
import {owners} from './Owners'


class UserMethods {
    static GetUserById(id) {
        console.log(sitters);
        console.log(owners);
        console.log(this.GetUsers().filter(s => s.id == id)[0])
        return this.GetUsers().filter(s => s.id == id)[0];
    }

    static LoginUser(username, password) {
        return this.GetUsers().filter(s => s.username == username && s.password == password)[0] ?? null
    }

    static GetUsers() {
        return sitters.concat(owners);
    }
}

export {
    UserMethods
}
