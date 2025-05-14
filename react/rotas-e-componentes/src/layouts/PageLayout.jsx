import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer'


const PageLayout = () => {
    return (
        <div className='relative'>
            <Header />
            <main className='h-screen'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;