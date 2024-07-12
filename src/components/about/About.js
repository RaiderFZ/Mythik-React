import './about.scss';

const About = () => {

    return (
        <section className="about" id="about">
            <div className="container about__wrap">
                <h3 className="about__wrap-title animate__animated animate__slideInUp">О НАС</h3>
                <p className="about__wrap-text animate__animated animate__slideInUp"><span>Мы</span> - команда энтузиастов, увлеченных мистическими историями и загадками прошлого и настоящего. </p>
                <p className="about__wrap-text animate__animated animate__slideInUp"><span>Наша цель</span> - создать пространство, где любители загадочного могут насладиться увлекательными рассказами и поделиться своими собственными переживаниями.</p>
                <p className="about__wrap-text animate__animated animate__slideInUp"> <span>Мы стремимся расширить кругозор наших читателей и погрузить их в мир мистики и тайн.</span> Мы верим, что каждая мистическая история несет в себе уроки и истины, которые могут вдохновить нас к новым открытиям и пониманию мира вокруг.</p>
                <h4 className="about__wrap-subtitle animate__animated animate__slideInUp">почему мы?</h4>
                <p className="about__wrap-text animate__animated animate__slideInUp"><span>Мы ценим качество, достоверность и разнообразие в историях, которые мы представляем на нашем сайте.</span> Мы уважаем множество точек зрения и стремимся создать пространство для обмена мнениями и идеями.</p>
                <p className="about__wrap-text animate__animated animate__slideInUp"><span>Если у вас есть вопросы, предложения или хотите присоединиться к нашей команде, не стесняйтесь связаться с нами с помощью формы ниже. Мы всегда открыты к общению и новым возможностям!</span></p>
                <div className="about__description">
                    <p className="about__description-text animate__animated animate__slideInUp">Мы благодарим вас за интерес к нашему проекту и надеемся, что вы найдете на нашем сайте много интересного и увлекательного контента.<span> Спасибо, что вы с нами!</span></p>
                    <div className="about__description-logo logo"></div>
                </div>
            </div>
      </section>
    )
}

export default About;