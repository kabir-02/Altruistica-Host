import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import red from '@material-ui/core/colors/red';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import Axios from 'axios';

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

const tiersData = [
  {
    title: 'Kentucky John',
    price: '2nd',
    description: [
        'Lorem Ipsum 1',  // email price
        'Lorem Ipsum 2',  // price dontated
    ],
    option: '/Forever',
    buttonText: 'Sign up for Free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Amit Paul',
    subheader: 'Altruistic Angel',
    price: '1st',
    description: [
      'Lorem Ipsum 1', 
        'Lorem Ipsum 2',
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
    ],
    option: '/person',
    buttonText: 'Extended License',
    buttonVariant: 'outlined',
  },
];

export const Leaderboard = (props) => {
  const classes = useStyles();
 const [tiers,setTiers]= useState(tiersData);

  useEffect(()=>{
    //  for first board
    Axios.get('https://altruistica.azurewebsites.net/lboard1').then((response)=>{
      console.log("response for board 1",response.data)
      //  we are getting fields which we need
      const {Name,Email,Tamt_donated}= response.data[0]
      //  create a copy of array
      const updatedTiers= [...tiers]
      //  setting name, email and total amount donated
      updatedTiers[1].title=Name
      // updatedTiers[1].description[]=Email
      updatedTiers[1].description=Tamt_donated
      
      setTiers(updatedTiers)
    })

        //  for second board
        Axios.get('https://altruistica.azurewebsites.net/lboard2').then((response)=>{
          console.log("response for board 2",response.data)
          //  we are getting fields which we need
          const {Name,Email,Tamt_donated}= response.data[0]
          //  create a copy of array
          const updatedTiers= [...tiers]
          //  setting name, email and total amount donated
          updatedTiers[0].title=Name
          updatedTiers[0].description=Tamt_donated
          
          setTiers(updatedTiers)
        })

            //  for third board
    Axios.get('https://altruistica.azurewebsites.net/lboard3').then((response)=>{
      console.log("response for board 3",response.data)
      //  we are getting fields which we need
      const {Name,Tamt_donated}= response.data[0]
      //  create a copy of array
      const updatedTiers= [...tiers]
      //  setting name, email and total amount donated
      updatedTiers[2].title=Name
      updatedTiers[2].description=Tamt_donated
      
      setTiers(updatedTiers)
    })

  }, []) 

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
              <AccountCircleSharpIcon   style={{ fontSize: 100 }}/>
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
                    {/* {tier.description.map((line,index) => ( */}
                      <Typography component="li" variant="subtitle1" align="center">
                        {/* {index==0 && 'Email ID: '} */}
                        Total Amount Donated: ₹
                        {tier.description}
                      </Typography>
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
