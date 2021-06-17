import React, {ChangeEvent, useState} from 'react';
import { useQuill } from 'react-quilljs';

import 'quill/dist/quill.snow.css'; 

interface NewJournalProps {
    addJournal(title: string, content: string): void;
}

const WrteJournal: React.FC<NewJournalProps> = ({addJournal}) => {

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
                <h2 className="italic text-xl mb-2">Make New Journal</h2>
                <input type="text" name="title" placeholder="journal title" className="border-solid border-2 border-gray-300 py-1 pl-3 w-full rounded-full mb-4" value={journalTitle} onChange={onValueChange}/>
                <div className="">
                  <div ref={quillRef} id="editor" className="h-80 ql-container ql-snow"/>
                </div>
                <button id="submit-btn" className=" text-white mt-6 py-1 px-5 bg-primary rounded-full" onClick={onSubmit}>Submit</button>
        </div>
      
    )
}

export default WrteJournal;