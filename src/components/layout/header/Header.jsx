import React from 'react'
import { styled } from '@material-ui/core/styles';
import Image from 'next/image'

import BurgerIcon from '../../../../public/static/image/navs/Burger.svg'
import Plus from '../../../../public/static/image/navs/PlusIcon.svg'
import NotificationIcon from '../../../../public/static/image/navs/noti.svg'
import User from '../../../../public/static/image/navs/userImg.png'
import SearchBox from '../../utils/SearchBox'

import Badge from '@material-ui/core/Badge';

const Container = styled('div')({
    display:'flex' , 
    justifyContent:'space-between' , 
    padding:30
  });

const ItemContainer = styled('div')({
    display:'flex',
    alignItems:'center',
    position: 'relative'
  });

const BatchHolder = styled('div')({
    position: 'relative',
    padding: '0px 25px',
    '&:after' : {
        position:'absolute',
        right:14,
        top:-16,
        content: 'attr(data-count)',
        fontSize:8,
        padding:5,
        borderRadius:'50%',
        color: 'white',
        background:'#663399',
        textAlign:'center',

        width: 8,
        height: 8
    }
  });


const AvatarHolder = styled('div')({
    '& > *': {
        borderRadius : 15
    }
  });


const Header = () => {
    return (
        <Container>
            
                {/* making burger icon */}
            <ItemContainer >
                <Image src={BurgerIcon} width='20%' height='18%' alt="burgerMenu" />
                <SearchBox />
            </ItemContainer>

            <ItemContainer>
                <Image src={Plus} width='20%' height='17%' alt="PlusIcon" />  

                    {/* making notification icon */}
                <BatchHolder  data-count="3" >
                    <Image src={NotificationIcon} width='18%' height='21%' alt="burgerMenu" />
                </BatchHolder>

                <AvatarHolder >
                    <Image src="/static/image/navs/userImg.png" width='60%' height='58%' alt="UserImage" />  
                </AvatarHolder>

            </ItemContainer>
        </Container>
    )
}

export default Header
