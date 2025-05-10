import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PageLayout = () => {
    return (
        <div>
            <Header />
            <main style={{ minHeight: '300px', padding: '10px 20px' }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;