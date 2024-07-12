import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

import StoriesData from '../../data/StoriesData';

import './storiesComponent.scss';

const StoriesComponent = () => {
  const {theme} = useTheme();
  const renderItems = useMemo(() => {
    return StoriesData.map((item, i) => (
      <div className="card col-4 animate__animated animate__slideInUp" key={i}>
        <Link className="history__card-link" to={`/history/${item.id}`}>
          <img className="card-img" src={item.url} alt={item.title} />
          <div className="card-box">
            <h3 className="card-title animate__animated animate__slideInUp">
              {item.title}
            </h3>
            <p className="card-text animate__animated animate__slideInUp">
              {item.descript}
            </p>
          </div>
        </Link>
      </div>
    ));
  }, []);
    return (
        <section className={`stories container ${theme === 'light' ? 'white': 'dark'}`} id="stories">
        <h3 className="stories-title animate__animated animate__slideInUp">ИСТОРИИ</h3>
        <div className="history__cards row justify-content-center stories-wrap">
          {renderItems}
        </div>
      </section>
    )
}

export default StoriesComponent;