"use client"

interface CustomInputProps {
    name: string
    label?: string
    type: string
    placeholder?: string
    cn?: string
    error ?: string
    value ?: string
    disable?:boolean
    onClick ?: () => void
}

const CustomInput = ({label, name, placeholder, type, error, value, disable, onClick, cn = ""}: CustomInputProps) => {
    return (
        <div className="flex flex-col gap-y-1">
            {
                label && <label htmlFor={name} className="text-black font-semibold text-xs">{label}</label>
            }
            <input
                id={name}
                defaultValue={value}
                name={name}
                type={type}
                disabled={disable}
                onClick={onClick}
                placeholder={placeholder}
                className={`border border-gray-300 font-light h-[32px] text-[14px] rounded-lg text-black px-3 py-1
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300
                           hover:shadow-sm transition duration-200 ${cn}`}
            />
            {
                error && <p  className="text-red-800 text-[10px]">{error}</p>
            }
        </div>
    )
}

export default CustomInput