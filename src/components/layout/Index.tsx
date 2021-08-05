import Sidebar from './sidebar/Sidebar'
import Header from './header/Header'
import { styled } from '@material-ui/core/styles';

const Container = styled('div')({
    display:'grid' , 
    background:'#F1F3F4' , 
    fontFamily : "'Nunito Sans', sans-serif",
    gridTemplateColumns : '120px auto' ,
  });


const Index = (props:any) => {
    return (
        <Container >
            <Sidebar />

        <div>
            <Header />
            <main> {props.children} </main>
        </div>
        </Container>
    )
}

export default Index
