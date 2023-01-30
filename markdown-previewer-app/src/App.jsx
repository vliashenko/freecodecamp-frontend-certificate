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

  const renderer = new marked.Renderer();
  renderer.link = function(href, title, text) {
    return `<a target="_blank" href=${href}>${text}</a>`;
  };

  marked.setOptions({
    breaks: true
  });

  return (
    <div className="App">

      <div className="editor_wrapper">
        <div className="toolbar">Editor</div>
        <textarea onChange={handleChange} value={areaText} id="editor" type="text"></textarea>
      </div>
      
      <div className="preview_wrapper">
        <div className="toolbar">Previewer</div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(areaText, { renderer })) }}></div>
      </div>

    </div>
  );
};

export default App;
