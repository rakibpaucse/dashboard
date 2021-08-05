import React from 'react'
import { styled } from '@material-ui/core/styles';
import Image from 'next/image'
import Search from '../../../public/static/image/menus/Shape.svg'

const SearchContainer = styled('div')({
    position: 'relative',
    marginLeft:45
  });


const SeacrhBox = styled('input')({
    position: 'relative',
    height: 50,
    background: '#fff',
    width: 503,
    borderRadius: 20,
    padding : '18px 58px',
    fontSize: 15,
    color: '#555',
    border: 'none',
    fontFamily:"'Nunito Sans', sans-serif'",

    '&:focus':{
        outline: 'none'
    }
  });

const SearchIcon = styled('span')({
    position: 'absolute',
    height: 16,
    width: 16,

    left: 29,
    top: 18,
  });


const SearchBox = () => {
    return (
        <SearchContainer>
        
            <SeacrhBox placeholder='search' /> {/* making searchbox by input element */}           
             <SearchIcon >{/* making search Icon */}
                <Image src={Search} alt="logo" width='100%' height='100%' />
             </SearchIcon>
             
        </SearchContainer>
    )
}

export default SearchBox
