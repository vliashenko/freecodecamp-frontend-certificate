import { FC } from 'react';
import { SInnerLogo, SLogoIcon } from './Logo.styled';

const Logo: FC = () => {
    return (
        <SInnerLogo>
            FCC&nbsp;
            <SLogoIcon 
                className="fa fa-free-code-camp">
            </SLogoIcon>
        </SInnerLogo>
    );
};

export default Logo;