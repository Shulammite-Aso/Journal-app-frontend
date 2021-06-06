import React from 'react';

interface Journal {
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
          <p className="content--body">{journal.content}</p>
        </div>
    )
}

export default JournalCard;