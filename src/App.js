// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">

      <Navbar />

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
      
       {/* <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: 800, height: 700, border: "1px solid black" }}
      /> */}
    </div>
  );
}

export default App;
