import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

const Layout=({children})=>{

return<>
    <NavbarComponent/>
    <div>
        {children}
    </div>
    <Footer/>
</>
}

export default Layout;