import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree,homeObjFour} from './Data';
import { InfoSection, Pricing} from '../../components'


const Services = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Services;
