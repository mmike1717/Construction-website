
import team from '../../assets/team-example.jpg'


export default function TheTeam (){

    return (
        <>
            <div id='AboutTeamMainDiv'>
                <div className='TeamHeadingAndDescription'>
                    <h1>Our Team:</h1>
                    <div></div>
                </div>
                <img src={team}></img>
            </div>
        </>
    )
}
