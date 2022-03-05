import React from 'react';
import styled from 'styled-components';
import sprite from '../../images/sprite.svg';

export type IconName =
    | 'companies'
    | 'account'
    | 'dashboard'
    | 'due-documents'
    | 'documents'
    | 'funds'
    | 'members';

interface IconProps {
    name: IconName;
    height?: string;
    width?: string;
    color: string;
}

const Icon: React.FC<IconProps> = ({
    name,
    height = '2.2rem',
    width = '2.2rem',
    color
}) => {
    return (
        <svg height={height} width={width} fill={color}>
            <use xlinkHref={`${sprite}#${name}`} />
        </svg>
    );
};

export default Icon;
