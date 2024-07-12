import {Link, NavLink} from 'react-router-dom';
import { useState, useMemo, useCallback } from 'react';

import StoriesData from '../../data/StoriesData';
import SearchCard from '../../service/searchCard/SearchCard'

import './header.scss';
const Header = () => { 
  const [value, setvalue] = useState('');
  const [openSidebar, steOpenSideBar] = useState(false);
// eslint-disable-next-line
  const filterSearch = useMemo(() => {
    return StoriesData.filter(item => {
      return item.title.toLowerCase().includes(value.toLowerCase())
    })
  })

  const handleChange = useCallback((event) => {
    setvalue(event.target.value);
  }, []);

  const toggleSidebar = useCallback(() => {
    steOpenSideBar(!openSidebar);
  }, [openSidebar]);

  const navItems = [
    { path: '/', label: 'ГЛАВНАЯ' },
    { path: '/history', label: 'ИСТОРИИ' },
    { path: '/Faq', label: 'FAQ' },
    { path: '/About', label: 'О НАС' }
  ];

  return (
    <header className="header">
      <nav className ="header__nav navbar fixed-top navbar-expand">
        <div className ="header__nav-wrap container">
          <Link className ="header__nav-logo logo" to="/">
            Мистические истории
          </Link>
          <div
            className ="header__nav-collapse collapse navbar-collapse"
            id="navbarNav">
            <ul className ="header__nav-list navbar-nav">
              {navItems.map((item, index) => (
                <li key={index} className="header__nav-item nav-item">
                  <NavLink
                    style={({ isActive }) => ({ fontWeight: isActive ? 900 : 'inherit' })}
                    className="header__nav-link nav-link"
                    to={item.path}
                    end
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="hero__wrap-search">
                <form 
                    className="search-form" 
                    id="search-highlight">
                <input
                    id="search"
                    type="text"
                    placeholder="Поиск"
                    onChange={handleChange}
                />
                </form>
                {value && (
                  <div className='searhWrap'>
                    {
                      filterSearch.map((item, i) => {
                        return (
                          <SearchCard 
                            key={i} 
                            id={item.id} 
                            title={item.title} 
                            descript={item.descript.substring(0, 100) + '...'} 
                            url={item.url} 
                            isBurger={false}/>
                        )
                      })
                    }
                  </div>
                )}
            </div>
          </div>
          <div className ="burger-menu">
            <button onClick={toggleSidebar} 
                    className ="burger">
            </button>
          </div>
        </div>
        <div onClick={toggleSidebar} 
             className ={`overlay  ${openSidebar ? 'overlay-active' : null}`}>
        </div>
      </nav>
      
      <div className ={`sidebar ${openSidebar ? 'sidebar--active' : null}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                style={({ isActive }) => ({ fontWeight: isActive ? 900 : 'inherit' })}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <form className ="burger-box">
          <input 
              className ="burger-search" 
              id="burger-search" 
              type="text"
              placeholder="Поиск" 
              onChange={(event) => setvalue(event.target.value)}
              />
        </form>
        {value && (
          <div className='searhWrap searhWrap--burger'>
            {
              filterSearch.map((item, i) => (
                <SearchCard 
                  id={item.id} 
                  key={i} 
                  title={item.title} 
                  descipt={item.descript.substring(0, 100) + '...'} 
                  url={item.url} 
                  isBurger={true}/>
            ))}
          </div>
        )}   
      </div>
    </header>
  )
}

export default Header;