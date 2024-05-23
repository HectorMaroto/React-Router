import { Link, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { items } from "../data/items"


function Home() {
    return (
        <div>
            <Navbar/>
            <div className="main-container">
                <div className="sidebar">
                    {items.map((item) => (
                        <div key={item.id}><Link to={`contacts/${item.id}`}>{item.name}</Link></div>
                    ))}
                </div>
            {/* Outlet renderiza los elementos de las rutas hijas (si los hubiese) */}
            <Outlet/>
        </div>    
    </div>
  )
}

export default Home