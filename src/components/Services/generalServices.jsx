
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
                <h1>Our Services</h1>
                <div className="DivHoldingListOfServices">
                    <div className="EachService">
                        <img src={screwDriverWrench}></img>
                        <div>Basement Renovations</div>
                    </div>

                    <div className="EachService">
                        <img src={shower}></img>
                        <div>Bathroom Remodeling</div>
                    </div>

                    <div className="EachService">
                        <img src={wrench}></img>
                        <div>Kitchen Remodeling</div>
                    </div>

                    <div className="EachService">
                        <img src={chimneyHouse}></img>
                        <div>Siding Repairs</div>
                    </div>

                    <div className="EachService">
                        <img src={hammer}></img>
                        <div>Deck Remodeling</div>
                    </div>
                </div>
            </div>
        </>
    )

}
