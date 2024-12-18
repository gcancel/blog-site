import React from 'react';
import {styled} from 'styled-components';

const CVBlockStyle = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #565252;
    font-size: 1.2em;

    .cv-date{
        flex: .1;
        background-color: #9D6265;
    }
    .cv-date p{
        color: #fff;
    }
    .cv-text{
        flex: .9;
        background-color: #629D9A;
    }
    .cv-text p{
        //color: #565252;
        color: #fff;
    }
    p{
        margin-left: 0.5em;
    }

    @media(max-width: 500px){
        margin: 0;
        padding: 0;
        flex-direction: column;
        border-bottom: none;
        
        .cv-date{
            width: 85vw;
            text-align: right;
            display: none;

        }
        .cv-text{
            width: 85vw;
            border-bottom: 1px solid #7C629D;
        }
    }
`;

const CVBlock = ({children}) => {
  return (
    <CVBlockStyle>
        {children}
    </CVBlockStyle>
  )
}

export default CVBlock;