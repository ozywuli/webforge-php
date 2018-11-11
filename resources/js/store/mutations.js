import {
    INCREMENT_COUNTER
} from './types';

export default {
    [INCREMENT_COUNTER](state) {
        state.count++;
    }
}