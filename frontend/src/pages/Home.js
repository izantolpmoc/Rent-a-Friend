import UnsplashMan from '../assets/images/unsplash_man.jpg'
import '@styles/pages/home.scss'

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