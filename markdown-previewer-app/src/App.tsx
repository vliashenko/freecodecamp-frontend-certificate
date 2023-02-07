import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import initialText from './constants';

import { 
  Wrapper, 
  TextEditor, 
  Toolbar,  
  Preview,
} from './App.styled'; 

const App = () => {
  const [areaText, setAreaText] = useState<string>(initialText);

  const handleChange = (e: any) : void => {
    setAreaText(e.target.value)
  };

  return (
    <Wrapper>

      <TextEditor>
        <Toolbar>Editor</Toolbar>
          <Editor 
            id="editor" 
            onChange={handleChange} 
            value={areaText} 
            placeholder="markdown-textarea" 
            type="text"
          />
      </TextEditor>
      
      <Preview>
        <Toolbar>Previewer</Toolbar>
          <Previewer areaText={areaText} />
      </Preview>

    </Wrapper>
  );
};

export default App;
