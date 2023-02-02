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
        if (evt.key === keyLetter) {
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
        <div onClick={drumOn ? onClickHandler : null} className={`drum-pad ${playing ? "drum-pad-active" : null}`} id={id}>
            <audio className="clip" id={id} src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
            {key}
        </div>
    );
};

export default Button;