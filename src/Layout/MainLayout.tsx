import Footer from '../components/Footer/Footers';
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';
import './MainLayout.scss';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="page-main">{children}</main>
      <Footer />
      <Modal />
    </div>
  );
};

export default MainLayout;
