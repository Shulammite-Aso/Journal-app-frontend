import React, {useState} from 'react';
import Journal from './Journal'

export default function FindJournal() {

  const [query, setQuery] = useState('');
  const [journal, setJournal] = useState([]);

  const searchJournal = async (e) => {
     e.preventDefault();
     console.log('submitting');

     const url = `http://localhost:8000/journals?title=${query}`;

     try {
      const res = await fetch(url);
      const data = await res.json();
      const contents = data[Object.keys(data)[0]];
      console.log(contents);
      setJournal(contents);
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
          
            <Journal journal={journal} />
     
        </div>
          </>
    );

}