import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    authcard: {
        marginTop: '10vh',
        minWidth: "30vw",
        padding: theme.spacing(3),
    },
    
    link: {
        paddingRight: theme.spacing(2),
        color: "#3385ff",
        textDecoration: 'none',
    },

    chartCard: {
        padding: theme.spacing(3),
    },
    
    searchSelect: {
        textAlignLast: 'center',
    },
}));

export default useStyles;