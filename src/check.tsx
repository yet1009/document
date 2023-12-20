"use client"

import RegInput, { CheckboxWithLabel } from "./ui"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
    userID: string
    password: string
    passwordConfirm: string
    name: string
    phone: string
    code: string
    recommend?: string
    use: boolean
    info: boolean
    marketing?: boolean
}

const inputs = {
    userID: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    code: "",
    codeButton: true,
}

const checkBox = {
    AllCheck: false,
    infoCheck: false,
    useCheck: false,
    marketingCheck: false,
}

const Register = () => {
    const [authError, setAuthError] = useState<string | undefined>(undefined)
    const [input, setInput] = useState(inputs)
    const { userID, password, passwordConfirm, phone, code, codeButton} = input
    const [checkBoxes, setCheckBoxes] = useState(checkBox)
    const { AllCheck, infoCheck, useCheck, marketingCheck } = checkBoxes
    const router = useRouter()
    const handleError = (e: Error) => {
        setAuthError("An error occured. Please try again.")
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterCredentials>()

    // const onSubmit = handleSubmit(async (credentials ) => {
    //   console.log({ ...credentials })
    //   await medusaClient.customers
    //     .create(credentials)
    //     .then(() => {
    //       refetchCustomer()
    //       router.push("/account")
    //     })
    //     .catch(handleError)
    // })
    //fixme: onSubmit 이벤트가 한번 클릭 시 바로 실행이 안됨.
    const onSubmit = handleSubmit(async (credentials) => {

        const ca = {
            ...credentials,
            use: useCheck,
            info: infoCheck,
            marketing: marketingCheck,
        }
        console.log({ ...ca })
        // TODO : 회원가입 API 연동
    })

    const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target
        switch (name) {
            case "userID":
                const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
                if (value.trim() === "") {
                    setInput({ ...input, userID: "null" })
                } else {
                    if (emailRegex.test(value)) {
                        setInput({ ...input, userID: "valid" })
                    } else {
                        setInput({ ...input, userID: "invalid" })
                    }
                }
                break
            case "password":
                const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
                if (value === "") {
                    setInput({ ...input, password: "null" })
                } else {
                    if (passwordRegex.test(value)) {
                        setInput({ ...input, password: value })
                    } else {
                        setInput({ ...input, password: "invalid" })
                    }
                }
                break
            case "passwordConfirm":
                // password input ===  passwordConfirm input 이 같은지 확인
                if (value === "") {
                    setInput({ ...input, passwordConfirm: "null" })
                } else {
                    if (value === password) {
                        setInput({ ...input, passwordConfirm: value })
                    } else {
                        setInput({ ...input, passwordConfirm: "invalid" })
                    }
                }
                break
            case "phone":
                // 숫자만 입력 가능하게
                const ReplaceVal = value.replace(/[^0-9]/g, "")
                if (ReplaceVal.length === 11) {
                    // 인증번호 전송 버튼 활성화
                    setInput({ ...input, phone: ReplaceVal, codeButton: false })
                } else {
                    // 인증번호 전송 버튼 비활성화
                    setInput({ ...input, phone: ReplaceVal, codeButton: true })
                }
                break
            case "code":
                // 인증번호 입력
                setInput({ ...input, code: value })
                console.log(value)
                break
            default:
        }
    }

    const checkbox = (type: string) => {
        // setInput({ ...input, agreeCheck: !agreeCheck })
        switch (type) {
            case "all":
                if (AllCheck) {
                    setCheckBoxes({ ...checkBoxes, AllCheck: !AllCheck, useCheck: false, infoCheck: false, marketingCheck: false })
                } else {
                    setCheckBoxes({ ...checkBoxes, AllCheck: !AllCheck, useCheck: true, infoCheck: true, marketingCheck: true })
                }
                break
            case "use":
                setCheckBoxes({ ...checkBoxes, useCheck: !useCheck })
                break
            case "info":
                setCheckBoxes({ ...checkBoxes, infoCheck: !infoCheck })
                break
            case "marketing":
                setCheckBoxes({ ...checkBoxes, marketingCheck: !marketingCheck })
                break
            default:

        }
    }

    const sendCode = () => {
        console.log("sendCode")
    }

    return (
        <div className="w-full flex justify-center px-8 py-12">
            <div className="max-w-sm w-96 flex flex-col items-center mt-12 ">
                {/*{isSubmitting && (*/}
                {/*  <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">*/}
                {/*    <Spinner />*/}
                {/*  </div>*/}
                {/*)}*/}
                <div className="border-b-2 border-b-black max-w-sm w-full">
                    <h1 className="text-large-semi uppercase mb-3 text-center items-center text-black">
                        회원가입
                    </h1>
                </div>
                <div className="items-center max-w-sm w-full mt-4">
                    <p className="text-left text-base-regular text-gray-700 mb-4">
                        기본정보
                    </p>
                </div>
                <form className="w-full flex flex-col" onSubmit={onSubmit}>
                    <div className="flex flex-col w-full gap-y-2">
                        <RegInput
                            topLabel="아이디"
                            placeholder="이메일을 입력해 주세요."
                            {...register("userID", { required: "First name is required" })}
                            autoComplete="userID"
                            errors={errors}
                            required={true}
                            onChange={(e) => validateInput(e)}
                            span="로그인 아이디로 사용할 이메일을 입력해 주세요."
                            button={{ action: sendCode, disabled: codeButton, text: "중복확인" }}
                        />
                        {userID === "invalid" && (
                            <div>Nope</div>
                        ) || userID === "valid" && (
                            <div>Yes</div>
                        )}
                        <RegInput
                            topLabel="비밀번호"
                            placeholder="비밀번호를 입력해 주세요."
                            {...register("password", {
                                required: "Password is required",
                            })}
                            type="password"
                            autoComplete="new-password"
                            errors={errors}
                            required={true}
                            onChange={(e) => validateInput(e)}
                            span="영문, 숫자, 특수문자 조합 8자리 이상"
                        />
                        {password === "invalid" && (
                            <div>Nope</div>
                        ) || password !== "null" && password !== "" && (
                            <div>Yes</div>
                        )}
                        <div>
                            <RegInput
                                topLabel="비밀번호 확인"
                                placeholder="비밀번호를 한번 더 입력해 주세요."
                                {...register("passwordConfirm", {
                                    required: "Password is required",
                                })}
                                type="password"
                                autoComplete="passwordConfirm"
                                errors={errors}
                                required={true}
                                onChange={(e) => validateInput(e)}
                            />
                            {passwordConfirm === "invalid" && (
                                <div>Nope</div>
                            ) || passwordConfirm !== "null" && passwordConfirm !== "" && (
                                <div>Yes</div>
                            )}
                        </div>
                        <RegInput
                            topLabel="이름"
                            placeholder="이름을 입력해 주세요."
                            {...register("Name", {
                                required: "Name is required",
                            })}
                            autoComplete="Name"
                            errors={errors}
                            required={true}
                        />
                        <div className="justify-between">
                            <RegInput
                                topLabel="휴대폰 인증"
                                placeholder="휴대폰 번호 (-제외)"
                                {...register("phone", {
                                    required: "Phone is required",
                                })}
                                errors={errors}
                                required={true}
                                onChange={(e) => validateInput(e)}
                                value={phone}
                                button={{ action: sendCode, disabled: codeButton, text: "인증번호 전송" }}
                            />
                            <RegInput
                                placeholder="인증번호 입력"
                                {...register("code", {
                                    required: "Phone is required",
                                })}
                                errors={errors}
                                required={true}
                                onChange={(e) => validateInput(e)}
                                value={code}
                                button={{ action: sendCode, disabled: codeButton, text: "인증번호 확인" }}
                            />
                        </div>
                        <RegInput
                            topLabel="(선택) 추천인 코드번호"
                            placeholder="추천인 코드번호"
                            {...register("recommend")}
                            errors={errors}
                            button={{ action: sendCode, disabled: codeButton, text: "중복확인" }}
                        />
                        <div className="mt-6">
                            <span className="text-[15px]">이용약관 동의</span>
                            <CheckboxWithLabel
                                name="all"
                                span="전체동의"
                                checked={AllCheck}
                                onChange={() => checkbox("all")}
                            />
                            <CheckboxWithLabel
                                span="이용약관에 동의합니다."
                                checked={useCheck}
                                required={true}
                                errors={errors}
                                {...register("use")}
                                onChange={() => checkbox("use")}
                            />
                            <CheckboxWithLabel
                                span="개인정보처리방침에 동의합니다."
                                checked={infoCheck}
                                required={true}
                                errors={errors}
                                {...register("info")}
                                onChange={() => checkbox("info")}
                            />
                            <CheckboxWithLabel
                                span="마케팅 수신에 동의합니다."
                                checked={marketingCheck}
                                {...register("marketing")}
                                required={false}
                                errors={errors}
                                onChange={() => checkbox("marketing")}
                            />
                        </div>
                    </div>
                    {authError && (
                        <div>
            <span className="text-rose-500 w-full text-small-regular">
              These credentials do not match our records
            </span>
                        </div>
                    )}
                    <button className="mt-6 h-10 w-full text-gray-01 bg-gray-09 hover:bg-gray-07 rounded">
                        가입하기
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register
