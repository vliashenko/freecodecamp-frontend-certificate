import { useState } from 'react';

import initialText from './initialText';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';
import './App.css';

const App = () => {
  const [areaText, setAreaText] = useState(initialText);

  const handleChange = (e) => {
    setAreaText(e.target.value)
  };

  const getMarkdownText = () => {
    let rawMarkup = marked.parse(areaText);
    let cleanMarkup = DOMPurify.sanitize(rawMarkup);
    return { __html: cleanMarkup };
  };

  return (
    <div className="App">

      <div className="editor_wrapper">
        <div className="toolbar">Editor</div>
        <textarea onChange={handleChange} value={areaText} id="editor" type="text"></textarea>
      </div>
      
      <div className="preview_wrapper">
        <div className="toolbar">Previewer</div>
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>

    </div>
  );
};

export default App;
