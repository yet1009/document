import {useController, useForm} from "react-hook-form";



const SignUp = () => {

    const defaultValues = {
        name: '',
        personal: false,
        info: false,
        marketing: false,
    }

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: {errors}
    } = useForm({ defaultValues });

    // const { field: { value, onChange, onBlur}} = useController({ name, rules, control })

    const onSubmit = async (data) => {
        try {
            console.log(data)
        }catch(err) {

        }
    }

    function checkboxHandler(e) {
        let isChecked = e.target.checked

        setValue('personal', isChecked)
        setValue('info', isChecked)
        setValue('marketing', isChecked)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>이름</label>
                <input
                    {...register('name', {

                    })}
                />
            </div>
            <div>
                <label>전체 동의</label>
                <input
                    type='checkbox'
                    onChange={(e) => checkboxHandler(e)}
                />
            </div>
            <div>
                <label>(필수) 개인정보 동의</label>
                <input
                    {...register('personal', {
                        required: true,
                    })}
                    type='checkbox'
                />
            </div>
            <div>
                <label>(필수) 정보제공동의</label>
                <input
                    {...register('info', {
                        required: true,
                    })}
                    type='checkbox'
                />
                {errors.info && <span>Info is required</span>}
            </div>
            <div>
                <label>(선택) 마케팅수신동의</label>
                <input
                    {...register('marketing', {
                        required: false,
                    })}
                    type='checkbox'
                />
            </div>
            <div>
                {/*<button type='button' onClick={() => {*/}
                {/*    reset()*/}
                {/*}}>리셋</button>*/}
                <input
                    type='button'
                    onClick={() => reset()}
                    value='custom '
                />
            </div>
            <div>
                <button type='submit'>확인</button>
            </div>
        </form>
    )
};

export default SignUp;
