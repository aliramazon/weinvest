import React from 'react';
import sprite from '../../images/sprite.svg';
import { IconProps } from './IconProps';

export const Icon: React.FC<IconProps> = ({
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
