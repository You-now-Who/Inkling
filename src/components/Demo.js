import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.js";


export default function Demo() {
    
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    
    return (
    <>
        <div className="flex flex-col items-center min-h-screen">
            <div className='pt-4'>
                <Editor 
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={setEditorState}
                    wrapperStyle={{ width: 600, height: 500, borderRight: "1px grey" }}
                />
            </div>
                
        </div>

    </>
  )
}
