import { styled } from 'styled-components';
import { useRef , useEffect} from 'react';

function Header(){
    const HeaderStyle = styled.nav`
        // top level header style
        //background: #565252;
        position: fixed;
        z-index: 1;
        width: 100vw;
        background-image: linear-gradient(to top right, rgba(131, 157, 98, .5), rgba(98, 157, 154, .5));
        color: #fff;
        min-height: 3em;
        font-family: "Metropolis", sans-serif;
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
        .menu-line{
            width: 30px;
            height: 5px;
            margin: .2em;
            border-radius: 3px;
            background-color: rgba(98, 157, 154, 1);
            transition: .2s;

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
            font-weight: light;
            font-size: large;
            transition: .2s;
            }
        .navigation-links a{
            text-decoration: none;
            color: #EDEFEF;
            }

        .navigation-links li:hover{
                //background-color: #839D62;
                background-color: #9D6265;
                //border-radius: 3px;
            }
        .navigation-links li:active{
            background-color: rgba(98, 157, 154, 1);
        }
        .hamburger-menu{
                display: none;
            }

        // mobile styling:
        @media (max-width: 500px){
            .header-container{
                flex-direction: column;
            }

            .navigation-links{
                display: none;
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
            .logo-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 2em;
            }
            .hamburger-menu{
                display: flex;
                flex-direction: column;
                cursor: pointer;
            }

        }
    `;
    const hamburgerMenu = useRef(null);
    const openMenu = () =>{
        if (hamburgerMenu.current.style.display === "none"){
            hamburgerMenu.current.style.display = "block";
        }else{
            hamburgerMenu.current.style.display = "none";
        }
    };

    //handling resizing of the window to show/hide the hamburger menu
    useEffect(()=>{
        const handleResize = () =>{
            if (window.innerWidth > 500){
                hamburgerMenu.current.style.display = "block";
            }else if(window.innerWidth <=500){
                hamburgerMenu.current.style.display = "none";
            }
        };
        window.addEventListener("resize", handleResize);
        return () =>  window.removeEventListener("resize", handleResize);
    }, [])

    
    

    return(
        <HeaderStyle>
            <div class='header-container'>
                <div class='logo-container'>
                    <div class='logo'>
                        <img src='' alt="logo" />
                    </div>
                    <div class='hamburger-menu' onClick={openMenu}>
                        <div class='menu-line'></div>
                        <div class='menu-line'></div>
                        <div class='menu-line'></div>
                    </div>
                </div>
            <nav ref={hamburgerMenu} class='navigation-links'>
                <ul>
                <a href='/#'><li>Home</li></a>
                <a href='/syllabus'><li>Syllabus</li></a>
                <a href='/research'><li>Research Narratives</li></a>
                <a href='/CV'><li>CV</li></a>
                </ul>
            </nav>
            </div>
        </HeaderStyle>
    )
}
export default Header;