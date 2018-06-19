import {Dispatcher} from 'flux';
// simply dispatch info across app
// only one Dispatcher is required for whole app

interface IAction {
    type: string,
    payload: string
}

export default new Dispatcher<IAction>();

