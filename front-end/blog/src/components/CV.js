import React from 'react';
import { styled } from 'styled-components';

import CVBlock from './CVBlock';

const CVStyle = styled.div`

    display: flex;
    flex-direction: column;
    background-color:#EDEFEF;
    min-height: 100vh;
    font-size: 1.2em;


    color: #565252;
    //font-family: "POI Aeronaut Trial", sans-serif;
    font-family: "Times New Roman", serif;

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
                <h2>Education</h2>
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
                <h2>Awards</h2>
                <h3>Fellowships</h3>
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
                <h3>Honors</h3>
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
                <h3>Awards</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>Fall 2024</p>
                        <p>2023-2024</p>
                        <p>Spring 2022</p>
                        <p>Fall 2021</p>
                        <p>2021</p>
                        <p>2019</p>
                        <p>2018</p>
                        <p>2015</p>
                        <p>2015</p>
                        <p>2015</p>
                        <p>2015</p>
                        <p>2015</p>
                        <p>2014</p>
                        <p>2013</p>
                    </div>
                    <div class='cv-text'>
                        <p>Laura Bassi Foundation Editorial Assistance Grant</p>
                        <p>Captain Charles Septimus Longcope Award for Best Dissertation, <i>Critical Bodies</i></p>
                        <p>Outstanding Graduate Instructor of Record, Center for Teaching Excellence, <i>Rice
                        University</i></p>
                        <p>W. Edwin Bryan Jr. Grant, Department of History, <i>Rice
                        University</i></p>
                        <p>Robert Lowry Patten Award, Graduate Student Association, <i>Rice
                        University</i></p>
                        <p>James Scott Peterson Distinguished Service Award, Department of History, <i>Rice
                        University</i></p>
                        <p>W. Edwin Bryan Jr. Grant, Department of History, <i>Rice
                        University</i></p>
                        <p>Williams Travel Grant, <i>Eastern Illinois University</i></p>
                        <p>Distinguished Graduate Student in History, <i>Eastern Illinois University</i></p>
                        <p>Top Black Achiever, Trio Minority Affairs, <i>Eastern Illinois University</i></p>
                        <p>Distinguished Graduate Assistant in History, <i>Eastern Illinois University</i></p>
                        <p>The Leften Stavrianos World History Award, <i>Eastern Illinois University</i></p>
                        <p>The Charles H. and Dorothee Coleman Distinguished Graduate Student Scholarship,
                        <i>Eastern Illinois University</i></p>
                        <p>George Rawick Award, Outstanding Senior Paper, “Black Tuesday and the
                        Environmental Switch”, <i>University of Missouri, St. Louis</i></p>
                    </div>
                </CVBlock>
                <h2>Publications</h2>

                <h3>Peer-Reviewed:</h3>

                <p>“She Had No Marks of Violence Appearing on Her Body,” in Challenging Stories: <i>Exploring the Intersections 
                between Health and the Humanities</i> (2024) Virginia Tech Publishing</p>
                <p>“Prostitution and Police: The Great Social Evil in Chicago,” <i>Historia</i>, Vol. 24 (2015)</p>
                <br/>
                <h3>In Progress Scholarly Contributions:</h3>

                <p>“An Inch of Progress: Black Business and Black Accountants Fighting Jim Crow Violence.” <i>Article</i>.</p>
                <p>“All Else the Sea: Geography and the Middle Passage,” <i>Article</i>.</p>
                <p>“The Many Ms. Nina Simoneses: Representation and Blackness in Biopics,” <i>Article</i>.</p>
                <p>“Black Tuesday and the St. Louis Environmental Switch,” <i>Article</i>.</p>
                <p>“Occasioned by Violence or Mismanagement in the Birth,” <i>Article</i>.</p>
                <br/>
                <h2>Conferences</h2>
                <h3>Discussant</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>10/2024</p>
                        <p>09/2024</p>
                        <p>11/2021</p>
                    </div>
                    <div class='cv-text'>
                        <p>“Space and Race”: Roundtable on African Diasporas, <i>University of Denver</i></p>
                        <p>Humanities at Risk: “Pedagogies in an Era of Transactional Education,” <i>University of Denver</i></p>
                        <p>“Is Racism the Biggest Problem in the Black Community”, ThemisandThoth on YouTube</p>
                    </div>
                </CVBlock>
                <h3>Organizer</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>02/2019</p>
                        <p>04/2017</p>
                    </div>
                    <div class='cv-text'>
                        <p>The Crafting of Historical Knowledge: Revealing Narratives Through New 
                        Methodologies Conference, Organizing Committee Chair, <i>Rice University</i></p>
                        <p>Humanities and Social Science Speaker Series, Organizing Committee, <i>Rice University</i></p>
                    </div>
                </CVBlock>
                <h3>Presented Paper of Poster</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>04/2025</p>
                        <p>04/2025</p>
                        <p>09/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>“Mismanagement in the Birth,” <i>Black Disability Studies Conference</i></p>
                        <p>“Occasioned by Violence,” <i>Western Association of Women Historians Conference</i></p>
                        <p>“She Had No Marks of Violence Appearing on Her Body,” National Endowment for the
                        Humanities <i>Challenging Stories</i> Book Launch, <i>National Endowment for the Humanities</i></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>02/2024</p>
                        <p>02/2022</p>
                        <p>08/2021</p>
                        <p>03/2019</p>
                        <p>10/2017</p>
                        <p>10/2015</p>
                        <p>11/2014</p>
                        <p>11/2014</p>
                    </div>
                    <div class='cv-text'>
                        <p>“Challenging Stories: Reproductive Labor and Disability in Slavery,” Black Community
                        Initiatives, Scholarly Show and Tell, <i>University of Denver</i></p>
                        <p>“Women in Discourses of Medicine and Power,” Exploring the Margins of History, The
                        History Graduate Student Organization, <i>Texas A&M University</i></p>
                        <p>"Counterarchive as Method," R.I.S.E. Summer Seminar, <i>Rice University</i></p>
                        <p>“Similarly Disabled,” Department of History, <i>Rice University</i></p>
                        <p>“Hypermasculinity in Love and Hip-Hop,” H.O.M.E.L.E.S.S., Historians of Media, <i>Rice University</i></p>
                        <p>“Colorism in the Eighteenth Century,” <i>Museum at Lisle Park History Symposium</i></p>
                        <p>“No Place Like Home: Robert F. Williams-World Exile” at Revolutionary Decade:
                        Reflections on the 1960s, Booth Library, <i>Eastern Illinois University</i></p>
                        <p>“Scarcity of Space in Colonial New York City” at Windy City Graduate History
                        Conference, <i>University Illinois Chicago</i></p>
                    </div>
                </CVBlock>
                <h2>Invited Talks</h2>
                <h3>Host</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>03/2022</p>
                        <p>02/2022</p>
                        <p>01/2022</p>
                    </div>
                    <div class='cv-text'>
                        <p>Conversation on Black Maternal Health with Sasha Summling, Rice University,
                        <i>Medicine Race and Democracy Speaker Series</i></p>
                        <p>Conversation on Disability, Activism and the Academy with Dr. Travis Lau, Rice 
                        University, <i>Medicine Race and Democracy Speaker Series</i></p>
                        <p>Conversation on Medicine, Race, and Healing in the Age of Slavery with Dr. Sean Morey 
                        Smith, Rice University, <i>Medicine Race and Democracy Speaker Series</i></p>
                    </div>
                </CVBlock>
                <h3>Invited Classroom Lecturer</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>04/2024</p>
                        <p>10/2022</p>
                        <p>07/2022</p>
                        <p>02/2022</p>
                        <p>03/2021</p>
                        <p>10/2020</p>
                        <p>11/2019</p>
                        <p>10/2016</p>
                    </div>
                    <div class='cv-text'>
                        <p>CounterArchiving History, What is History?!, Dr. Angela Parker, <i>University of Denver</i></p>
                        <p>Gender and Disability in the Domestic Slave Trade, Introduction to Women and Gender,
                        Nina Nevill, <i>Rice University</i></p>
                        <p>Visual Culture Methodologies and the Archive as a noun, R.I.S.E Summer Seminar with
                        Dr. Alexander Byrd, <i>Rice University</i></p>
                        <p>The History(ies) of Hypopigmentation Race and the Environment, Environment with
                        Rebecca Earles, <i>Rice University</i></p>
                        <p>The Lynching of Frederick Douglas, Counter Archives on Lynching, Remembering
                        Painful Pasts with Dr. Keith McCall, <i>Rice University</i></p>
                        <p>Legacies of Black Freedom, Knowing Blackness: Introduction to African And African
                        American Studies with Dr Alexander Byrd, <i>Rice University</i></p>
                        <p>“Why is New York Burning?” The Rumors in 1741, Black Life in the 19th Century U.S
                        with Dr Alexander Byrd, <i>Rice University</i></p>
                        <p>“Hypermasculinity in Love and Hip-hop”, Historians of Media, <i>Rice University</i></p>
                    </div>
                </CVBlock>
                <h3>Moderator</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>11/2021</p>
                    </div>
                    <div class='cv-text'>
                        <p>Intimacies to Apocalypso: Afro-Latinx Studies in Afro-Atlantic Contexts, with Dr. Yomaira C. Figueroa-Vasquez and Dr. Margarita M. Castroman Center for African and African American Study, <i>Rice University</i></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>05/2021</p>
                        <p>04/2021</p>
                        <p>02/2021</p>
                        <p>02/2018</p>
                    </div>
                    <div class='cv-text'>
                        <p>Cite Black Women with Dr. Savannah Shange and Dr Cymene Howe
                        Center for the Study of Women, Gender, and Sexuality, <i>Rice University</i></p>
                        <p>“Segregated Houston “with Dr. Frank Guridy and Dr. Tyina Steptoe, The Taskforce for
                        Slavery, Segregation, and Racial Injustice, <i>Rice University</i></p>
                        <p>Artist Talk with Ya’Ke Smith, Center for African American and African Studies, <i>Rice University</i></p>
                        <p>Black Panther Screening and Panel with Dr. Nicole Waligora-Davis, Dr David Ponton III
                        and Emerson Zora Hamsa, <i>Rice University</i></p>
                    </div>
                </CVBlock>
                <h3>Chair</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2021</p>
                    </div>
                    <div class='cv-text'>
                        <p>Culture and Indigeneity, Rice Unicamp Mora Seminar, <i>Rice University</i></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>02/2018</p>
                    </div>
                    <div class='cv-text'>
                        <p>Constructing Racial Difference in Images, Classes, and Courts, Medicine and Healing in 
                        the Age of Slavery, <i>Rice University</i></p>
                    </div>
                </CVBlock>
                <h3>Discussant</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>10/2024</p>
                        <p>09/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>Race & Space in African History: An International Roundtable, <i>University of Denver</i></p>
                        <p>Humanities at Risk: Aligning Histories with STEM, <i>University of Denver</i></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>06/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>Juneteenth and Justice for All: Black Struggle, the Constitution and Democratic Futures, 
                        <i>Rice University</i></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>10/2022</p>
                        <p>10/2020</p>
                        <p>10/2019</p>
                        <p>02/2015</p>
                    </div>
                    <div class='cv-text'>
                        <p>“Feloniously Unsound: Mental Illness and Slavery”, <i>Rice University</i></p>
                        <p>The Path to Graduate School, Black Graduate Student Association, <i>Rice University</i></p>
                        <p>The Path to Graduate School, Black Graduate Student Association, <i>Rice University</i></p>
                        <p>“Grad School Confidential: True Tales from History Faculty and Students” at <i>Eastern
                        Illinois University</i></p>
                    </div>
                </CVBlock>
                <h2>Colloquia and Workshops</h2>
                <CVBlock>
                    <div class='cv-date'>
                        <p>START HERE</p>

                    </div>
                    <div class='cv-text'>
                        <p>TEXT</p>
                    </div>
                </CVBlock>
            </article>
        </div>
    </CVStyle>
  );
}

export default CV;