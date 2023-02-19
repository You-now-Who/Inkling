import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.js";


export default function Demo() {
    
    let x = ""

    let inclusiveAlerts = []

    let filterDict = {
        "he": ["they", "gender neutral"],
        "she": ["they", "gender neutral"],
        "her": ["them", "gender neutral"],
        "him": ["them", "gender neutral"],
        "his": ["their", "gender neutral"],
        "hers": ["theirs", "gender neutral"],
        "himself": ["themself", "gender neutral"],
        "herself": ["themself", "gender neutral"],
        "guys": ["folks/people/y'all", "gender neutral"],


    }

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    
    // function to handle the click event of the button
    const handleClick = () => {
        x = editorState.getCurrentContent().getPlainText();
        console.log(x);
        // Set the editorState plain text to x
        setEditorState( EditorState.createWithContent(x));

    }

    const returnInclusiveAlerts = (text) => {
        let inclusiveAlerts = []
        text = text.toLowerCase()

        // remove all punctuation from text
        text = text.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")
        console.log(text)

        let textArray = text.split(" ")
        for (let i = 0; i < textArray.length; i++) {
            if (textArray[i] in filterDict) {
                inclusiveAlerts.push(textArray[i])
            }
        }
        return inclusiveAlerts

    }

    const onEditorChange = (editorState) => {
        setEditorState(editorState);
        x = editorState.getCurrentContent().getPlainText()
        // console.log(x);
        // console.log(returnInclusiveAlerts(x))

        inclusiveAlerts = returnInclusiveAlerts(x)

        let addCard = document.getElementById('addCard')
        addCard.innerHTML = ""
        let i = 0;
        for (i in inclusiveAlerts) {
            console.log(filterDict[inclusiveAlerts[i]])
            
            addCard.innerHTML += `<div class="bg-white p-6 rounded-lg shadow-lg m-2">
                    <h2 class="text-2xl font-bold mb-2 text-gray-800">` + inclusiveAlerts[i] + `</h2>
                    <p class="text-gray-700">We suggest to use a more <strong>`+ filterDict[inclusiveAlerts[i]][1] +`</strong> term: '<strong>` + filterDict[inclusiveAlerts[i]][0] + `</strong>'</p>
                </div>  `

        }
        let alTitle = document.getElementById('alTitle')
        alTitle.innerHTML = "Inclusive Alerts: " + inclusiveAlerts.length
    }
    
    return (
    <>

        <div className="flex flex-row items-center justify-center">
            <h1 className="text-5xl self-start font-bold my-5 font-roboto">Inkling</h1>
        </div>
        
        <div className="flex flex-row items-center justify-center">
            <div className='pt-4 mr-40 self-start'>
                <Editor
                    spellCheck
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    editorStyle={{ backgroundColor: "white", padding: 10 }}
                    onEditorStateChange={onEditorChange}
                    wrapperStyle={{ width: 700, height: 560, borderRight: "1px grey",  }}
                />
                
            </div>

            
            <div className='pt-4 pr-10 self-end items-end w-max overflow-y-scroll' style={{height: 600, width: 550}}>

            <h1 className="text-4xl self-end " id="alTitle">Inclusive Alerts: 0</h1>
                    

                    <div className="flex flex-col mt-10" id='addCard'>
                            {/* <div className="bg-white p-6 rounded-lg shadow-lg m-2">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card with no image</h2>
                                <p className="text-gray-700">This is my cool new card 1!</p>
                            </div>  
                            <div className="bg-white p-6 rounded-lg shadow-lg m-2">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">Card with no image</h2>
                                <p className="text-gray-700">This is my cool new card 1!</p>
                            </div>   */}
                        
                    </div>    
                    
            </div>
        </div>
        

    </>
  )
}
