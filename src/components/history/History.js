import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useTheme } from '../../context/ThemeContext';

import StoriesData from '../../data/StoriesData';

import './history.scss';


const History = () => {
    const { theme } = useTheme();
    const mainPageStories = useMemo(() => StoriesData.slice(0, 6), []);
    
    const renderItems = useMemo(() => {
        return mainPageStories.map((item, i) => (
            <div className="card col-4" key={i}>
                <Link className="history__card-link" to={`/${item.id}`}>
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
    }, [mainPageStories]);

    return (
        <section className={`history ${theme === 'light' ? 'white': 'dark'}`} id="history">
            <div className="container">
            <h2 className="history-title animate__animated animate__slideInUp" style={{ color: theme === 'light' ? '#333' : '#fff' }}>
                Истории
            </h2>
            <div className="history__cards row justify-content-center stories-wrap">
                {renderItems}
            </div>
            <Link
                to={'/history'}
                className="history-button animate__animated animate__slideInUp"
            >
                к остальным историям
                <svg
                    width={47}
                    height={16}
                    viewBox="0 0 47 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.14819 7C0.595909 7 0.148193 7.44772 0.148193 8C0.148193 8.55228 0.595909 9 1.14819 9V7ZM46.7071 8.70711C47.0977 8.31658 47.0977 7.68342 46.7071 7.29289L40.3432 0.928932C39.9527 0.538408 39.3195 0.538408 38.929 0.928932C38.5384 1.31946 38.5384 1.95262 38.929 2.34315L44.5858 8L38.929 13.6569C38.5384 14.0474 38.5384 14.6805 38.929 15.0711C39.3195 15.4616 39.9527 15.4616 40.3432 15.0711L46.7071 8.70711ZM1.14819 9H46V7H1.14819V9Z"
                    fill="#E4E4E4"
                />
                </svg>
            </Link>
            </div>
        </section>
    )
}

export default History;