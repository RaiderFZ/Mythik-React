import {Link, NavLink} from 'react-router-dom';

import './footer.scss';

const Footer = () => {

    return (
      <section className="footer">
        <div className="container">
          <div className="footer__wrap row align-items-center">
            <div className="col-lg-4">
              <Link className="footer__wrap-logo logo animate__animated animate__slideInUp" to='/'>Мистические истории</Link>
            </div>
            <div className="col-lg-4">
              <Link className="footer__rights-link" to="/404">
                <p className="rights animate__animated animate__slideInUp">mystic.adventures@mail.com @mystic.adventures</p>
                <p className="rights animate__animated animate__slideInUp">©️2024</p>
              </Link> 
            </div>
            <div className="footer__nav col-lg-4 ">
              <nav className="footer__nav-wrap nav flex-column align-items-end">
                <p className="footer__nav-title animate__animated animate__slideInUp">МЕНЮ</p>
                <NavLink style={({isActive}) =>({fontWeight: isActive ? 900 : 'inherit'})} className="footer__nav-link nav-link animate__animated animate__slideInUp" to="/">ГЛАВНАЯ</NavLink>
                <NavLink style={({isActive}) =>({fontWeight: isActive ? 900 : 'inherit'})} className="footer__nav-link nav-link animate__animated animate__slideInUp" to="/history">ИСТОРИИ</NavLink>
                <NavLink style={({isActive}) =>({fontWeight: isActive ? 900 : 'inherit'})} className="footer__nav-link nav-link animate__animated animate__slideInUp" to="/Faq">FAQ</NavLink>
                <NavLink style={({isActive}) =>({fontWeight: isActive ? 900 : 'inherit'})} className="footer__nav-link nav-link animate__animated animate__slideInUp" to="/About">О НАС</NavLink>
              </nav>
            </div>
          </div>
        </div>
      </section>    
    )
}

export default Footer;