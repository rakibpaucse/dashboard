import { styled } from '@material-ui/core/styles';
import Image from 'next/image'

import cards from '../data/cards'
import {hexToRgb} from '../src/components/utils/fixColor'

const Container = styled('div')({
  display: 'flex',
  justifyContent:'space-between',
  width: '100%',
  flexWrap : 'wrap',
  padding: 35

});

const Card = styled('div')({
  flex: '0 1 296px' ,
  height: 131,
  padding: '20px',
  marginBottom: 20,
  background: '#fff',
  borderRadius:24,

  display: 'flex',
  alignItems:'center'
});


const IconHolder = styled('div')({
  display: 'flex',
  alignItems:'center',
  justifyContent:'center',

  width: 36,
  height: 71,
  borderRadius: 18,
  marginRight: 10
});

const InfoHolder = styled('div')({
  display: 'flex',
  flexDirection:'column',
  height: 48,
  marginBottom:5
});

const CardTitle = styled('div')({
  fontSize:14 , margin:0 , color:'#43454D'
});


export default function Home() {
  return (
    <Container >
        {
          // mapping cards to build card in dashboard
          cards.map((card , index) => (
            <Card key={index} >

                <IconHolder // controling background color opacity
                  style={{background: (index === 0 || index === 3 ) ? 
                    hexToRgb(card.color , index+8) : hexToRgb(card.color , 28) }}>

                    <Image src={card.icon} alt="Icon" width='20%' height='20%'/>  
                </IconHolder>

                <InfoHolder>
                    <CardTitle >{card.title}</CardTitle>
                    
                    <p // controling color dynamiclly
                      style={{color:card.color , margin:0,  fontSize:30 , fontWeight:'bold' ,}}>
                        {card.value}
                    </p>
                </InfoHolder>

            </Card>
          ))
        }
    </Container>
  )
}
