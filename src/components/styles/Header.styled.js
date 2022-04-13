import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    color: rgb(211,207,201);
    p{
        color: rgb(102,255,255);
        margin-left:3%;
    }

    .loginButton img{
        object-fit: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right:20px;
    }

    .loginButton Button{
        display:flex;
        align-items: center;
        justify-content: center;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`