import { FC } from 'react';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

import { PreviewerProps } from './types';
import { Display } from './Previewer.styled';

const Previewer: FC<PreviewerProps> = ({ areaText }) => {

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      return `<a target="_blank" href=${href}>${text}</a>`;
    };
  
    marked.setOptions({
      breaks: true
    });

    const SanitizedHTML = DOMPurify.sanitize(marked.parse(areaText, { renderer }))

    return (
        <Display id="preview" dangerouslySetInnerHTML={{ __html:  SanitizedHTML}}></Display>
    );
};

export default Previewer;