import {Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import Input from "../../components/form/Input";


//특수 기호있는지 확인
function testRegText(text = '') {
    let reg = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    return reg.test(text)
}


function testIdReg(text = '') {
    let reg = /^[a-zA-Z0-9]+$/g;
    return reg.test(text)
}


const SignUp = () => {

    const navigate = useNavigate();

    const onSubmit = (data) => {
        try {
            console.log(data)
        } catch (err) {
        }
    }

    const validate = (values) => {
        const errors = {};
        let checkReg = testRegText(values['pw']) && testRegText(values['confirmPw']);
        let idReg = testIdReg(values['id']);

        if (values['confirmPw'] !== values['pw']) {
            errors.confirmPw = '비밀번호가 일치 하지 않습니다.'
        }

        if(!checkReg) {
            errors.pw = '특수문자가 최소 하나 이상들어가야합니다.'
        }

        if(!values['pw'].length) {
            errors.pw = '비밀번호는 필수값 입니다.'
        }

        if(!values['id']) {
            errors.id = '아이디는 필수 입력값입니다.'
        } else if(values['id'].length < 8) {
            errors.id = '아이디는 최소 8글자 이상이여야 합니다.'
        }else if(!idReg) {
            errors.id = '아이디는 영문과 숫자로만 조합되어야 합니다.'
        }

        return errors;
    }



    return (
        <div className='signup_wrapper'>
            <Formik
                initialValues={{
                    id: '',
                    pw: '',
                    confirmPw: '',
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
                     }) => (
                         <Form className='signup__inner'>
                             <h2>Sign Up</h2>
                             <div className='signup'>
                                 Please Fill in All Required Fields. <br/>
                                 If you already have an account, please <button type='button' onClick={() => {
                                 navigate('/login', {replace: true})
                             }}>proceed to log in.</button>
                             </div>

                             {errors.id && touched.id ? (<div className='error_box'><p className='error_box--text'>{errors.id}</p></div>) : null}
                             {errors.pw && touched.pw ? (<div className='error_box'><p className='error_box--text'>{errors.pw}</p></div>) : null}
                             {errors.confirmPw && touched.confirmPw ? (<div className='error_box'><p className='error_box--text'>{errors.confirmPw}</p></div>) : null}
                             <div className='ipt_box'>
                                 {/*<input*/}
                                 {/*    type='text'*/}
                                 {/*    value={values['id']}*/}
                                 {/*    name='id'*/}
                                 {/*    placeholder='ID(영문,숫자 조합)'*/}
                                 {/*    className='ipt'*/}
                                 {/*    onChange={handleChange}*/}
                                 {/*/>*/}
                                 <Input
                                     type='text'
                                     value={values['id']}
                                     name='id'
                                     placeholder='ID(영문,숫자 조합)'
                                     className='ipt'
                                     onChange={handleChange}
                                 />

                             </div>
                             <div className='ipt_box'>
                                 {/*<input*/}
                                 {/*    type='password'*/}
                                 {/*    name='pw'*/}
                                 {/*    value={values['pw']}*/}
                                 {/*    placeholder='Password(영문, 숫자, 특수 문자 포함 8 ~ 16자)'*/}
                                 {/*    className='ipt'*/}
                                 {/*    onChange={handleChange}*/}
                                 {/*/>*/}
                                 <Input
                                     type='password'
                                     name='pw'
                                     value={values['pw']}
                                     placeholder='Password(영문, 숫자, 특수 문자 포함 8 ~ 16자)'
                                     className='ipt'
                                     onChange={handleChange}
                                 />

                             </div>
                             <div className='ipt_box'>
                                 <Input
                                     type='password'
                                     value={values['confirmPw']}
                                     name='confirmPw'
                                     placeholder='비밀번호 일치여부확인'
                                     className='ipt'
                                     onChange={handleChange}
                                 />
                                 {/*<input*/}
                                 {/*    type='password'*/}
                                 {/*    value={values['confirmPw']}*/}
                                 {/*    name='confirmPw'*/}
                                 {/*    placeholder='비밀번호 일치여부확인'*/}
                                 {/*    className='ipt'*/}
                                 {/*    onChange={handleChange}*/}
                                 {/*/>*/}

                             </div>
                             <div className='btn_box'>
                                 <button
                                     className='btn ty_black'
                                     type='submit'
                                 >확인
                                 </button>
                             </div>
                         </Form>
                    )

                }
            </Formik>
        </div>
    )
};

export default SignUp;
