import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    /* const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Obrigatório';
        }

        if (!values.email) {
            errors.email = 'Obrigatório';
        } else {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'E-mail inválido';
            }
        }
        return errors;
    } */

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Obrigatório'),
            email: Yup.string().email('E-mail inválido').required('Obrigatório'),
        }),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <>
            <h1>Cadastro de Clientes</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <label htmlFor="name">{formik.errors.name}</label> : null}
                </div>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <label htmlFor="email">{formik.errors.email}</label> : null}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default Register;