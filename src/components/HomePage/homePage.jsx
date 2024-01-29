
import housePic from '../../assets/bergen-county-new-jersey.jpg'
import kitchenPic from '../../assets/kitchen01.jpg'
import fastTruck from '../../assets/truck-fast-solid.svg'
import handshake from '../../assets/handshake.svg'
import quality from '../../assets/quality-icon.png'
import service from '../../assets/service-icon.png'
import thumbup from '../../assets/thumb-up-icon.png'
import bathPic1 from '../../assets/bathroom01.jpg'
import bathPic2 from '../../assets/bathroom02.jpg'
import kitchenPic1 from '../../assets/kitchen01.jpg'
import kitchenPic2 from '../../assets/kitchen02.jpg'
import WelcomeSection from './welcomeSection'
import './homePage.css'
import Carousel from './carouselSection'
import Footer from '../Footer/footer'


export default function HomePage(){

    const images = [
        bathPic1,
        bathPic2,
        kitchenPic1,
        kitchenPic2
    ]


    return (
        <>
            <div className='divHoldingFirstImage' >
                <div className='divHoldingTitleForFirstImage'>
                    <h1>Construction: Residential and Renovation</h1>
                    <h2 className='getFreeQuoteTitle'>Get a Free Quote Now {'>'}</h2>
                </div>
                <img className='firstImage' alt='pic' src={housePic}/>
            </div>

            <div className='divHoldingSecImage'>
                <img className='secondImage' src={kitchenPic}/>
                <div className='Box1ofSecPic'>
                    <img className='ServiceIcons' src={fastTruck}></img>
                    <div>Quick Response</div>
                </div>

                <div className='Box2ofSecPic'>
                    <img className='ServiceIcons' src={quality}></img>
                    <div>Quality Workmanship</div>
                </div>

                <div className='Box3ofSecPic'>
                    <img className='ServiceIcons' src={handshake}></img>
                    <div>Excellent Customer Service</div>
                </div>

                <div className='Box4ofSecPic'>
                    <img className='ServiceIcons' src={service}></img>
                    <div>Personalized Service</div>
                </div>

                <div className='Box5ofSecPic'>
                    <img className='ServiceIcons' src={thumbup}></img>
                    <div>Satisfaction Guaranteed</div>
                </div>

            </div>

            <WelcomeSection />

            <div className='MainDivHoldingGallery'>
                <Carousel images={images} />
                <div className='ParagraphAndTitleForGallery'>
                    <div className='projectTitleForCarousel'>Project Gallery</div>
                    <div className='GalleryParagraph'>
                        Whether you're looking to remodel your kitchen, renovate your bathroom, or undertake a
                        complete home makeover, we have the expertise and resources to bring your vision to life.
                        Take a look at how some of our customers were able to make their vision a reality.
                    </div>
                </div>
            </div>

            <Footer />


        </>
    )

}
