import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.js";


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
    "elderly": ["senior citizen", "age appropriate"],
    "alcoholic": ["person with alcohol use disorder", "substance abuse appropriate"],
    "alcoholics": ["people with alcohol use disorder", "substance abuse appropriate"],
    "alcoholism": ["alcohol use disorder", "substance abuse appropriate"],
    "addict": ["person with substance use disorder", "substance abuse appropriate"],
    "addicts": ["people with substance use disorder", "substance abuse appropriate"],
    "addiction": ["substance use disorder", "substance abuse appropriate"],
    "junkie": ["person with substance use disorder", "substance abuse appropriate"],
    "junkies": ["people with substance use disorder", "substance abuse appropriate"],
    "junk": ["substance use disorder", "substance abuse appropriate"],
    "junking": ["substance use disorder", "substance abuse appropriate"],
    "junked": ["substance use disorder", "substance abuse appropriate"],
    "junking": ["substance use disorder", "substance abuse appropriate"],
    "junkie": ["person with substance use disorder", "substance abuse appropriate"],
    "blind": ["visually impaired", "disability appropriate"],
    "deaf": ["hearing impaired", "disability appropriate"],
    "dumb": ["intellectually disabled", "disability appropriate"],
    "wheelchair": ["wheelchair bound", "disability appropriate"],
    "cripple": ["disabled", "disability appropriate"],
    "mental": ["intellectually disabled", "disability appropriate"],
    "negro": ["Afro-American", "racially appropriate"],
    "alvin": ["Alvin and the Chipmunks", "racially appropriate"],
    "blahaj": ["King Blahaj", "respectful"],
    "404": ["404 Not Found Jobs", "respectful"],
    

}

let i = 0
let p = []

export default function Demo() {
    
    let x = ""    

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
    
    // function to handle the click event of the button
    const handleClick = () => {
        x = editorState.getCurrentContent().getPlainText();
        console.log('Handle Click: ' + x);
        // Set the editorState plain text to x
        // setEditorState( EditorState.createWithContent(x));

    }

    const returnInclusiveAlerts = (text) => {
        inclusiveAlerts = []
        p = []
        text = text.toLowerCase()

        // remove all punctuation from text
        text = text.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")
        // console.log(text)

        let textArray = text.split(" ")
        for (let i = 0; i < textArray.length; i++) {
            if (textArray[i] in filterDict) {
                p.push(i)
                inclusiveAlerts.push(textArray[i])
            }
        }
        return ([inclusiveAlerts, p])

    }


    const replaceWord = (e) => {
        let btnId = e.target.id
        let btnIdNum = btnId.slice(3)

        let text = editorState.getCurrentContent().getPlainText()
        let textArray = text.split(" ")

        let word = textArray[btnIdNum]
        // console.log(word)
        
        // extract punctuation from textWord

        // let textWord = textArray[btnIdNum]
        let punctuation = ""
        console.log(word[word.length - 1])
        if (word[word.length - 1] in [",", ".", "!", "?"]) {
            
            punctuation = word[word.length - 1]
            word = word.slice(0, word.length - 1)
        }

        // remove all punctuation from word
        word = word.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "")

        console.log(word.toLowerCase())
        // replace word with filterDict[word]
        textArray[btnIdNum] = filterDict[word.toLowerCase()][0] + punctuation


        // textArray[btnIdNum] = filterDict[word.toLowerCase()][0]
        text = textArray.join(" ")
        // console.log(EditorState)

        setEditorState( EditorState.createWithContent(
            ContentState.createFromText(text)
        ));

        // setEditorState( EditorState.etCurrentContent(editorState, text));
        console.log(text)
        // useForceRerender()
        
    }

    const onEditorChange = (editorState) => {
        setEditorState(editorState);
        x = editorState.getCurrentContent().getPlainText()
        // console.log(x);
        // console.log(returnInclusiveAlerts(x))

        inclusiveAlerts = returnInclusiveAlerts(x)[0]
        p = returnInclusiveAlerts(x)[1]

        let addCard = document.getElementById('addCard')
        // const root = ReactDOM.createRoot(document.getElementById('root'));
        // addCard.innerHTML = ""
        
        // let alTitle = document.getElementById('alTitle')
        // alTitle.innerHTML = "Inclusive Alerts: " + inclusiveAlerts.length
    }
    
    return (
    <>

        <div className="flex flex-row items-center justify-center">
            <h1 className="text-5xl self-start font-bold my-5 font-roboto">Inkling</h1>
        </div>
        
        <div className="flex flex-row items-center justify-center mb-5">
            <div className='pt-4 mr-40 self-start'>
                <Editor
                    spellCheck
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    editorStyle={{ backgroundColor: "white", padding: 10 }}
                    onEditorStateChange={onEditorChange}
                    wrapperStyle={{ width: 700, height: 600, borderRight: "1px grey",  }}
                />
                
            </div>

            
            <div className='pt-4 pr-10 self-end items-end w-max overflow-y-scroll' style={{height: 600, width: 550}}>

            <h1 className="text-4xl self-end " id="alTitle">Inclusivity Alerts: {inclusiveAlerts.length}</h1>
                    

                    <div className="flex flex-col mt-10" id='addCard'>

                            {
                                    
                                inclusiveAlerts.map((item, i) => {
                                    return (

                                    <div class="bg-white p-6 rounded-lg shadow-lg m-2">
                                        <h2 class="text-2xl font-bold mb-2 text-gray-800"> {inclusiveAlerts[i]}</h2>
                                        <p class="text-gray-700">We suggest to use a more <strong>{filterDict[inclusiveAlerts[i]][1]}</strong> term: '<strong>{filterDict[inclusiveAlerts[i]][0]}</strong>'</p>                                        

                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded" id={`btn${p[i]}`}  onClick={replaceWord}>Replace</button>
                                    </div>  
                                    )    
                                })
                            
                            }                           
                            
                            {/* console.log(filterDict[inclusiveAlerts[i]])
                            console.log(p[i]) */}
                    </div>    
            </div>
        </div>
        

    </>
  )
}
