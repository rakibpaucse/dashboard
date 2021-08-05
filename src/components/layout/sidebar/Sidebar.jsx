import React from 'react'
import Logo from '../../../../public/static/image/navs/Gull.svg'
import Image from 'next/image'
import menuList from '../../../../data/menuItems'
import Link from 'next/link'
import { styled } from '@material-ui/core/styles';

const Container = styled('div')({
    background : '#663399',
  });

const ImageHolder = styled('div')({
    padding:'35px',

  });

const MenuContainer = styled('div')({
    display:'flex' , 
    flexDirection:'column',
    alignItems:'center'

  });

const Menu = styled('div')({
    display:'flex' , 
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginBottom : 20 ,
    width: 94,
    height: 74,
    cursor: 'pointer',

    background: '#663399',
    borderRadius: 5,

    '&:hover': {
        background: '#7D48B1',
        "& .menuTitle":{
            display: 'block'
        }
    },

    '&:focus-within': {
        background: '#7D48B1',
        "& .menuTitle":{
            display: 'block'
        }
    },

  });

const MenuTitle = styled('div')({
    fontSize:14, 
    color:'#fff',
    marginTop:9,
    display: 'none'
  });


const Sidebar = () => {

    return (
        <Container>
            
                {/* Placing the logo */}
            <ImageHolder >
                <Image src={Logo} alt="logo" width='55%' height='41%'/>
            </ImageHolder>

            <MenuContainer >  {/* creating sidebar menus */}
                {
                   menuList.map( (menu , i) => (
                       <Link href={menu.pageLink} key='' passHref >
                           <Menu  tabIndex={i}>
                                <Image src={menu.icon} alt="Icon" width='30%' height='30%'/>  
                                <MenuTitle className='menuTitle'> {menu.title} </MenuTitle>
                           </Menu>                  
                       </Link>
                   ))
                }
            </MenuContainer>

        </Container>
    )
}
export default Sidebar

