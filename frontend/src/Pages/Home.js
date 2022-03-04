import Header from '../Components/Header';
import Features from '../Components/Features';
import Comments from '../Components/Comment/Comments';
import FeaturedBlogs from '../Components/Blog/FeaturedBlogs';
import Subscribe from '../Components/Subscribe';

const Home = () => {
    return (
        <>
            <Header />
            <Features />
            <Comments />
            <FeaturedBlogs />
            <Subscribe />
        </>
        )
};
  
export default Home;