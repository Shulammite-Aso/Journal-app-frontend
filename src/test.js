import React from 'react';

export default function Searchjournal() {

    return (
        <form className="form">
          <label className="label" htmlFor="query">journal name</label>
          <input type="text" name="queury" placeholder="search a journal.."/>
          <button type="submit" className="button">Submit</button>
        </form>
    );

}