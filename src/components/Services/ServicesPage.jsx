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

            <div id="MainDivForOtherServices">
                <div className="OtherServicesTitle">Other Home Improvement Services</div>
                <div className="AllOfOtherServices">
                    <div className="OtherServices">Attic Conversiony</div>
                    {/* <div>Basement Remodel</div>
                    <div>Bathroom Remodel</div> */}
                    <div className="OtherServices" >Carpentry</div>
                    <div className="OtherServices" >Demolition & Debris Removals</div>
                    <div className="OtherServices" >Design</div>
                    <div className="OtherServices" >Drywall and Plastering</div>
                    <div className="OtherServices" >Electrical</div>
                    <div className="OtherServices" >Fences & Gates</div>
                    <div className="OtherServices" >Flooring (All Kinds)</div>
                    <div className="OtherServices" >Garage Building</div>
                    <div className="OtherServices" >Home Improvement</div>
                    <div className="OtherServices" >New Home Construction</div>
                    <div className="OtherServices" >Painting and Wallcovering</div>
                    <div className="OtherServices" >Patio & Walkways</div>
                    <div className="OtherServices" >Tile and Stone</div>
                    <div className="OtherServices" >Interior Remodeling & Trim</div>
                    <div className="OtherServices" >Masonry & Paving</div>
                    <div className="OtherServices" >Windows</div>

                </div>
            </div>

            <ContactUs />

            <Footer />
        </>
    )
}
