import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction:column;
height:100vh;
width:100%;
justify-content:center;
align-items:center;
background-color: ${(props) => props.BgChange === false ? 'white' : 'black'};
`
export const Botton = styled.button`
padding: 10px 20px;
font-size: 16px;
border-radius:10px;
`

export const Box = styled.div`
height:200px;
width:200px;
display: flex;
border:none;
border-radius:100px;
background-color: ${(props) => props.BoxChange === false ? 'black' : 'yellow'};
box-shadow: ${(props) => props.BoxChange === false ? 'none' : '5px 5px 90px 5px yellow;'};

`