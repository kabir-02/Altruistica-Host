import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import red from '@material-ui/core/colors/red';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(red[400]),
      backgroundColor: '#EE82EE',
      '&:hover': {
        backgroundColor: '#800080',
      },
    },
  }))(Button);
  

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    color: '#800080'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(3, 0, 3),
    color: red[800]
  },
  cardHeader: {
    backgroundColor: 	'#800080',
    color:'FFF'
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  {
    img: 'img/team/01.jpg',
    title: 'Kentucky John',
    price: '2nd',
    description: [
        'Lorem Ipsum 1', 
        'Lorem Ipsum 2', 
        'Lorem Ipsum 3',
        'Lorem Ipsum 4',
    ],
    option: '/Forever',
    buttonText: 'Sign up for Free',
    buttonVariant: 'outlined',
  },
  {
    img: 'img/team/02.jpg',
    title: 'Amit Paul',
    subheader: 'Altruistic Angel',
    price: '1st',
    description: [
      'Lorem Ipsum 1', 
        'Lorem Ipsum 2', 
        'Lorem Ipsum 3',
        'Lorem Ipsum 4',
    ],
    option: '/month',
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    img: 'img/team/03.jpg',
    title: 'Anna Hussain',
    price: '3rd',
    description: [
      'Lorem Ipsum 1', 
      'Lorem Ipsum 2', 
      'Lorem Ipsum 3',
      'Lorem Ipsum 4',
    ],
    option: '/person',
    buttonText: 'Extended License',
    buttonVariant: 'outlined',
  },
];

export const Leaderboard = (props) => {
  const classes = useStyles();

  return (
      <> 
      <div id='leaderboard' className='info-section'>
      <h2 className="title-section">LEADERBOARD</h2>
      <center>
      <Container maxWidth="md" component="main" >
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <img src={tier.img}/>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      {tier.price} Position
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
    </Container>
    </center>
    </div>
    </>
  );
}
