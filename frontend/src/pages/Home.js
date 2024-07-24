import UnsplashMan from '../assets/images/unsplash_man.jpg'
import '@styles/pages/home.scss'

const Home = () => {

    return (
        <main>
            <div className='section1_container'>
                <div className='image_container'>
                    <img src={UnsplashMan} alt='friendly man'></img>
                </div>
                <div className='text_container'>
                    <h1>What is 友 Rental ?</h1>
                    <p>Scraped marshes Meriadoc. Sleepless hat metal wonders burglar attached chokes support begin Mirkwood smoking. Riders hey-diddle-diddle Minas Tirith devil state battle forgive payment hoping jabs leechcraft residence. Cloven warn secrecy mug Athelas perhaps make note riches. Stating brightest Bar-hrum darling seeps finish work every dragon descent hates catch. It must be taken deep into Mordor and cast back into the fiery chasm from whence it came. Thirty-four grew mother's seasoning restored Cirith beacons dealing starving halfling pirate hallway. Fates suppose relative helpful nine Bombur stinks? Fighting hardest awoken decision fireworks inquisitive bits assessing Mellon cabbages? Spared piled is brightest Bain?</p>
                </div>
            </div>
        </main>
    )
}

export default Home