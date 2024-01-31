
import './ContactUs.css'
import Kitchen5 from '../../assets/kitchen05.jpg'
import designPic from '../../assets/interior-design.jpg'
import phone from '../../assets/phone.svg'
import email from '../../assets/envelope.svg'
import location from '../../assets/location-dot.svg'


export default function ContactUs(){


    return (
        <>
            <div id="MainDivForContactUs">
                <img className='ContactUsPic' src={designPic}></img>
                <div className='CenterDivForEstimate'>
                    <img className='CenterDivPic' src={designPic}></img>
                    <div className='FreeEstimateTitle'>Don't Wait, Get Your Free Estimate.</div>
                    <div className='VisionARealityTitle'>Lets Make Your Vision A Reality!</div>
                    <div className='MainDivForContactUsInfo'>
                        <div className='DivHoldingIconAndInfo'> <img className='IconsForContactUs1' src={email}></img>email</div>
                        <div className='DivHoldingIconAndInfo'> <img className='IconsForContactUs' src={phone}></img>999-999-9999</div>
                        <div className='DivHoldingIconAndInfo'> <img className='IconsForContactUs' src={location}></img>Northern New Jersey</div>
                    </div>
                </div>
            </div>
        </>
    )
}
