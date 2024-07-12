import { useState } from 'react';

import FaqData from './FaqData';

import './faq.scss';

const Faq = () => {

  const [openItem, setOpenItem] = useState(null);

  const toggleAccordion = (id) => {
    if (id === openItem) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };

  function RenderFaq(arr) {
    const items = arr.map((item, i) => {
      return (
        <div className="faq__accordion-item"
              key={i}>
          <h2
            onClick={() => toggleAccordion(i)} className="faq__accordion-header animate__animated animate__slideInUp">{item.title}
            <svg className={`bi bi-chevron-down chevron ${openItem === i ? 'down' : 'up'}`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
            </svg>
          </h2>
          <div className={`faq__accordion-content ${openItem === i ? 'open' : ''}`}>
            <p className="faq__accordion-text animate__animated animate__slideInUp">{item.text}.</p>
          </div>
          </div>
      )
    })
    return items;
  }

    const RenderItems = RenderFaq(FaqData);
      return (
          <section className="faq" id="faq">
          <div className="container">
              <h3 className="faq-titel">FAQ</h3>
              <div className="faq__accordeon">
                  {RenderItems}
              </div>
          </div>
        </section>
      )
}

export default Faq;