import styled from 'styled-components';

export const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Toolbar = styled.div`
  padding: 10px;
  background-color: rgb(59, 130, 130);
  border-color: rgb(127, 118, 105);
  box-shadow: rgb(46 76 76) 1px 1px 10px 2px;
  color: rgb(232, 230, 227);
`;

export const TextEditor = styled.div`
  flex: 1;
  width: 100%;
  min-height: 200px;
  max-width: 600px;
  margin: 1.125rem auto;
`;

export const Preview = styled.div`
  flex: 1;
  width: 100%;
  margin: 1.125rem auto;
  background-color: rgb(43, 69, 69);
  border-right-color: rgb(127, 118, 105);
  border-bottom-color: rgb(127, 118, 105);
  border-left-color: rgb(127, 118, 105);
  box-shadow: rgb(46 76 76) 1px 1px 10px 2px;
  border-top-color: initial;
  max-width: 800px;
  min-height: 200px;
  overflow-wrap: break-word;
`;

