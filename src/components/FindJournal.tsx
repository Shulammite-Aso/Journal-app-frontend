import React, {useState} from 'react';

import JournalCard from './JournalCard';
import {Journal} from './JournalCard';
import {JournalsState} from '../journalReducer';

 const FindJournal: React.FC<JournalsState> = ({journals}) => {

  const [query, setQuery] = useState('');
  const [allMatches, setAllMatches] = useState<Journal[]>([]);
  const [searchResultDisplay, setSearchResultDisplay] = useState('hidden');

  const hideSearchResult = () => {
    setSearchResultDisplay('hidden');
  }

  const searchJournal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
   // setSearchResultDisplay('absolute top-16 right-2 p-2 pb-40 w-4/5 h-4/5 z-10 rounded-lg bg-gray-200')
      const matches = [];
      console.log("jojo", journals.length);

      const regex = new RegExp(".*"+query+".*", 'ig');

      for(let i=0; i < journals.length; i++) {

        if (journals[i].title.match(regex) || journals[i].content.match(regex)) {
          matches.push(journals[i]);
        } 
      }

      setAllMatches(matches)
      console.log(matches);
  }

//  const [query, setQuery] = useState('');
//  const [journal, setJournal] = useState({title: "", content: ""});

  //const searchJournal = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  //   e.preventDefault();
  //   console.log('submitting');
//
  //   const url = `http://localhost:8000/journals?title=${query}`;
//
  //   try {
  //    const res = await fetch(url);
  //    const data = await res.json();
  //    const content: Journal  = data[Object.keys(data)[0]];
  //    console.log(content);
  //    console.log("here: ", typeof content);
  //    console.log(Object.getOwnPropertyNames(content));
  //    setJournal(content);
  //   }catch(err) {
  //     console.log(err);
  //   }
//
  //}


    return (
      <>
        <form className="form" onSubmit={searchJournal}>
          <label className="block italic text-xl mb-2" htmlFor="query">Search for a journal</label>
          <input type="text" name="query" className="border-solid border-2 border-gray-300 py-1 pl-3 sm:w-105 md:w-108 rounded-full mb-4" placeholder="Journal name.."
          value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="block sm:inline text-white sm:ml-2 py-1 px-5 bg-primary rounded-full">Submit</button>
        </form>
        <div className="">
          
            {allMatches.map(match => (
                <JournalCard journal={match}  key={match.title}/>
            ))}
     
        </div>
          </>
    );

}

export default FindJournal;