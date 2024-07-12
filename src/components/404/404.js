import './404.scss';

const Component404 = () => {

    return (
        <section className="hero hero-404">
            <div className="container hero__wrap hero__wrap--404">
                <h2 className="hero__wrap-title hero__wrap-title--404 animate__animated animate__slideInUp">
                    404 
                </h2>
                <h2 className="hero__wrap-title hero__wrap-title--404 animate__animated animate__slideInUp">
                    ой, страница не найдена
                </h2>
                <p className="hero__wrap-text hero__wrap-text-404 animate__animated animate__slideInUp">
                    СТРАНИЦА, НА КОТОРУЮ ВЫ ПЫТАЛИСЬ ПОПАСТЬ, НЕ СУЩЕСТВУЕТ ИЛИ БЫЛА УДАЛЕНА.
                    ПЕРЕЙДИТЕ НА ГЛАВНУЮ СТРАНИЦУ, ЧТОБЫ продолжить 
                    исследование мистических историй!
                </p>   
            </div>
        </section>
    )
}

export default Component404;