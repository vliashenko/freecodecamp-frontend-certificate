import { FC } from 'react';
import { TextAreaProps } from './types';
import { TextArea } from './Editor.styled';

const Editor: FC<TextAreaProps> = ({ type = "text", ...props}) => {
    if (type === 'textarea') {
        return <TextArea {...props} />;
    }
    return <TextArea {...props} />;
};

export default Editor;