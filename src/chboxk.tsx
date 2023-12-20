import { ErrorMessage } from "@hookform/error-message"
import clsx from "clsx"
import React, { useImperativeHandle, useState } from "react"
import { get } from "react-hook-form"
import Input from "@components/common/input"

type InputProps = Omit<
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    "placeholder"
> & {
    label?: string
    errors?: Record<string, unknown>
    touched?: Record<string, unknown>
    name: string
    topLabel?: string
    placeholder?: string
    span?: string
    button?: any
}

type CheckboxProps = {
    name: string
    errors?: Record<string, unknown>
    checked?: boolean
    onChange?: () => void
    label?: string
    span?: string
    required?:boolean
}

const RegInput = React.forwardRef<HTMLInputElement, InputProps>(
    (
        { placeholder, span, button, type, name, label, errors, touched, required, topLabel, ...props },
        ref
    ) => {
        const inputRef = React.useRef<HTMLInputElement>(null)

        useImperativeHandle(ref, () => inputRef.current!)

        const hasError = get(errors, name) && get(touched, name)

        return (
            <div className="flex flex-col w-full mt-2">
                {topLabel && (
                    <label className="mb-2 text-[11px] text-gray-500">{topLabel} {required && ("*")}</label>
                )}
                <div className="flex relative z-0 w-full txt-compact-medium">
                    <Input
                        type={type}
                        name={name}
                        aria-invalid={hasError}
                        placeholder={placeholder}
                        className={clsx(
                            "pb-1 block w-full h-11 px-4 mt-0 bg-ui-bg-field border rounded-md appearance-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover placeholder-gray-500 text-[13px]",
                            {
                                "border-rose-500 focus:border-rose-500": hasError,
                            }
                        )}
                        {...props}
                        ref={inputRef}
                    />
                    {button && (
                        <button
                            type="button"
                            onClick={button.action}
                            disabled={button.disabled}
                            className="w-1/3 ml-2 h-11 mt-2 text-[11px] text-gray-01 bg-gray-09 hover:bg-gray-07 rounded"
                        >
                            {button.text}
                        </button>
                    )}
                </div>
                {span && (
                    <span className="mt-2 text-[11px] text-black">{span}</span>
                )}
                {hasError && (
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => {
                            return (
                                <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                                    <span>{message}</span>
                                </div>
                            )
                        }}
                    />
                )}
            </div>
        )
    }
)
// eslint-disable-next-line react/display-name
const CheckboxWithLabel= React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ name, checked, onChange, span, label, required, errors, ...props },
     ref
    ) => {
        const inputRef = React.useRef<HTMLInputElement>(null)

        useImperativeHandle(ref, () => inputRef.current!)

        const hasError = get(errors, name)

        return (
            <div className="flex items-center space-x-2 mt-4">
                <input
                    className="text-base-regular flex items-center gap-x-2"
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    {...props}
                    ref={inputRef}
                />
                {span && <span className="text-base-regular">{required===true && ("(필수) ") || required===false && ("(선택) ")} {span}</span>}
                {label && <label htmlFor="checkbox">{label}</label>}
                {hasError && (
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => {
                            return (
                                <div className="pt-1 pl-2 text-rose-500 text-xsmall-regular">
                                    <span>{message}</span>
                                </div>
                            )
                        }}
                    />
                )}
            </div>
        )
    }
)


RegInput.displayName = "Input"
CheckboxWithLabel.displayName = "Checkbox"
export default RegInput
export { CheckboxWithLabel }
