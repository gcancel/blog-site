import React from 'react'
import { styled } from 'styled-components';
import profileImage from '../images/profile-pic-kim.jpg';
import backgroundTile from '../images/african-tile.jpg';

const BioContainerStyle = styled.div`
  //main style area

  padding-top: 10vh;
  background-image: linear-gradient(to top right, rgba(131, 157, 98, .5), rgba(98, 157, 154, .5));
  height: auto;
  color: #565252;
  font-family: "Metropolis", serif;
  letter-spacing: 1px;
  line-height: 1.75em;
  font-size: 1em;


  .bio-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1200px;
    margin: auto;
    height: auto;
  }

  .main-bio{
    width: 90%;
    margin: 3em auto;
    border-radius: 6px;
    padding: 1em;
    background-color: #edefef;
    min-height: 0;

  }
  .circle-cutout{
    margin-top: 5em;
    width: 250px;
    height: 230px;
    border-radius: 50%;
    border: 5px solid #edefef;
    overflow: hidden;
    flex-shrink: 0;
  }
  .kim-pic{
    position: relative;
    z-index: 0;
    bottom: 50px;
    width: 250px;
    height: auto;
  }
  @media(max-width: 500px) {
    .bio-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 400px;
      margin: auto;
      height: auto;
    }
    .circle-cutout{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    }
    .kim-pic{
    position: relative;
    z-index: 0;
    bottom: 0;
    width: 150px;
    height: 150px;
    }
  }

`;

function Bio() {
  return (
    <BioContainerStyle>
    <div class='bio-container' id='bio'>
      <div class='circle-cutout'>
        <img class='kim-pic' src={profileImage}/>
      </div>
      <main class='main-bio'>
        <h3>WHAT I DO</h3>
        <p>I am an assistant professor of history at the University of Denver.</p>
        <h3>SPECIALIZATION(S)</h3>
        <p>Black Diaspora, Afro/Black Atlantic History, Early America History, history of race and ethnicity from 17th to 19th century U.S.</p>
        <h3>PROFESSIONAL BIOGRAPHY</h3>
        <p>Dr. Kimberly V. Jones is a historian of Afro-America and the Atlantic World. Jones specializes in the histories of the British Atlantic world. She was appointed as an assistant professor at the University of Denver in 2023, primarily teaching in areas of the Black Diaspora and histories of disability. Dr. Jones is an affiliate of IRISE. Dr. Jones received her B.A degrees in economics and history from the University of Missouri Saint Louis. After completing a M.A in history at Eastern Illinois University, Dr. Jones earned her M.A. and Ph.D. in History at Rice University with a graduate certificate in the Study of Women, Gender, and Sexuality. Dr. Jones was a recipient of the prestigious Mellon-ACLS Dissertation completion fellowship (2022-20223) and the Citizens and Scholars WW Dissertation Fellowship in Women’s Studies (2022).</p>
        <p>Her current manuscript, “Critical Bodies: Disability and Slavery in Early Republic Virginia,” argues that disabled enslaved people were not disposed of in the economic system of slavery. Because enslaved people with disabilities were critical bodies in maintaining the wealth of enslavers, and thus the creation of the United States, their varying degrees of able-bodiedness, had to be lawfully considered . As such, white enslavers created laws and financial policies to account for their disabilities and continue to extract the labor of enslaved people with disabilities to maintain and enhance their wealth. This work examines petitions to the Virginia legislature, coroner records, and narratives of formerly enslaved people to examine how enslavers and enslaved people navigated disabilities in and on enslaved people’s bodies and minds from 1778 until 1850. “Critical Bodies” focuses on the life cycle of enslaved people and their encounters with enslavers and the law to define their disabilities within the complex and fluid interpretations of their bodies and abilities in Virginia. An analysis of enslaved peoples’ disabilities and enslavers’ responses enriches our understanding of gender, law, slavery, and capitalism by focusing on the appearance of disability that incorporates age, mental illness, and reproductive labor. “Critical Bodies” sheds light on the experiences of disabled enslaved people in Virginia and enriches scholarship on the relationships, institutions, and trauma created in slavery.</p>
        <p>Dr. Jones teaches courses related to the history of disability, history of the body, history of African slave trade, history of the middle passage, and slavery and disability in history. Students interested in histories of slavery and disability are welcome to contact me regarding historical training.</p>
        <h3>DEGREE(S)</h3>
        <p>Ph.D., History, Rice University, 2023</p>
        <p>M.A., History, Eastern Illinois University, 2016</p>
        <p>B.A., History, University of Missouri-Saint Louis, 2013</p>
        <p>B.A., Economics, University of Missouri-Saint Louis, 2013</p>
        
      </main>
    </div>

    </BioContainerStyle>
  )
}

export default Bio;