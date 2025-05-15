"use client"

interface CustomSelectProps {
    name: string
    label?: string
    cn?: string
    options :{
        name: string
        id: string
        adminId: string
    }[]
}

const CustomSelect = ({name, label , cn, options} : CustomSelectProps) => {
    return (
        <div className="flex flex-col gap-y-1">
            {
                label && <label htmlFor={name} className="text-black font-semibold text-xs">{label}</label>
            }
            <select
                id={name}
                name={name}
                className={` border border-gray-5 p-2 text-black rounded-md px-3 py-1
                           focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-300
                           hover:shadow-sm transition duration-200 ${cn}`}
                required={true}
            >
                {
                    options.map((o) => (
                        <option key={o.id} value={o.value}>{o.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CustomSelect