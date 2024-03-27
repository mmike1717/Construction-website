
import sunset from '../../assets/kitchen06.jpg'
import ContactUs from '../ContactUs/ContactUsSection'
import Footer from '../Footer/footer'
import GeneralServices from '../Services/generalServices'
import TheTeam from './aboutTheTeam'
import './aboutUs.css'


export default function AboutUs(){

    return (
        <>
            <div id='MainDivForAboutUS'>
                <div className='FirstSectionofAboutUs'>
                    <img className='SunsetImage' src={sunset}></img>
                    <div className='LearmMoreAboutUs'>Learn More About Us</div>
                </div>

                <TheTeam />

                <GeneralServices />

                <ContactUs />

                <Footer />

            </div>
        </>
    )

}
