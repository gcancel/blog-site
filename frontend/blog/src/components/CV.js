import React from 'react';
import { styled } from 'styled-components';

import CVBlock from './CVBlock';

const CVStyle = styled.div`

    display: flex;
    flex-direction: column;
    background-color:#629D9A;
    min-height: 100vh;


    color: #fff;
    font-family: "POI Aeronaut Trial", sans-serif;

    // pdf link
    .pdf-link a{
        font-weight: lighter;
        font-size: small;
        text-decoration: none;
        color: #fff;

    }
    .pdf-link a:active{
        color: #565252;
    }
    
    //style for container and title
    .cv-container{
        min-width: 1200px;
        margin: 3em auto;
    }
    .cv-title h1, h4{
        margin: 0;
    }

    //mobile
    @media (max-width: 500px){
        flex-direction: column;
        padding-left: 1em;

        .cv-title h1, h4{
            margin: 0;
        }
        .cv-container{
            min-width: 400px;
        }
    }

`;


function CV() {
  return (
    <CVStyle class='cv-body'>
        <div class='cv-container'>
            <header class='cv-title'>
                <h1>Kimberly V. Jones</h1>
                <h4 style={{color: '#9D6265', fontSize: 'medium',}}>Denver, Colorado</h4>
                <h4 style={{color: '#7C629D', fontSize: 'medium',}}>Kjones445@du.edu</h4>
            </header>
            <p class='pdf-link'><a href=''>Click here for a PDF copy</a></p>
            <article class='cv-article'>
                <h2 class='cv-research-interests'>Research Interests</h2>
                <ul>
                    <li>African American History</li>
                    <li>African and African American Studies</li>
                    <li>Afro-Atlantic History</li>
                    <li>Black Studies</li>
                    <li>Early American Republic</li>
                    <li>History of Disabilities and the Body</li>
                    <li>History of Gender</li>
                    <li>History of Race</li>
                    <li>Medical Humanities</li>
                </ul>
                <h3>Education</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>December 2023</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>Rice University, School of Humanities</i></p>
                        <p>Department of History</p>
                        <p>PhD. History</p>
                        <p>Certificate: Study of Women, Gender, and Sexuality</p>
                        <p>Captain Charles Septimus Longcope Award for Best Dissertation</p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>December 2019</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>Rice University, School of Humanities</i></p>
                        <p>M.A History</p>
                        <p>Fields: Afro Atlantic History, African American History, Women and Gender History</p>
                        <p>United States Cultural History</p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>December 2016</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>Eastern Illinois University Department of History</i></p>
                        <p>M.A History with Honors</p>
                        <p>Fields: Atlantic History, United States History, Women and Gender History</p>
                        <p>Thesis: "Favorite of Heaven": The Impact of Skin Color on Atlantic Ethnic Africans in the Eighteenth Century</p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>May 2013</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>University of Missouri Saint Louis Department of History</i></p>
                        <p>B.A History cum laude</p>
                        <p>Thesis: Black Tuesday and the Environmental Switch</p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>May 2013</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>University of Missouri Saint Louis Department of Economics</i></p>
                        <p>B.A Economics</p>
                    </div>
                </CVBlock>
                <h3>Awards</h3>
                <h4>Fellowships</h4>
                <CVBlock>
                    <div class='cv-date'>
                        <p>2022-2023</p>
                        <p>2022-2023</p>
                        <p>2022-2023</p>
                        <p>2022-2023</p>
                        <p>2022-2023</p>
                        <p>2021</p>
                        <p>2023</p>
                    </div>
                    <div class='cv-text'>
                        <p>Mellon/ACLS 2022 Dissertation Completion Fellowship, <i>Fellow</i></p>
                        <p>Woodrow Wilson Women’s Studies Fellowship, Institute for Citizens & Scholars, <i>Fellow</i></p>
                        <p>Ford Foundation 2022 Dissertation Fellowship, <i>Fellow</i> (declined)</p>
                        <p>Boston College’s African & African Diaspora Studies Program Dissertation Fellowship 
                        (declined)</p>
                        <p>McNeil Center for Early American Studies (CEAS) Dissertation Fellowship (declined)</p>
                        <p>Rice Feminist Seminar Fellow, Center for Women Gender and Sexuality, Rice University</p>
                        <p>PEO Scholars Award (Nominated), Eastern Illinois University</p>
                    </div>
                </CVBlock>
                <h4>Honors</h4>
                <CVBlock>
                    <div class='cv-date'>
                        <p>Spring 2022</p>
                        <p>Spring 2022</p>
                        <p>Spring 2022</p>
                        <p>Spring 2022</p>
                        <p>Fall 2020</p>
                        <p>2019-2020</p>
                        <p>Summer 2015</p>
                    </div>
                    <div class='cv-text'>
                        <p>NYU Steinhardt Faculty First Look Program Fellow, <i>New York University</i></p>
                        <p>Science and Technology Studies Digital Media Fellow, <i>Rice University</i></p>
                        <p>Task Force on Slavery, Segregation and Racial Injustice Fellow, <i>Rice University</i></p>
                        <p>Mellon Dissertation Writing Scholar, <i>Rice University</i></p>
                        <p>Mellon Dissertation Scholar, <i>Rice University</i></p>
                        <p>Task Force for Racism Slavery and Injustice Fellow, <i>Rice University</i></p>
                        <p>Mellon Scholars Fellow, <i>Library Company of Philadelphia</i></p>
                    </div>
                </CVBlock>
                <h4>Awards</h4>
                <CVBlock>
                    <div class='cv-date'>
                        <p>START HERE!</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>University of Missouri Saint Louis Department of Economics</i></p>
                        <p>B.A Economics</p>
                    </div>
                </CVBlock>
            </article>
        </div>
 
    </CVStyle>
  );
}

export default CV;