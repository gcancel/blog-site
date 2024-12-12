import React from 'react';
import {styled} from 'styled-components';

const CVBlockStyle = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid lightblue;

    .cv-date{
        flex: .25;
        background-color: lightblue;
        
    }
    .cv-text{
        flex: .75;
        background-color: lightcyan;
    }
    .cv-text p{
        color: #565252;
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
            width: 85vw;;
            
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