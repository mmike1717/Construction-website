
import './generalServices.css'
import screwDriverWrench from '../../assets/screwdriver-wrench.svg'
import shower from '../../assets/shower.svg'
import wrench from '../../assets/wrench.svg'
import chimneyHouse from '../../assets/house-chimney.svg'
import hammer from '../../assets/hammer.svg'

export default function GeneralServices (){


    return(
        <>
            <div id="MainDivForGeneralServices">
                <h1 className='GeneralServicesTitle'>Our Services</h1>
                <div className="DivHoldingListOfServices">
                    <div className="EachService">
                        <img src={screwDriverWrench}></img>
                        <div>Basement Renovations</div>
                        <div className='DetailOfEachService'> Providing an array of options for home improvements,
                              including remodeling, additions, and renovations.
                        </div>
                    </div>

                    <div className="EachService">
                        <img src={shower}></img>
                        <div>Bathroom Remodeling</div>
                        <div className='DetailOfEachService'>Attention to detail and superior craftsmanship for your
                            bathroom remodeling and renovation projects.
                        </div>
                    </div>

                    <div className="EachService">
                        <img src={wrench}></img>
                        <div>Kitchen Remodeling</div>
                        <div className='DetailOfEachService'>Capable of transforming your kitchen into a stunning and functional space through remodeling.</div>
                    </div>

                    <div className="EachService">
                        <img src={chimneyHouse}></img>
                        <div>Siding Repairs</div>
                        <div className='DetailOfEachService'>Our range of siding services includes new installations, repairs, and replacements,
                            tailored to suit your needs.
                        </div>
                    </div>

                    <div className="EachService">
                        <img src={hammer}></img>
                        <div>Deck Remodeling</div>
                        <div className='DetailOfEachService'>We take pride in providing cost-effective and high-quality deck remodeling services.</div>
                    </div>
                </div>
            </div>
        </>
    )

}
