import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 15px 20px;
    background-color: ${({ bg }) => bg || 'rgb(24,26,27)'};
    color: ${({ color }) => color || 'rgb(211,207,201)'};
    font-family: 'Avenir', Helvetica, sans-serif;
    &:hover {
    opacity: 0.3;
    transform: scale(0.96);
    }

    &.logo{
        margin-left:50%;
        width:120px;
        height:120px;
    }

    &.right-nav{
        margin-left:30%;
        margin-top:20%;
    }

`