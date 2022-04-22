import Heads from "../components/Head/Head"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"




function Layout({children}) {
    
    return (

       <div>
<Heads/>
<Header/>
<Main>
{children}  
</Main>
<Footer/>
       </div>
    )  
}

export default Layout 