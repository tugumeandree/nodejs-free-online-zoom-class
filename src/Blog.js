import React from 'react';
import Markdown from 'markdown-to-jsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Link from '@material-ui/core/Link';



const md = `
# Preparation Module 1

#### Important

Whichever level you are at, it never hurts to write code even when it’s easy, that is what playing is!.
For every new game we play from the easiest level until we meet the hard one.

Node Js is all about talking to  servers over a network or operating systems so that clients can get what they want.
The main language that is spoken in the nodejs world is javascript. 

Before we start you should at least know how to ask for food, sorry,rather data in javascript or even how to say hello.
It doesn't hurt to be fluent,you will actually find it easy to assimilate into the nodejs world and culture.
You will only need to master the customs and norms.

Attached are two books to help you play with and also learn the javascript language.
If you are beginning to speak javascript we recommend javascript for kids.
If you are ready to master we recommend Advanced javascript.

## Happy Coding!

Ask us any questions or ask for help if you meet any challenges.

### *Nodejs Zoom Class Team*
`; 

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Join', url: 'https://bit.ly/nodejsonline' },

];

const mainFeaturedPost = {
  title: 'Welcome To The Nodejs Zoom Class',
  description:
    "Become A Mighty Coder  From The Comformt Of Your Home.",
  image: 'https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  imgText: 'main image description',
};



const sidebar = {
  
    archives: [
    { title: 'Javascript For Kids', url: 'http://www.r-5.org/files/books/computers/overviews/for-kids/Nick_Morgan-JavaScript_for_Kids-EN.pdf' },
    { title: 'Advanced Javascript', url: 'https://drive.google.com/file/d/13vrqDtYQQ75XW9We0zxuVm4H2F9KymFP/view?usp=sharing' },
  ],
  social: [
    { name: 'Whatsapp', icon: WhatsApp },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Node.js Zoom Class" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <Markdown
        children={md}
        options={{
            overrides: {
               
            },
        }}
    />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
     
      <Footer title="Free" description="All Code Studio Services Are Free" />
      
    </React.Fragment>
  );
}