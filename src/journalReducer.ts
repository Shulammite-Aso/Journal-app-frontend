import {Journal} from './components/JournalCard';
import {Action} from './actions';

export interface JournalsState {
    journals: Journal[]
}

const initialState = {
    journals: []
}

export const journalReducer = (state: JournalsState = initialState, action: Action) => {
    switch(action.type) {
        case "ADD_JOURNAL": {
            return {
                ...state, journals: [...state.journals, action.payload]

            }
        }
        default:
        return state;
    }

}