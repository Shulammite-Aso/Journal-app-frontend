import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FindJournal from './FindJournal';
import WrteJournal from './WriteJournal';
import JournalCard from './JournalCard'
import {JournalsState} from '../journalReducer';
import {addJournal} from '../actions'

function App() {
    const [showWriteView, setShowWriteView] = useState(true);
    const [showSearchView, setShowSearchView] = useState(false);

    const journals = useSelector<JournalsState, JournalsState["journals"]>((state) => state.journals);
    const dispatch = useDispatch();
    const onAddJournal = (title: string, content: string) => {
      dispatch(addJournal(title, content))
    }

    const changeView = (chosenView: boolean) => {
       if (!chosenView) {
        setShowWriteView(!showWriteView);
        setShowSearchView(!showSearchView);
       }
      
    }


    return (
        <div className="grid place-items-center text-gray-600">
            <div className="">
                <div className="grid place-items-center bg-primary p-1 w-screen text-white">
                    <h1 className="text-white  sm:text-xl my-4">React journaling App</h1>
                </div>

                <div className=" ml-3 mt-6">
                    <button className={!showWriteView ? 'px-5 py-1 focus:outline-none': 'px-5 py-1 border-b-2 border-primary focus:outline-none'} onClick={() => changeView(showWriteView)}>Write</button>
                    <button className={!showSearchView ? 'px-5 py-1 focus:outline-none': 'px-5 py-1 border-b-2 border-primary focus:outline-none'} onClick={() => changeView(showSearchView)}>Search</button>
                </div>

                <div className="grid place-items-center p-4">
                
                    <div className={!showWriteView ? 'hidden': ' mt-10'}>
                        <WrteJournal addJournal={onAddJournal}/>
                    </div>

                    <div className={!showSearchView ? 'hidden': 'block mt-10'}>
                        <FindJournal/>
                    </div>
                    <div className=" mt-10 md:w-4/5 sm:w-full lg:w-3/5">
                            {journals.map(journal => (
                                <JournalCard journal={journal}  key={journal.title}/>
                            ))}
                    </div>
                </div>
                
            </div>
            

            </div>
    )
}

export default App;