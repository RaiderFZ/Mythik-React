import './heroSection.scss';

const HeroSection = () => {
    return (
        <section className="hero">
        <div className="container hero__wrap">
          <h2 className="hero__wrap-title animate__animated animate__slideInUp">
            Добро пожаловать в мир загадочных историй
          </h2>
          <p className="hero__wrap-text animate__animated animate__slideInUp">
            На нашем сайте вы найдете самые захватывающие истории о мистических
            событиях, необъяснимых явлениях и таинственных местах. Погрузитесь в
            атмосферу загадок и тайн, исследуя удивительные события прошлого и
            настоящего.
          </p>
        </div>
      </section>
    )
}

export default HeroSection