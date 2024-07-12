import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './promo.scss';

const Promo = () => {

    return (
        <section className="promo">
        <div className="container">
          <div className="row promo-row">
            <div className="promo__wrap col-lg-7 ">
              <h2 className="promo__wrap-title animate__animated animate__slideInUp">ПОДЕЛИСЬ СВОЕЙ МИСТИЧЕСКОЙ ИСТОРИЕЙ!</h2>
              <p className="promo__wrap-text animate__animated animate__slideInUp">У вас есть мистическая история, которую вы хотели бы поделиться с нами и другими посетителями сайта? или может у тебя остались вопросы? Поделитесь с нами!</p>
            </div>
            <div className="col-lg-5">

              <Formik initialValues={{email: '', title: ''}}
                      validationSchema={Yup.object({
                        title: Yup.string()
                          .max(15, 'Must be 15 characters or less')
                          .required('Обязательное поле'),
                        message: Yup.string()
                          .max(20, 'Must be 20 characters or less')
                          .required('Обязательное поле'),
                        email: Yup.string().email('Неверный email').required('Обязательное поле'),
                      })}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          alert(JSON.stringify(values, null, 2));
                          setSubmitting(false);
                        }, 400);
                      }}
                      >
                  {({ isSubmitting }) => (
                    <Form className="form animate__animated animate__slideInUp">
                        <Field placeholder='email' type="email" name="email" className="form-input form-email form-control"/>
                        <ErrorMessage name="email" component="div" className='red'/>
                        <Field placeholder='Заголовок' type="text" name="title" className="form-input form-title form-control" />
                        <ErrorMessage name="title" component="div" className='red'/>
                        <Field placeholder='ОПИСАНИЕ' name="message" as="textarea" className="form-textarea form-input form-textarea form-control" />
                        <ErrorMessage name="message" component="div" className='red'/>
                        <button type="submit" className="form-btn">
                          ОТПРАВИТЬ
                        </button>
                    </Form>
                  )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Promo;