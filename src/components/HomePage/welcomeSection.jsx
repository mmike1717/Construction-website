
import brickHouse from '../../assets/brick-house.jpg'

export default function WelcomeSection(){


    return (
        <>
            <div id='MainDivForWelcomeSection'>
                <div className='WelcomeDescription'>
                    <h1>Welcome to the Construction Page</h1>
                    <div className='IntroParagraphs'>
                        At XYZ Construction, we pride ourselves on being your go-to partner for all your remodeling and general construction needs.
                        With a reputation for efficiency, exceptional customer service, and a wide range of satisfied and repeat customers, we are
                        committed to delivering top-notch results on every project.Our dedicated team is at the heart of what we do. From the initial
                        consultation to the final touches, our team is there every step of the way to provide the best quality of workmanship and service.
                    </div>
                    <div className='IntroParagraphs'>
                        What sets us apart is our comprehensive range of services. At XYZ Construction, we understand that your home is your biggest investment,
                        and we are committed to delivering results that exceed your expectations. With a focus on quality, reliability, and professionalism, we
                        strive to build lasting relationships with our clients and ensure their complete satisfaction.
                    </div>
                    <div className='IntroParagraphs'>
                        When you choose XYZ Construction, you can trust that your project is in good hands. Contact us today to learn more about our services and how
                        we can help you transform your space into the home of your dreams.
                    </div>
                </div>

                <div className='DivHoldingWelPic'>
                    <img className='WelcomePicture' src={brickHouse}></img>
                </div>
            </div>

        </>
    )
}
