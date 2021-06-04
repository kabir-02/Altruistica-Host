import React, {useState} from 'react'
import Video from '../../img/video.mp4'
import { HeroContainer, HeroContent, HeroBg, VideoBg, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement'

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
                <HeroH1>Come Empower the World!</HeroH1>
                <HeroP>
                Create fundraisers for causes, projects and ideas. Donate not only money but also goods to those in need.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter = {onHover} onMouseLeave = {onHover}>
                        Get Started {hover? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>    
    )
}

export default HeroSection;