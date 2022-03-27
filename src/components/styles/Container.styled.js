import styled from 'styled-components';

export const Container = styled.div`

    background-image: url(cats.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover!important;

    p{
        padding: 10px;
    }

    .blankText {
        opacity: 0;
    }

    .openingText{
        text-align: center;
        color: white!important;
        font-size:40px;
    }

    .underlyingText{
        text-align: center;
        color: white!important;
        font-size:25px;
        padding: 0px;

    }
`