
import sunset from '../../assets/sunset.jpg'
import GeneralServices from '../Services/generalServices'
import './aboutUs.css'


export default function AboutUs(){


    return (
        <>
            <div id='MainDivForAboutUS'>
                <div className='FirstSectionofAboutUs'>
                    <img className='SunsetImage' src={sunset}></img>
                    <div className='LearmMoreAboutUs'>Learn More About Us</div>
                </div>

                <GeneralServices />

            </div>
        </>
    )

}
