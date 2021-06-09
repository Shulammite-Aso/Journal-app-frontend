import {createStore} from 'redux';
import {journalReducer} from './journalReducer'

export const store = createStore(journalReducer)