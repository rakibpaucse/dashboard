import { createTheme } from '@material-ui/core/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
          'Nunito Sans',
        ].join(','),
        htmlFontSize: 10
    },
    palette: {
        primary: {
            main: '#150941'
        },
        secondary: {
            main: '#f80040'
        },
        action: {
            main: '#663399' // main accent color 
        }
    }
})


export default theme;