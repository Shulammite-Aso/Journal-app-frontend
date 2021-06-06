import React, {useState} from 'react';
import JournalCard from './JournalCard'

export default function FindJournal() {

  const [query, setQuery] = useState('');
  const [journal, setJournal] = useState({});

  const searchJournal = async (e) => {
     e.preventDefault();
     console.log('submitting');

     const url = `http://localhost:8000/journals?title=${query}`;

     try {
      const res = await fetch(url);
      const data = await res.json();
      const content = data[Object.keys(data)[0]];
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
          <label className="label" htmlFor="query">Journal name</label>
          <input type="text" name="query" className="input" placeholder="search for a journal.."
          value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">Submit</button>
        </form>
        <div className="content">
          
            <JournalCard journal={journal} />
     
        </div>
          </>
    );

}