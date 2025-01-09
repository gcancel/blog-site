import React from 'react'
import { styled } from 'styled-components';

const ResearchStyle = styled.div`
    padding-top: 10vh;
    background-image: linear-gradient(to top right, #9D6265, #7C629D);
    height: auto;
    color: #565252;
    font-family: "POI Aeronaut Trial", sans-serif;
    font-size: 1.1em;

    .research-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    margin: auto;
    height: 100vh;
  }

`;

function Research() {
  return (
    <ResearchStyle>
    <div class='research-container' id='research'>
        <p>Research</p>
    </div>
        
    </ResearchStyle>
  )
}

export default Research;