import React, {useState} from 'react';
import JournalCard from './JournalCard';
import {Journal} from './JournalCard';

export default function FindJournal() {

  const [query, setQuery] = useState('');
  const [journal, setJournal] = useState({title: "", content: ""});

  const searchJournal = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
     e.preventDefault();
     console.log('submitting');

     const url = `http://localhost:8000/journals?title=${query}`;

     try {
      const res = await fetch(url);
      const data = await res.json();
      const content: Journal  = data[Object.keys(data)[0]];
      console.log(content);
      console.log("here: ", typeof content);
      console.log(Object.getOwnPropertyNames(content));
      setJournal(content);
     }catch(err) {
       console.log(err);
     }

  }


    return (
      <>
        <form className="form" onSubmit={searchJournal}>
          <label className="block italic text-xl mb-2" htmlFor="query">Search for a journal</label>
          <input type="text" name="query" className="border-solid border-2 border-gray-300 py-1 pl-3 sm:w-105 md:w-108 rounded-full mb-4" placeholder="Journal name.."
          value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="block sm:inline text-white sm:ml-2 py-1 px-5 bg-primary rounded-full">Submit</button>
        </form>
        <div className="content">
          
            <JournalCard journal={journal} />
     
        </div>
          </>
    );

}