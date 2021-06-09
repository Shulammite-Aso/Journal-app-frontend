import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FindJournal from './FindJournal';
import WrteJournal from './WriteJournal';
import JournalCard from './JournalCard'
import {JournalsState} from '../journalReducer';
import {addJournal} from '../actions'

function App() {
    const journals = useSelector<JournalsState, JournalsState["journals"]>((state) => state.journals);
    const dispatch = useDispatch();
    const onAddJournal = (title: string, content: string) => {
      dispatch(addJournal(title, content))

    }
    return (
        <div className="container">
              <h1 className="title">React journaling App</h1>
              <FindJournal/>
              <WrteJournal addJournal={onAddJournal}/>
              <div>
                {journals.map(journal => (
                    <JournalCard journal={journal}  key={journal.title}/>
                ))}
              </div>
            </div>
    )
}

export default App;