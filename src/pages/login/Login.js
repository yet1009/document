const Login = () => {

    function loginHandler() {

    }


    return (
        <div className={'login_wrap'}>
            <input type='text' />
            <input type='password' />
            <button
                type='button'
                onClick={loginHandler}
            >로그인</button>
        </div>
    )
}

export default Login;