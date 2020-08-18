import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard1() {
  const classes = useStyles();
  

  return (
    <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
        Module2 Objectives
        </Typography>
       <br/>
        <Typography variant="body2" component="p">
        <li>Help participants know what to read about before the class</li>
        </Typography>
      </CardContent>
      
    </Card>
  );
}
