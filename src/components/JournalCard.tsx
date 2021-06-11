import React, {useState} from 'react';

export interface Journal {
  title: string,
  content: string

}

interface JournalCardProps {
  journal: Journal
}



const JournalCard: React.FC<JournalCardProps> = ({journal}) => {

    return (
        
        <div className="content-area">
          <h2 className="content--title">{journal.title}</h2>
          <div className="content--body" dangerouslySetInnerHTML={{ __html: journal.content }}/>
        </div>
    )
}

export default JournalCard;