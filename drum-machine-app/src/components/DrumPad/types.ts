import { Dispatch, SetStateAction } from 'react';

export interface IDrumPadProps {
    drumOn: boolean;
    setSound: Dispatch<SetStateAction<string>>;
};
