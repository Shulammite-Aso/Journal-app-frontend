import React from 'react';

export default function Journal({journal}) {

    return (
        
        <div className="content-area">
          <h2 className="content--title">{journal.title}</h2>
          <p className="content--body">{journal.content}</p>
        </div>
    )
}