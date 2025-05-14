"use client"

interface CustomInputProps {
    name : string
    label ?: string
    type : "email"
    placeholder?: string
    cn ?: string
}

const CustomInput = ({label, name, placeholder, type, cn} : CustomInputProps) => {
    return <div className={"flex flex-col gap-y-1"}>
        {
            label && <label htmlFor={name} className={"text-black font-semibold text-xs"}>{label}</label>
        }
        <input id={name} name={name} type={type} placeholder={placeholder} className={`border-[1px] border-gray-5 rounded-[8px] text-black  pl-[0.9em] pr-[0.9em] pt-1 pb-1 hover:shadow-xs transition duration-200 ${cn}`} />
    </div>
}

export default CustomInput