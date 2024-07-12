import { Suspense} from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, useParams  } from "react-router-dom";
import { ThemeProvider } from '../../context/ThemeContext';
import ThemedComponent from '../../service/ThemedComponent';

import Header from '../header/Header';
import MainPage from '../pages/mainPage/MainPage';
import HistoryPage from '../pages/history/HistoryPage';
import SinglePage from '../pages/singlePages/SinglePage';
import SinglePageStory from '../pages/singlePageStory/SinglePageStory';
import FaqPage from '../pages/faqPage/FaqPage';
import AboutPage from '../pages/aboutPage/AboutPage';
import Page404 from '../pages/Page404';
import Footer from '../footer/Footer';

import Load from '../load/Load';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="App">
          <ThemedComponent/>
          <Header/>
            <main >
              <Suspense fallback={<Load/>}>
                <Routes>
                  <Route path='/' element={<MainPage/>}/>
                  <Route path='/history' element={<HistoryPage/>}/>
                  <Route path='/:id' element={<SinglePage/>}/>
                  <Route path='/history/:id' element={<SinglePageStory/>}/>
                  <Route path='/Faq' element={<FaqPage/>}/>
                  <Route path='/About' element={<AboutPage/>}/>
                  <Route path='/404' element={<Page404/>}/>
                  <Route path='*' element={<Page404/>}/>
                </Routes>
              </Suspense>
            </main>
          <Footer className="footer animate__headShake"/>   
        </div> 
      </ThemeProvider>
    </Router>
  );
}

export default App;
