import React, {ChangeEvent, useState} from 'react';

interface NewJournalProps {
    addJournal(title: string, content: string): void;
}

const WrteJournal: React.FC<NewJournalProps> = ({addJournal}) => {

    const [journalTitle, setJournalTitle] = useState("");
    const [journalContent, setJournalContent] = useState("");

    const onValueChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        
        event.target.name === "title" ? setJournalTitle(event.target.value) : setJournalContent(event.target.value);
        
    }

    const onSubmit = () => {
        addJournal(journalTitle, journalContent);
        setJournalTitle("");
        setJournalContent("");

    }

    return (
        <div>
                <h2>Make new Journal</h2>
                <input type="text" name="title" id="" value={journalTitle} onChange={onValueChange}/>
                <textarea name="journalBody" id="" value={journalContent} onChange={onValueChange} cols={30} rows={10}></textarea>
                <button onClick={onSubmit}>Submit</button>
        </div>
      
    )
}

export default WrteJournal;