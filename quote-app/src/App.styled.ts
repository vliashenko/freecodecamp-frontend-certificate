import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem;
`;

export const Box = styled.div`
    border-radius: 3px;
    position: relative;
    max-width: 450px;
    padding: 40px 50px;
    display: table;
    color: white;
    background-color: rgba(0, 0, 0, 0.604);
    box-shadow: rgba(100, 100, 111, 0.586) 0px 7px 29px 0px;
`;

export const Content = styled.div`
text-align: center;
font-weight: 500;
font-size: 1.75em;
`;

export const Text = styled.div`

`;

export const QuoteMark = styled.span`
font-size: 1em;
margin-right: 0.4em;
`;

export const Author = styled.div`
    max-width: 450px;
    height: auto;
    clear: both;
    padding-top: 20px;
    font-size: 1em;
    text-align: right;
`;

export const Handlers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Social = styled.div`
    float: left;
    padding: 0px;
    padding-top: 11px;
    text-align: center;
    font-size: 1.2em;
    margin-right: 5px;
    height: 38px;
    width: 40px;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 3px;
    outline: none;
    margin-top: 30px;
    opacity: 1;
    cursor: pointer;

&:hover {
    opacity: 0.9;
}
`;

export const Tweet = styled.a`
    color: #fff;
`;

export const ChangeQuote = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: #333;
    outline: none;
    font-size: 0.85em;
    padding: 8px 18px 6px 18px;
    margin-top: 30px;
    opacity: 1;
    cursor: pointer;
    opacity: ${props => props.disabled && '0.5'};

    &:hover {
        opacity: 0.9;
    }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Rotate = styled.i`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;