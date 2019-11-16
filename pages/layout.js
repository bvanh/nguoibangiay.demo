import Header from "../components/header";
import Footer from "../components/footer";


const Layout = props => (
  <div>
    <Header 
    />
    {props.children}
    <Footer/>
  </div>
);
export default Layout;
