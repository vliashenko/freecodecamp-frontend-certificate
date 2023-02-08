import { Dispatch, SetStateAction } from 'react';

export interface IButtonProps {
    path: string;
    id: string;
    keyLetter: string;
    setSound: Dispatch<SetStateAction<string>>;
    drumOn: boolean;
}

export interface SButtonProps {
    active?: boolean;
}