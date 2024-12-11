import {styled, createGlobalStyle} from 'styled-components';

const AboutContainer = styled.div`

  & .about-container{
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 10em auto;
    justify-items: center;
    color: darkslategrey;
    text-align: center;
    font-family: 'Metropolis', sans-serif;
    background: #fff;

    & h1{
      font-size: 3em;
      font-weight: normal;
    }
    & h3{
      margin-top: -2em;
      font-weight: lighter;
    }

    @media screen and (max-width: 500px) {
      width: 80vw;
    }

  }


`;

const GlobalStyle = createGlobalStyle`
  body{
    background: beige;
  }
`;

function About() {
  return (
        <AboutContainer>
        <GlobalStyle/>
      <div class='about-container'>
        <section id='about-me'>
          <article>
            <h1>All About Me</h1>
            <h3>It true is...</h3>
            <p>Text about you goes here...</p>
          </article>
        </section>
      </div>
    </AboutContainer>


  )
}
export default About;