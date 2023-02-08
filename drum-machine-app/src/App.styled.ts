import styled from 'styled-components';

interface SwitchProps {
  left?: boolean;
}


export const SRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  && : {
    background-color: #84858b!important;
  };
`;

export const SDrumMachine = styled.div`
  outline: 5px solid orange;
  position: relative;
  width: 660px;
  text-align: center;
  outline-color: rgb(179, 116, 0);
  background-color: rgb(67, 72, 75);
`;

export const SLogoWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
`;

export const SControlsWrapper = styled.div`
  width: 240px;
  height: 272px;
  display: inline-block;
  margin: 40px 20px 0 10px;
  vertical-align: top;
`;

export const SDisplay = styled.div`
  background-color: rgb(96, 104, 108);
  width: 200px;
  height: 70px;
  margin: 15px auto;
  padding: 25px;
  box-sizing: border-box;
  color: #fff;
`;

export const SControls = styled.div`
  width: 100px;
  margin: auto;
  color: #fff;
`;

export const SText = styled.p``;

export const SSwitcher = styled.div`
  background-color: rgb(0, 0, 0);
  margin: auto;
  border: 1px solid rgb(140, 130, 115);
  width: 50px;
  height: 20px;
  padding: 1px;
`;

export const SSwitchButton = styled.div<SwitchProps>`
  background-image: initial;
  background-color: rgb(0, 0, 204);
  border-color: rgb(140, 130, 115);
  width: 23px;
  height: 19px;
  background: blue;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
  float: ${(props) => props.left ? 'right' : 'left'}
`;