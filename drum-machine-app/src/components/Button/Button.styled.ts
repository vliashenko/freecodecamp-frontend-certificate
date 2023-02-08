import { SButtonProps } from './types';
import styled from 'styled-components';

export const SDrumButton = styled.button<SButtonProps>`
    background-color: ${(props) => props.active ? '#b97e29' : '#60686c'};
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    margin-top: 10px;
    box-shadow: ${(props) => props.active ? '3px 3px 5px #e8de28' : 'rgb(0 0 0 / 23%) 3px 3px 5px'} ;
    position: relative;
    top: ${(props) => props.active && '2px'};
    float: left;
    width: 100px;
    height: 80px;
    margin-right: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        z-index: -1;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }

    &:before {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        line-height: 3;
        font-size: 140%;
        width: 60px;
    }

    &:active {
        background: #b97e29;
        box-shadow: 3px 3px 5px #e8de28;
        top: 2px;
    }
`;



