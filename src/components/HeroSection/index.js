import React, {useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import Video from '../../img/video.mp4'
import { HeroContainer, HeroContent, HeroBg, VideoBg, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement'
import Grid from '@material-ui/core/Grid';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }))(Tooltip);

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>We are in this Together!</HeroH1>
                <HeroP>
                Raise money and support for causes, projects, ideas and talents. Join us in Empowering the World!
                </HeroP>
                    <center>
        <Grid container spacing={3} >
        <Grid item xs={12} sm={3}> 
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Donate with Us</Typography>
           {"Indulge in donating for fundraisers, crowdfunds, auctions and a lot more"}.{' '}
            {"Let's together eliminate poverty and spread happiness."}
          </React.Fragment>
        }
      >
      <Button to='/donate' onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Donate 
                    </Button>
        </HtmlTooltip></Grid>
        <Grid item xs={12} sm={3}>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Who's your Match?</Typography>
           {"Do you have some goods that you want to give out to charity?"}{' '}
            {"Here's your chance to let a deserving person match you!"}
          </React.Fragment>
        }
      >
      <Button to='/donor-match' onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Match a Donor 
                    </Button>
                    </HtmlTooltip></Grid>
        <Grid item xs={12} sm={3}>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Show them your Gratitude</Typography>
           {"Say Thanks to someone by showing them love."}{' '}
            {"Support any registered user with any amount to support altruism."}
          </React.Fragment>
        }
      ><Button to='/support-kindness' onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Say Thanks
                    </Button></HtmlTooltip></Grid>
        <Grid item xs={12} sm={3}>
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Sign Up</Typography>
           {"Seeking help?"}{' '}
            {"Our solution is a sign-up away."}
          </React.Fragment>
        }
      ><Button to='signin' onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Apply for Fund 
                    </Button></HtmlTooltip></Grid>
        </Grid>
        <Grid item xs={12} sm={3}  className="GridMargin">
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Let's Fight Covid-19</Typography>
              {"This is not your or my struggle. It's ours"}.{' '}
                {"Getting to you all the help we can during the pandemic."}
              </React.Fragment>
            }
          >
            <Button to='/covid19-support' onMouseEnter = {onHover} onMouseLeave = {onHover}>Covid-19 Support</Button>
          </HtmlTooltip>
        </Grid>
        <Grid item xs={12} sm={3}  className="GridMargin">
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Let's Fight Covid-19</Typography>
              {"This is not your or my struggle. It's ours"}.{' '}
                {"Getting to you all the help we can during the pandemic."}
              </React.Fragment>
            }
          >
            <Button to='/user-profile' onMouseEnter = {onHover} onMouseLeave = {onHover}>Dashboard</Button>
          </HtmlTooltip>
        </Grid>
                </center>
            </HeroContent>
        </HeroContainer>    
    )
}

export default HeroSection;