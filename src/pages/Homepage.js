import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import BlogCard from '../components/BlogCard';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  

const HomePage = () => {

const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={5}>
     
        <Grid item xs={12} sm={4}>
          <BlogCard/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <BlogCard/>
        </Grid>
        <Grid item xs={12} sm={4}>
        <BlogCard/>
        </Grid>
        
      </Grid>
    </Container>
  );
};
export default HomePage;