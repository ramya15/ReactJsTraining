import {Dispatcher} from 'flux';
// simply dispatch info across app
// if error write as:
interface IAction {
    type: string,
    payload: string
}

export default new Dispatcher<IAction>();

