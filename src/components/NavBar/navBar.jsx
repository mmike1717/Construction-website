import './nav.css'


export default function NavBar(){

    return (
        <div id='MainNavBar'>
            <div id='LogoDiv'>logo</div>
            <div id="NavCenterDiv">
                <a href='/'>Home</a>
                <a href='/AboutUs'>About Us</a>
                <a href='/Services'>Our Services</a>
                <a href='/Contact'>Contact Us</a>
            </div>
            <div id='PhoneNumDiv'>Phone #</div>
        </div>
    )
}
