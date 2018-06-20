import {Dispatcher} from 'flux';
// simply dispatch info across app
// only one Dispatcher is required for whole app

interface IAction {
    type: string,
    payload: string | number
}

export default new Dispatcher<IAction>();

