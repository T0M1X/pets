import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    color: rgb(211,207,201);
    p{
        color: rgb(102,255,255);
        margin-left:3%;
    }
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`