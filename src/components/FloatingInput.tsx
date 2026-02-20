// Floating Input Component
export default function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange
}: {
  id: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="relative z-0 w-full group">
      <input
        type={type}
        name={id}
        id={id}
        required
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          block py-3 px-0 w-full text-base
          text-[#F2F2F2] bg-transparent
          border-0 border-b-2 border-white/20
          appearance
          focus:border-[#B6FF1A] focus:outline-none focus:ring-0
          peer transition-all duration-300
        "
      />
      <label
        htmlFor={id}
        className=" 
          absolute text-sm text-[#AAAAAA]
          duration-300 transform
          -translate-y-6 scale-75 top-3 -z-10 origin-[0]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#B6FF1A]
          transition-all
        "
      >
        {label}
      </label>
    </div>
  )
}