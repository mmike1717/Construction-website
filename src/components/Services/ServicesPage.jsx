import ContactUs from "../ContactUs/ContactUsSection";
import Footer from "../Footer/footer";
import GeneralServices from "./generalServices";
import bathpic from '../../assets/bathroom03.jpg'

import './servicesPage.css'



export default function ServicesPage (){

    return (
        <>
            <div className="ServicesTitleAndPic">
                <img src={bathpic}></img>
                <div className="ServicesMainTitle">Our Services</div>
            </div>

            <GeneralServices />

            <ContactUs />

            <Footer />
        </>
    )
}
