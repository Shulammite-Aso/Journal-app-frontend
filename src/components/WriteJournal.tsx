import React, {ChangeEvent, useState} from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css'; 

interface NewJournalProps {
    addJournal(title: string, content: string): void;
}

const WrteJournal: React.FC<NewJournalProps> = ({addJournal}) => {
    const tag = document.createElement("p");

    const [journalTitle, setJournalTitle] = useState("");
    const [journalContent, setJournalContent] = useState("");

    const { quill, quillRef } = useQuill();

    React.useEffect(() => {
        
      if (quill) {
        quill.on('text-change', () => {
          console.log('Text change!');
          const editorValue: string = document.querySelector('.ql-editor')!.innerHTML;
          setJournalContent(editorValue)
        });
      }
    }, [quill]);

    const onValueChange = (event:ChangeEvent<HTMLInputElement>) => {
        
        setJournalTitle(event.target.value);
        
    }

    const onSubmit = () => {
        addJournal(journalTitle, journalContent);
        setJournalTitle("");
        setJournalContent("");
        document.querySelector('.ql-editor')!.innerHTML = "";

    }

    return (
        <div>
                <h2>Make new Journal</h2>
                <input type="text" name="title" id="" value={journalTitle} onChange={onValueChange}/>
                <div style={{ width: 500, height: 150 }}>
                  <div ref={quillRef} id="editor" />
                </div>
                <button id="submit-btn" onClick={onSubmit}>Submit</button>
        </div>
      
    )
}

export default WrteJournal;