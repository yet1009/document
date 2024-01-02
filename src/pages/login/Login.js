import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import Input from "../../components/form/Input";


const Login = () => {

    const navigate = useNavigate()

    const validate = (values) => {
        const errors = {};

        if(!values['id'].length || !values['pw'].length ) {
            errors['id'] = '빈 값이 있습니다. 양식을 채워주세요.'
        }

        return errors
    }

    const onSubmit = (data) => {
        try {

        }catch(err) {

        }
    }



    return (
        <div className='login_wrapper'>
            <Formik
                initialValues={{
                    id: '',
                    pw: ''
                }}
                validate={validate}
                onSubmit={onSubmit}
            >
                {
                    ({
                         values,
                         errors,
                         handleChange,
                        touched,
                        handleReset
                     }) => (
                        <Form className='login__inner'>
                            <h2>Login</h2>
                            <div className='create'>
                                If you don't have an account register <br/>
                                You can <button
                                    type='button'
                                    onClick={() => {
                                        navigate('/signup', { replace: true })
                                    }}
                            >Create an account</button>
                            </div>
                            {
                                errors.id && touched.id ? (<div className='error_box'><p className='error_box--text'>{errors.id}</p></div>) : null
                            }
                            <div className='ipt_box'>
                                <Input
                                    type='text'
                                    value={values['id']}
                                    name='id'
                                    placeholder='ID'
                                    className='ipt'
                                    onChange={handleChange}
                                    handleReset={handleReset}
                                />
                            </div>
                            <div className='ipt_box'>
                                <Input
                                    type='password'
                                    value={values['pw']}
                                    name='pw'
                                    placeholder='Password'
                                    className='ipt'
                                    onChange={handleChange}
                                    handleReset={handleReset}
                                />
                            </div>
                            <div className='btn_box'>
                                <button
                                    className='btn ty_black'
                                    type='submit'
                                >확인</button>
                            </div>
                        </Form>

                    )
                }
            </Formik>

        </div>
    )
}

export default Login;