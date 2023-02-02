import React, { useEffect } from 'react';
import { useAudio } from '../../hooks/useAudio';

const Button = ({ path, id, keyLetter, setSound, drumOn }) => {
    const [playing, toggle] = useAudio(path);

    const key = keyLetter.toUpperCase();

    useEffect(() => {
        if(drumOn)
        document.addEventListener('keydown', onKeyAction)

        return () => {
            document.removeEventListener('keydown', onKeyAction);
        }
    },[drumOn])
    
    const onKeyAction = (evt) => {
        if (evt.key === keyLetter || evt.key === key) {
            setSound(id);
            toggle();
        }
        return;
    }

    const onClickHandler = () => {
        setSound(id);
        toggle();
    }

    return (
        <div onClick={drumOn ? onClickHandler : null} className={`drum-pad ${playing ? "drum-pad-active" : null}`} id={keyLetter}>
            <audio className="clip" id={id} src={path}></audio>
            {key}
        </div>
    );
};

export default Button;