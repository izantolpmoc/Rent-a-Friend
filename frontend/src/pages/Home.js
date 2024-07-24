import UnsplashMan from '../assets/images/unsplash_man.jpg'
import '../../src/styles/pages/home.css'

const Home = () => {

    return (
        <main>
            <div className='image_container'>
                <img src={UnsplashMan} alt='friendly man'></img>
            </div>
        </main>
    )
}

export default Home