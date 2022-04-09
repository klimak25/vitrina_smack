import { Link } from "react-router-dom"
function Header() {
    return <nav className= '#3f51b5 indigo'>
           <div className="nav-wrapper">
               <Link to="/" className="brand-logo"> React Shop</Link>
               <ul id='nav-mobile'className="right hide-on-med-and-down">
                    <li>
                        <Link to="about"> About</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                    <li><a href="#!"> <i className="material-icons">search</i></a></li>
               </ul>
           </div>
       </nav>
   }
   export { Header}