import { alertConstants } from '../constants/ActionsTypes';

export const success = message => ({ type: alertConstants.SUCCESS, message });
export const error = message => ({ type: alertConstants.ERROR, message });
export const clear = ()  => ({ type: alertConstants.CLEAR  });
