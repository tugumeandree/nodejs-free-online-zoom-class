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
import SimpleCard1 from './Card1'
import SimpleCard2 from './Card2'


const md = `
# Web Servers

#### Preparation Module2

In our daily lives we are majorly exposed to client side software which is  web browsers like google chrome, firefox or other client applications like mobile apps and desktop apps.

Have you ever wondered why you can  be offline with client side software still installed on your laptop or smartphone?.
Being offline simply means failure to access server side software.
This shows you how important server side software is.
For example with websites we need a web server to store, process and deliver web pages to clients. Web servers  do more than that though. 

Nodejs helps us to build server side software and also establish a network/connection between client side software and server side software. It also helps us maintain security, do authentication, cryptography and any other logic that can be done on the server side.


## To  build a server side application you need to know at least these three things.

###  1. Web servers:They satisfy client requests/provide functionality
Nodejs has inbuilt modules , frameworks and also community open source packages that can help you build state of the art custom web server that does whatever you want it to do in whichever you want it to do it.

### 2. Data interchange formats, between client and server
There are two major forms of web data interchange formats that are XML and JSON.
The most used and the one which is almost becoming a standard is JSON.In our classes we will be strictly using JSON as our data interchange format. 

###  3. Network communication protocols between client and server.
We have different types of communication protocols but the most ideal for web applications development is HTTP.
We also have have WebSocket which helps us to build chatting applications  like whatsapp that are real time and multidirectional(full-duplex communication)

## Happy Studying!

Start with the attachments,ask us any questions or ask for help if you meet any challenges.

### *Nodejs Zoom Class Team*
`; 

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Join', url: 'https://bit.ly/nodejsonline' },
  { title: 'Module1', url: '/' },
  { title: 'Module3', url: '/module3' },
];

const mainFeaturedPost = {
  title: 'Preparation Module2',
  description:
    "Become A Mighty Coder  From The Comfort Of Your Home.",
  image: 'https://scotch-res.cloudinary.com/image/upload/w_1050,q_auto:good,f_auto/media/52165/bvMs7LieQF2b2f6fVVmF_Desktop.png.jpg',
  imgText: 'main image description',
};



const sidebar = {
  
    archives: [
    { title: 'What is a web server', url: 'https://en.wikipedia.org/wiki/Web_server' },
    { title: 'What is HTTP', url: 'https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol' },
    { title: 'What is JSON', url: 'https://en.wikipedia.org/wiki/JSON' },

  ],
  modules: [
    { title: 'Module1', url: '/' },
    { title: 'Module3', url: '/module3' },
  ],
  social: [
    { name: 'Whatsapp', icon: WhatsApp },
  ],
  
};

export default function Blog2() {
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
            <SimpleCard1/>
            <SimpleCard2/>
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