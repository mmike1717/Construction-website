
import phone from '../../assets/phone.svg'
import envelope from '../../assets/envelope.svg'
import clock from '../../assets/clock.svg'
import location from '../../assets/location-dot.svg'
import './footer.css'


export default function Footer(){


    return (
        <>
            <div className='MainDivHoldingFooter'>
                <div className='LogoAndParaForFooter'>
                    <div></div>
                    <div className='DescriptionForLogoInFooter'>
                        At XYZ Construction as we consistently exceed expectations by delivering exceptional
                        results and unparalleled customer service. Our commitment to going above and beyond
                        ensures that clients not only trust us with their projects but also rely on us to c
                        onsistently surpass their needs and aspirations.
                    </div>
                </div>

                <div className='MainDivForFooterIcons'>
                    <div className='DivHoldingIconInfo'>
                        <img className='InfoIconsForFooter' src={phone}></img>
                        <div>973-999-9999</div>
                    </div>
                    <div className='DivHoldingIconInfo'>
                        <img className='InfoIconsForFooter'  src={envelope}></img>
                        <div>construction@outlook.com</div>
                    </div>
                    <div className='DivHoldingIconInfo'>
                        <img className='InfoIconsForFooter'  src={clock}></img>
                        <div>Mon - Fri (9am - 5pm)</div>
                    </div>
                    <div className='DivHoldingIconInfo'>
                        <img className='InfoIconsForFooter'  src={location}></img>
                        <div>1234 Jersey Ave, Jersey, NJ 12345</div>
                    </div>
                </div>

                <div></div>
            </div>
            <div className='RightsReserved'>© Copyright 2022. All Rights Reserved</div>
        </>
    )
}
