import React, {useState} from 'react';

import JournalCard from './JournalCard';
import {Journal} from './JournalCard';
import {JournalsState} from '../journalReducer';

 const FindJournal: React.FC<JournalsState> = ({journals}) => {

  const [query, setQuery] = useState('');
  const [allMatches, setAllMatches] = useState<Journal[]>([]);
  // const [searchResultDisplay, setSearchResultDisplay] = useState('hidden');

  // const hideSearchResult = () => {
  //   setSearchResultDisplay('hidden');
  // }

  const searchJournal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      const matches = [];

      const regex: RegExp = new RegExp(".*"+query+".*", 'ig');

      for(let i=0; i < journals.length; i++) {

        if (journals[i].title.match(regex) || journals[i].content.match(regex)) {
          matches.push(journals[i]);
        } 
      }

      setAllMatches(matches)
      console.log(matches);
  }

    return (
      <>
          <form className="form" onSubmit={searchJournal}>
              <label className="block italic text-xl mb-2" htmlFor="query">Search for a journal</label>
              <input type="text" name="query" className="border-solid border-2 border-gray-300 py-1 pl-3 sm:w-105   md:w-108  rounded-full mb-4" placeholder="Journal name.."
              value={query} onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="block sm:inline text-white sm:ml-2 py-1 px-5 bg-primary    rounded-full">Submit</button>
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