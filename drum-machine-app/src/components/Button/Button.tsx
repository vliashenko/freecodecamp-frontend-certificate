import { FC, useEffect } from 'react';
import { useAudio } from '../../hooks/useAudio';
import { IButtonProps } from './types';
import { SDrumButton } from './Button.styled';

const Button: FC<IButtonProps> = ({ path, id, keyLetter, setSound, drumOn }) => {
    const [playing, toggle] = useAudio(path);

    const key = keyLetter.toUpperCase();

    useEffect(() => {
        if(drumOn)
            document.addEventListener('keydown', onKeyAction)

        return () => {
            document.removeEventListener('keydown', onKeyAction);
        }
    },[drumOn])
    
    const onKeyAction = (evt: KeyboardEvent) => {
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
        <SDrumButton 
            id={keyLetter}
            active={playing}
            onClick={drumOn ? onClickHandler as any : null} 
        >
            {key}
                <audio id={id} src={path}></audio>
        </SDrumButton>
    );
};

export default Button;