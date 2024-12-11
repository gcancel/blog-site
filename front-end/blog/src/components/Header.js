import { styled } from 'styled-components';

function Header(){
    const HeaderStyle = styled.nav`
        // top level header style

        background: #565252;
        color: #fff;
        min-height: 3em;

        font-family: "POI Aeronaut Trial", sans-serif;
        font-weight: light;
        font-size: large;

        // container for header objects
        .header-container{
            display: flex;
            padding: 0;
            margin: 0;
            justify-content: space-between;
            margin: auto;
            max-width: 1280px;
        }


        // logo position and styling
        .logo{
            padding: 1em;

            :hover{
                cursor: pointer;
            }
        }

        // navigation styling
        .navigation-links li{
            display: inline;
            padding: 1em;
            font-family: "POI Aeronaut Trial", sans-serif;
            font-weight: light;
            font-size: large;
            
        }
        .navigation-links li a{
            text-decoration: none;
            color: #EDEFEF;
        }

        .navigation-links li:hover{
                background-color: #839D62;
                border-radius: 3px;
            }

        // mobile styling:
        @media (max-width: 500px){
            .header-container{
                flex-direction: column;
            }


            .navigation-links ul{
                padding: 0;
                margin: 0;
                width: 100vw;
            }

            .navigation-links li{
                display: block;
                text-align: center;
                border-top: 1px solid #fff;
                padding: .2em;
            }

            .navigation-links li:hover{
                background-color: #839D62;
                border-radius: 0px;
            }
        }


    `;
    return(
        <HeaderStyle>
            <div class='header-container'>
                <div class='logo'>
                    <img src='' alt="logo" />
                </div>
                <nav class='navigation-links'>
                    <ul>
                        <li><a href='/#'>Home</a></li>
                        <li><a href='/syllabus'>Syllabus</a></li>
                        <li><a href='/research'>Research Narratives</a></li>
                        <li><a href='/CV'>CV</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyle>
    )
}
export default Header;