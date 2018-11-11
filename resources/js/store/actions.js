import axios from 'axios';
import {
    INCREMENT_COUNTER
} from './types';


export default {
    [INCREMENT_COUNTER]({commit, state}) {
        commit(INCREMENT_COUNTER)
    }
}