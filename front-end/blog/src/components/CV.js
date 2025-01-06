import React from 'react';
import { styled } from 'styled-components';

import CVBlock from './CVBlock';

const CVStyle = styled.div`

    display: flex;
    padding-left: 1em;
    flex-direction: column;
    overflow: hidden;
    background-color:#EDEFEF;
    min-height: 100vh;
    font-size: 1.2em;


    color: #565252;
    //font-family: "POI Aeronaut Trial", sans-serif;
    font-family: "Times New Roman", serif;

    // pdf link
    .pdf-link a{
        font-weight: normal;
        font-size: small;
        text-decoration: none;
        color: #565252;

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
    .inner-date{
            display: none;
            font-size: large;
            font-weight: bold;
            color: #565252;
            text-align: right;
            margin: .5em;

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
        .inner-date{
            display: block;
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
                        <p>Captain Charles Septimus Longcope Award for Best Dissertation<span class='inner-date'> December 2023</span></p>
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
                        <p>United States Cultural History<span class='inner-date'> December 2019</span></p>
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
                        <p>Thesis: "Favorite of Heaven": The Impact of Skin Color on Atlantic Ethnic Africans in the Eighteenth Century<span class='inner-date'> December 2016</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>May 2013</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>University of Missouri Saint Louis Department of History</i></p>
                        <p>B.A History cum laude</p>
                        <p>Thesis: Black Tuesday and the Environmental Switch<span class='inner-date'> May 2013</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>May 2013</p>
                    </div>
                    <div class='cv-text'>
                        <p><i>University of Missouri Saint Louis Department of Economics</i></p>
                        <p>B.A Economics<span class='inner-date'> May 2013</span></p>
                    </div>
                </CVBlock>
                <h2>Awards</h2>
                <h3>Fellowships</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>2022 - 2023</p>
                        <p>2022 - 2023</p>
                        <p>2022 - 2023</p>
                        <p>2022 - 2023</p>
                        <p>2022 - 2023</p>
                        <p>2021</p>
                        <p>2023</p>
                    </div>
                    <div class='cv-text'>
                        <p>Mellon/ACLS 2022 Dissertation Completion Fellowship, <i>Fellow</i><span class='inner-date'>2022 - 2023</span></p>
                        <p>Woodrow Wilson Women’s Studies Fellowship, Institute for Citizens & Scholars, <i>Fellow</i><span class='inner-date'>2022 - 2023</span></p>
                        <p>Ford Foundation 2022 Dissertation Fellowship, <i>Fellow</i> (declined)<span class='inner-date'>2022 - 2023</span></p>
                        <p>Boston College’s African & African Diaspora Studies Program Dissertation Fellowship 
                        (declined)<span class='inner-date'>2022 - 2023</span></p>
                        <p>McNeil Center for Early American Studies (CEAS) Dissertation Fellowship (declined)<span class='inner-date'>2022 - 2023</span></p>
                        <p>Rice Feminist Seminar Fellow, Center for Women Gender and Sexuality, <i>Rice University</i><span class='inner-date'>2021</span></p>
                        <p>PEO Scholars Award (Nominated), <i>Eastern Illinois University</i><span class='inner-date'>2020</span></p>
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
                        <p>NYU Steinhardt Faculty First Look Program Fellow, <i>New York University</i><span class='inner-date'>Spring 2022</span></p>
                        <p>Science and Technology Studies Digital Media Fellow, <i>Rice University</i><span class='inner-date'>Spring 2022</span></p>
                        <p>Task Force on Slavery, Segregation and Racial Injustice Fellow, <i>Rice University</i><span class='inner-date'>Spring 2022</span></p>
                        <p>Mellon Dissertation Writing Scholar, <i>Rice University</i><span class='inner-date'>Spring 2022</span></p>
                        <p>Mellon Dissertation Scholar, <i>Rice University</i><span class='inner-date'>Fall 2020</span></p>
                        <p>Task Force for Racism Slavery and Injustice Fellow, <i>Rice University</i><span class='inner-date'>2019 - 2020</span></p>
                        <p>Mellon Scholars Fellow, <i>Library Company of Philadelphia</i><span class='inner-date'>Summer 2015</span></p>
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
                        <p>Laura Bassi Foundation Editorial Assistance Grant<span class='inner-date'>Fall 2024</span></p>
                        <p>Captain Charles Septimus Longcope Award for Best Dissertation, <i>Critical Bodies</i><span class='inner-date'>2023 - 2024</span></p>
                        <p>Outstanding Graduate Instructor of Record, Center for Teaching Excellence, <i>Rice
                        University</i><span class='inner-date'>Spring 2022</span></p>
                        <p>W. Edwin Bryan Jr. Grant, Department of History, <i>Rice
                        University</i><span class='inner-date'>Fall 2021</span></p>
                        <p>Robert Lowry Patten Award, Graduate Student Association, <i>Rice
                        University</i><span class='inner-date'>2021</span></p>
                        <p>James Scott Peterson Distinguished Service Award, Department of History, <i>Rice
                        University</i><span class='inner-date'>2019</span></p>
                        <p>W. Edwin Bryan Jr. Grant, Department of History, <i>Rice
                        University</i><span class='inner-date'>2018</span></p>
                        <p>Williams Travel Grant, <i>Eastern Illinois University</i><span class='inner-date'>2015</span></p>
                        <p>Distinguished Graduate Student in History, <i>Eastern Illinois University</i><span class='inner-date'>2015</span></p>
                        <p>Top Black Achiever, Trio Minority Affairs, <i>Eastern Illinois University</i><span class='inner-date'>2015</span></p>
                        <p>Distinguished Graduate Assistant in History, <i>Eastern Illinois University</i><span class='inner-date'>2015</span></p>
                        <p>The Leften Stavrianos World History Award, <i>Eastern Illinois University</i><span class='inner-date'>2015</span></p>
                        <p>The Charles H. and Dorothee Coleman Distinguished Graduate Student Scholarship,
                        <i>Eastern Illinois University</i><span class='inner-date'>2014</span></p>
                        <p>George Rawick Award, Outstanding Senior Paper, “Black Tuesday and the
                        Environmental Switch”, <i>University of Missouri, St. Louis</i><span class='inner-date'>2013</span></p>
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
                        <p>“Space and Race”: Roundtable on African Diasporas, <i>University of Denver</i><span class='inner-date'>10/2024</span></p>
                        <p>Humanities at Risk: “Pedagogies in an Era of Transactional Education,” <i>University of Denver</i><span class='inner-date'>09/2024</span></p>
                        <p>“Is Racism the Biggest Problem in the Black Community”, ThemisandThoth on YouTube<span class='inner-date'>11/2021</span></p>
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
                        Methodologies Conference, Organizing Committee Chair, <i>Rice University</i><span class='inner-date'>02/2019</span></p>
                        <p>Humanities and Social Science Speaker Series, Organizing Committee, <i>Rice University</i><span class='inner-date'>04/2017</span></p>
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
                        <p>“Mismanagement in the Birth,” <i>Black Disability Studies Conference</i><span class='inner-date'>04/2025</span></p>
                        <p>“Occasioned by Violence,” <i>Western Association of Women Historians Conference</i><span class='inner-date'>04/2025</span></p>
                        <p>“She Had No Marks of Violence Appearing on Her Body,” National Endowment for the
                        Humanities <i>Challenging Stories</i> Book Launch, <i>National Endowment for the Humanities</i><span class='inner-date'>09/2024</span></p>
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
                        Initiatives, Scholarly Show and Tell, <i>University of Denver</i><span class='inner-date'>02/2024</span></p>
                        <p>“Women in Discourses of Medicine and Power,” Exploring the Margins of History, The
                        History Graduate Student Organization, <i>Texas A&M University</i><span class='inner-date'>02/2022</span></p>
                        <p>"Counterarchive as Method," R.I.S.E. Summer Seminar, <i>Rice University</i><span class='inner-date'>08/2021</span></p>
                        <p>“Similarly Disabled,” Department of History, <i>Rice University</i><span class='inner-date'>03/2019</span></p>
                        <p>“Hypermasculinity in Love and Hip-Hop,” H.O.M.E.L.E.S.S., Historians of Media, <i>Rice University</i><span class='inner-date'>10/2017</span></p>
                        <p>“Colorism in the Eighteenth Century,” <i>Museum at Lisle Park History Symposium</i><span class='inner-date'>10/2015</span></p>
                        <p>“No Place Like Home: Robert F. Williams-World Exile” at Revolutionary Decade:
                        Reflections on the 1960s, Booth Library, <i>Eastern Illinois University</i><span class='inner-date'>11/2014</span></p>
                        <p>“Scarcity of Space in Colonial New York City” at Windy City Graduate History
                        Conference, <i>University Illinois Chicago</i><span class='inner-date'>11/2014</span></p>
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
                        <i>Medicine Race and Democracy Speaker Series</i><span class='inner-date'>03/2022</span></p>
                        <p>Conversation on Disability, Activism and the Academy with Dr. Travis Lau, Rice 
                        University, <i>Medicine Race and Democracy Speaker Series</i><span class='inner-date'>02/2022</span></p>
                        <p>Conversation on Medicine, Race, and Healing in the Age of Slavery with Dr. Sean Morey 
                        Smith, Rice University, <i>Medicine Race and Democracy Speaker Series</i><span class='inner-date'>01/2022</span></p>
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
                        <p>CounterArchiving History, What is History?!, Dr. Angela Parker, <i>University of Denver</i><span class='inner-date'>04/2024</span></p>
                        <p>Gender and Disability in the Domestic Slave Trade, Introduction to Women and Gender,
                        Nina Nevill, <i>Rice University</i><span class='inner-date'>10/2022</span></p>
                        <p>Visual Culture Methodologies and the Archive as a noun, R.I.S.E Summer Seminar with
                        Dr. Alexander Byrd, <i>Rice University</i><span class='inner-date'>07/2022</span></p>
                        <p>The History(ies) of Hypopigmentation Race and the Environment, Environment with
                        Rebecca Earles, <i>Rice University</i><span class='inner-date'>02/2022</span></p>
                        <p>The Lynching of Frederick Douglas, Counter Archives on Lynching, Remembering
                        Painful Pasts with Dr. Keith McCall, <i>Rice University</i><span class='inner-date'>03/2021</span></p>
                        <p>Legacies of Black Freedom, Knowing Blackness: Introduction to African And African
                        American Studies with Dr Alexander Byrd, <i>Rice University</i><span class='inner-date'>10/2020</span></p>
                        <p>“Why is New York Burning?” The Rumors in 1741, Black Life in the 19th Century U.S
                        with Dr Alexander Byrd, <i>Rice University</i><span class='inner-date'>11/2019</span></p>
                        <p>“Hypermasculinity in Love and Hip-hop”, Historians of Media, <i>Rice University</i><span class='inner-date'>10/2016</span></p>
                    </div>
                </CVBlock>
                <h3>Moderator</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>11/2021</p>
                    </div>
                    <div class='cv-text'>
                        <p>Intimacies to Apocalypso: Afro-Latinx Studies in Afro-Atlantic Contexts, with Dr. Yomaira C. Figueroa-Vasquez and Dr. Margarita M. Castroman Center for African and African American Study, <i>Rice University</i><span class='inner-date'>11/2021</span></p>
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
                        Center for the Study of Women, Gender, and Sexuality, <i>Rice University</i><span class='inner-date'>05/2021</span></p>
                        <p>“Segregated Houston “with Dr. Frank Guridy and Dr. Tyina Steptoe, The Taskforce for
                        Slavery, Segregation, and Racial Injustice, <i>Rice University</i><span class='inner-date'>04/2021</span></p>
                        <p>Artist Talk with Ya’Ke Smith, Center for African American and African Studies, <i>Rice University</i><span class='inner-date'>02/2021</span></p>
                        <p>Black Panther Screening and Panel with Dr. Nicole Waligora-Davis, Dr David Ponton III
                        and Emerson Zora Hamsa, <i>Rice University</i><span class='inner-date'>02/2018</span></p>
                    </div>
                </CVBlock>
                <h3>Chair</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2021</p>
                    </div>
                    <div class='cv-text'>
                        <p>Culture and Indigeneity, Rice Unicamp Mora Seminar, <i>Rice University</i><span class='inner-date'>01/2021</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>02/2018</p>
                    </div>
                    <div class='cv-text'>
                        <p>Constructing Racial Difference in Images, Classes, and Courts, Medicine and Healing in 
                        the Age of Slavery, <i>Rice University</i><span class='inner-date'>02/2018</span></p>
                    </div>
                </CVBlock>
                <h3>Discussant</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>10/2024</p>
                        <p>09/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>Race & Space in African History: An International Roundtable, <i>University of Denver</i><span class='inner-date'>10/2024</span></p>
                        <p>Humanities at Risk: Aligning Histories with STEM, <i>University of Denver</i><span class='inner-date'>09/2024</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>06/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>Juneteenth and Justice for All: Black Struggle, the Constitution and Democratic Futures, 
                        <i>Rice University</i><span class='inner-date'>06/2024</span></p>
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
                        <p>“Feloniously Unsound: Mental Illness and Slavery”, <i>Rice University</i><span class='inner-date'>10/2022</span></p>
                        <p>The Path to Graduate School, Black Graduate Student Association, <i>Rice University</i><span class='inner-date'>10/2020</span></p>
                        <p>The Path to Graduate School, Black Graduate Student Association, <i>Rice University</i><span class='inner-date'>10/2019</span></p>
                        <p>“Grad School Confidential: True Tales from History Faculty and Students” at <i>Eastern
                        Illinois University</i><span class='inner-date'> 02/2015</span></p>
                    </div>
                </CVBlock>
                <h2>Colloquia and Workshops</h2>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2024 - Present</p>
                        <p>09/2024 - Present</p>
                        <p>05/2022 - Present</p>
                        <p>09/2022 - Present</p>
                        <p>02/2023 - Present</p>
                        <p>10/2023 - Present</p>
                        <p>08/2022 - Present</p>
                        <p>02/2022 - 06/2022</p>
                        <p>06/2021 - 08/2023</p>
                        <p>10/2021 - 12/2021</p>
                        <p>11/2020 - 01/2021</p>
                        <p>10/2020 - 12/2020</p>
                        <p>03/2020 - 05/2020</p>
                        <p>06/2017</p>
                        <p>05/2017</p>
                        <p>12/2014</p>

                    </div>
                    <div class='cv-text'>
                        <p>Racemaking in American History<span class='inner-date'> 01/2024 - Present</span></p>
                        <p>Ohio Seminar in Early American History and Culture, <i>The Ohio State University</i><span class='inner-date'> 09/2024 - Present</span></p>
                        <p>Racial Capitalism Virtual Reading Group, Dr. Terri Friedline, <i>University of Michigan</i><span class='inner-date'> 05/2022 - Present</span></p>
                        <p>SHA Junior Scholars Workshop, <i>Southern Historical Association</i><span class='inner-date'> 09/2022 - Present</span></p>
                        <p>Reading the Margins Reading Lab, Center for African and African American Studies, 
                        <i>Rice University</i><span class='inner-date'> 02/2023 - Present</span></p>
                        <p>National Library of Medicine Workshop on Data, Health, and the Digital Humanities, 
                        <i>Virginia Tech</i><span class='inner-date'> 10/2022 - 06/2023</span></p>
                        <p>Iola LeRoy in Conversation with David Copperfield, Dicken’s Universe, <i>University 
                        California at Santa Cruz</i><span class='inner-date'> 08/2022</span></p>
                        <p>Black Radical Traditions Reading Lab, Center for African and African American Studies, 
                        <i>Rice University</i><span class='inner-date'> 02/2022 - 06/2022</span></p>
                        <p>Historians Be Writing, History Lab, <i>Rice University</i><span class='inner-date'> 06/2021 - 08/2023</span></p>
                        <p>Disability History Coffee Table, <i>Omohundro Institute</i><span class='inner-date'> 10/2021 - 12/2021</span></p>
                        <p>Black Feminist Reading Lab, <i>Rice University</i><span class='inner-date'> 11/2020 - 01/2021</span></p>
                        <p>Is This Your ‘Diss: Dissertation Review Lab, <i>Rice University</i><span class='inner-date'> 10/2020 - 12/2020</span></p>
                        <p>Scholars in Quarantine: Capitalism and Race Discussion Series, <i>Rice University</i><span class='inner-date'> 03/2020 - 05/2020</span></p>
                        <p>In Black and White: Race and American Visual Culture, CHAViC Summer Seminar, 
                        <i>American Antiquarian Society</i><span class='inner-date'> 06/2017</span></p>
                        <p>A Contest of Two Genres: Graphic Satire and Anglo-American History Painting in the 
                        Long Eighteenth Century, <i>Lewis Walpole Library</i><span class='inner-date'> 05/2017</span></p>
                        <p>Representing Slavery in Eighteenth-Century Atlantic Britain, <i>Lewis Walpole Library and 
                        The Yale Center for British Art</i><span class='inner-date'> 12/2014</span></p>
                    </div>
                </CVBlock>
                <h2>Teaching Experience</h2>
                <h3>Instructor of Record</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2025 - 03/2025</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 1725: African American History to the Civil War Era</p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>01/2025 - 03/2025</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2025 - 03/2025</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 2998: Issues in Comparative History with Dr. Trishula Patel </p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>01/2025 - 03/2025</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>03/2025 - 06/2025</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 3400: Revolts and Revolutions in the Afro-Atlantic World</p>
                        <p>Hist 1725: African American History to the Civil War Era</p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>03/2025 - 06/2025</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>03/2025 - 06/2025</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 2410: Histories of the Body</p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>03/2025 - 06/2025</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>04/2024 - 06/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 1715: Middle Passages: Atlantic World Migrations</p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>04/2024 - 06/2024</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>04/2024 - 06/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 3703 Topics in History: A History of Black Women in the United States</p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>04/2024 - 06/2024</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>09/2023 - 11/2023</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 2702: Topics in History: A US History of Health and Disability</p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>09/2023 - 11/2023</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>09/2023 - 11/2023</p>
                    </div>
                    <div class='cv-text'>
                        <p>Hist 2701: Topics in History: Africa and the Slave Trade</p>
                        <p><i>University of Denver</i></p>
                        <p>Department: History<span class='inner-date'>09/2023 - 11/2023</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2021 - 05/2021</p>
                    </div>
                    <div class='cv-text'>
                        <p>Blacks in the Americas: The History of Africans in America through Film</p>
                        <p><i>Rice University</i></p>
                        <p>Department: History<span class='inner-date'>01/2021 - 05/2021</span></p>
                    </div>
                </CVBlock>
                <h3>Mentor</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>07/2021 – Present</p>
                    </div>
                    <div class='cv-text'>
                        <p>Academic Mentor</p>
                        <p><i>Rice University</i></p>
                        <p>Responsibility Inclusion and Student Excellence (R.I.S.E)<span class='inner-date'>07/2021 - Present</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>2018 – Present</p>
                    </div>
                    <div class='cv-text'>
                        <p>Minorities in Humanities Liaison</p>
                        <p><i>Rice University</i></p>
                        <p>Rice Humanities Recruitment Liaison<span class='inner-date'>2018 - Present</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>08/2020 – 05/2021</p>
                    </div>
                    <div class='cv-text'>
                        <p>Graduate Student Mentor</p>
                        <p><i>Rice University</i></p>
                        <p>Department: History<span class='inner-date'>08/2020 - 05/2021</span></p>
                    </div>
                </CVBlock>
                <h2>Editorial and Digital Humanities Experience</h2>
                <CVBlock>
                    <div class='cv-date'>
                        <p>10/2022 - 07/2024</p>
                    </div>
                    <div class='cv-text'>
                        <p>Media Specialist</p>
                        <p><i>Rice University</i></p>
                        <p>Center for Women Gender and Sexuality<span class='inner-date'>10/2022 - 07/2024</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2022 – 05/2022</p>
                    </div>
                    <div class='cv-text'>
                        <p>Editorial Assistant</p>
                        <p><i>Rice University</i></p>
                        <p>Journal of Southern History<span class='inner-date'>01/2022 - 05/2022</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>12/2021 – 06/2022</p>
                    </div>
                    <div class='cv-text'>
                        <p>Podcast Production Manager and Host</p>
                        <p><i>Rice University</i></p>
                        <p>Medicine Race and Democracy Speaker Series<span class='inner-date'>12/2021 - 06/2022</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>01/2016 – 12/2018</p>
                    </div>
                    <div class='cv-text'>
                        <p>Editorial Assistant</p>
                        <p><i>Rice University</i></p>
                        <p>Journal of Southern History<span class='inner-date'>01/2016 - 12/2018</span></p>
                    </div>
                </CVBlock>
                <CVBlock>
                    <div class='cv-date'>
                        <p>10/2015 – 08/2016</p>
                    </div>
                    <div class='cv-text'>
                        <p>Digital Archivist</p>
                        <p><i>National Personnel Records Center<span class='inner-date'>10/2015 - 08/2016</span></i></p>
                        <p>Ancestry.com</p>
                    </div>
                </CVBlock>
                <h2>University Service</h2>
                <h3>University of Denver</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>2024 – Present</p>
                    </div>
                    <div class='cv-text'>
                        <p>Undergraduate Major Faculty Thesis Mentor<span class='inner-date'>2024 - Present</span></p>
                    </div>
                </CVBlock>
                <h3>Rice University</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>2021 - 2022</p>
                        <p>2020 - 2021</p>
                        <p>2020 - 2021</p>
                        <p>2020 - Present</p>
                        <p>2020 - Present</p>
                        <p>2018 - 2019</p>
                        <p>2017 - 2018</p>
                        <p>2016 - 2017</p>
                        <p>2016 - 2018</p>
                    </div>
                    <div class='cv-text'>
                        <p>Center for Teaching Education, Graduate Student Committee Member<span class='inner-date'>2021 - 2022</span></p>
                        <p>History Department Professional Development Colloquia Coordinator<span class='inner-date'>2020 - 2021</span></p>
                        <p>Humanities Graduate Student Association Committee for Teaching and Professional 
                        Development, Chair<span class='inner-date'>2020 - 2021</span></p>
                        <p>Rice University Task Force on Slavery, Segregation and Racial Injustice, Steering 
                        Committee<span class='inner-date'>2020 - Present</span></p>
                        <p>BGSA Working Group for Diversity Equity and Inclusion, Committee Member<span class='inner-date'>2020 - Present</span></p>
                        <p>History Graduate Departmental Representative<span class='inner-date'>2018 - 2019</span></p>
                        <p>Humanities Graduate Student Association President<span class='inner-date'>2017 - 2018</span></p>
                        <p>Humanities Graduate Student Association Treasurer<span class='inner-date'>2016 - 2017</span></p>
                        <p>Black Graduate Student Association Secretary<span class='inner-date'>2016 - 2018</span></p>
                    </div>
                </CVBlock>
                <h3>Eastern Illinois University</h3>
                <CVBlock>
                    <div class='cv-date'>
                        <p>2014 - 2015</p>
                        <p>2014 - 2015</p>
                        <p>10/2014</p>
                    </div>
                    <div class='cv-text'>
                        <p>College of Arts and Humanities Curriculum Committee<span class='inner-date'>2014 - 2015</span></p>
                        <p>Graduate Assistant History Department<span class='inner-date'>2014 - 2015</span></p>
                        <p>Student Ambassador at Illinois History Symposium<span class='inner-date'>10/2014</span></p>
                    </div>
                </CVBlock>
                <h2>Professional Associations</h2>
                <CVBlock>
                    <div class='cv-date'>
                        <p>Since 2024</p>
                        <p>Since 2023</p>
                        <p>Since 2021 - 2023</p>
                        <p>Since 2019</p>
                        <p>Since 2016</p>
                    </div>
                    <div class='cv-text'>
                        <p>Western Association of Women Historians (WAWH)<span class='inner-date'>Since 2024</span></p>
                        <p>Southern Historical Association (SHA)<span class='inner-date'>Since 2023</span></p>
                        <p>Science and Technology Studies (STS) Working Group, Rice University 
                        African American Intellectual History Society (AAIHS)<span class='inner-date'>Since 2021 - 2023</span></p>
                        <p>Association Black Women Historians (ABWH)<span class='inner-date'>Since 2019</span></p>
                        <p>American Historical Association (AHA) 
                        Society for Historians of the Early American Republic (SHEAR)<span class='inner-date'>Since 2016</span></p>
                    </div>
                </CVBlock>
                <h2>Language</h2>
                <p>French - Reading Research Proficiency</p>
                
                <h2>Additional Skills</h2>
                <p>GIS</p>
                <p>Digital Humanities</p>
                <p>Descript</p>

                <h2>References</h2>
                <p>Available Upon Request</p>
            </article>
        </div>
    </CVStyle>
  );
}

export default CV;