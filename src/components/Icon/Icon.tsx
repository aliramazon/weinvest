import React from 'react';
import sprite from '../../images/sprite.svg';

type IconName =
    | 'companies'
    | 'account'
    | 'dashboard'
    | 'due-documents'
    | 'documents'
    | 'funds'
    | 'memebers';

interface IconProps {
    iconName: IconName;
    className: string;
}

const Icon: React.FC<IconProps> = ({ iconName, className }) => {
    return (
        <svg className={`icon ${className}`}>
            <use xlinkHref={`${sprite}#${iconName}`} />
        </svg>
    );
};

export default Icon;
