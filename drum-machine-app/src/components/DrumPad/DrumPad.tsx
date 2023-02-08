import { FC } from 'react';

import Button from '../Button/Button';

import links from '../../utils/constants';

import { IDrumPadProps } from './types';
import { SPad } from './DrumPad.styled';

const DrumPad: FC<IDrumPadProps> = ({ drumOn, setSound }) => {
    return (
        <SPad className="pad-board">
            {links.map((link) => {
            return (
                <Button 
                    key={link.id} 
                    drumOn={drumOn} 
                    setSound={setSound} 
                    {...link} 
                />
            );
            })}
        </SPad>
    );
};

export default DrumPad;