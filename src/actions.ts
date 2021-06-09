import {Journal} from './components/JournalCard';

export type Action = {type: "ADD_JOURNAL", payload: Journal}

export const addJournal = (title: string, content: string): Action => (
    {type: "ADD_JOURNAL", payload: {title, content}}

)