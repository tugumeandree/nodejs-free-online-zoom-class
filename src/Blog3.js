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




const md = `
# Preparation Module 3

#### Coming Soon


### *Nodejs Zoom Class Team*
`; 

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Join', url: 'https://bit.ly/nodejsonline' },
  { title: 'Module2', url: '/module2' },
  { title: 'Module3', url: '/module3' },
];

const mainFeaturedPost = {
  title: 'Databases ',
  description:
    "Become A Mighty Coder  From The Comformt Of Your Home.",
  image: 'https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/https://scotch.io/wp-content/uploads/2014/11/mongoosejs-node-mongodb-applications.png',
  imgText: 'main image description',
};



const sidebar = {
  
    archives: [
    { title: 'Coming', url: '#' },
    { title: 'Coming', url: '#' },
  ],
  modules: [
    { title: 'Module1', url: '/' },
    { title: 'Module2', url: '/module2' },
  ],
  social: [
    { name: 'Whatsapp', icon: WhatsApp },
  ],
  
};

export default function Blog3() {
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
              modules={sidebar.modules}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
     
      <Footer title="Free" description="All Code Studio Services Are Free" />
      
    </React.Fragment>
  );
}