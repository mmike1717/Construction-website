
import team from '../../assets/team-example.jpg'


export default function TheTeam (){

    return (
        <>
            <div id='AboutTeamMainDiv'>
                <div className='TeamHeadingAndDescription'>
                    <h1>Our Team:</h1>
                    <div className='TeamDescriptionPara'>
                        <div>
                            Our team of skilled professionals is the backbone of our company.
                            With years of experience and a passion for craftsmanship, they bring
                            expertise and dedication to every project we undertake. From small-scale
                            renovations to large-scale remodels, our team is equipped to handle it
                            all with precision and care.
                        </div>
                        <div>
                            At XYZ Construction, we're more than just a construction company – we're
                            your dedicated partner in transforming your spaces into something truly
                            extraordinary. With a steadfast commitment to excellence, efficiency, and
                            uperior customer service, we've built a reputation as a trusted leader in
                            the industry.
                        </div>
                    </div>
                </div>
                <img src={team}></img>
            </div>
        </>
    )
}
