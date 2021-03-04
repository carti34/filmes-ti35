import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import GlobalMenu from '../../components/GlobalMenu';
import api from '../../services/api';

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
            description: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Obrigatório'),
            description: Yup.string().required('Obrigatório'),
        }),
        onSubmit: async (values) => {
            try {
                const product = {
                    name: values.name,
                    description: values.description,
                };
                const response = await api.post('/products', product);
                if (response.config) {
                    alert(`O produto ${response.data.name} (id: ${response.data.id}) foi cadastrado com sucesso.`);
                }
            } catch (error) {
                alert(`Ocorreu uma falha durante o cadastro do produto. Tente novamente. ${error}`);
            }
        }
    });

    return (
        <>
            <GlobalMenu />
            <h1>Cadastro de Produtos</h1>
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
                    <label htmlFor="description">Descrição: </label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.description}
                    />
                    {formik.touched.description && formik.errors.description ? <label htmlFor="description">{formik.errors.description}</label> : null}
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default Register;