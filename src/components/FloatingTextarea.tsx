// Floating Textarea Component
export default function FloatingTextarea({
  id,
  label,
  value,
  onChange
}: {
  id: string
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return (
    <div className="relative z-0 w-full group">
      <textarea
        name={id}
        id={id}
        rows={4}
        required
        value={value}
        onChange={onChange}
        placeholder=" "
        className="
          block py-3 px-0 w-full text-base
          text-[#F2F2F2] bg-transparent
          border-0 border-b-2 border-white/20
          appearance-none
          focus:border-[#B6FF1A] focus:outline-none focus:ring-0
          peer transition-all duration-300 resize-none
        "
      ></textarea>
      <label
        htmlFor={id}
        className="
          absolute text-base text-[#AAAAAA]
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
