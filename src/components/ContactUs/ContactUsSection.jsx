
import './ContactUs.css'
import Kitchen5 from '../../assets/kitchen05.jpg'
import designPic from '../../assets/interior-design.jpg'

export default function ContactUs(){


    return (
        <>
            <div id="MainDivForContactUs">
                <img className='ContactUsPic' src={designPic}></img>
                <div className='CenterDivForEstimate'>
                    <img className='CenterDivPic' src={designPic}></img>
                    <div>Don't Wait, Get Your Free Estimate</div>
                    <div>Lets Make Your Vision A Reality</div>
                </div>
            </div>
        </>
    )
}
