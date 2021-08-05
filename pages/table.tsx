import { styled } from '@material-ui/core/styles';

const Container = styled('div')({
  padding: '20px 35px',
  fontSize:20
});

export default function Table() {
  return (
    <Container>
      <p>This is table page dummy content.</p>
    </Container>
  )
}
