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
        
        <div className="content-area shadow-xl p-4 my-8">
          <h1 className="content--title font-bold text-xl text-center py-8">{journal.title}</h1>
          <div className="content--body" dangerouslySetInnerHTML={{ __html: journal.content }}/>
        </div>
    )
}

export default JournalCard;