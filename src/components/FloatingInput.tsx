"use client";
import { useState } from "react";

export default function FloatingInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = true
}: {
  id: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
}) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    onChange(e);
  };

  return (
    <div className="relative z-0 w-full group">
      {/* Background glow effect */}
      <div 
        className={`
          absolute inset-0 rounded-xl transition-all duration-500
          ${isFocused || hasValue 
            ? 'bg-gradient-to-r from-[#B6FF1A]/10 to-[#B6FF1A]/5 blur-sm' 
            : 'bg-white/5 blur-none'
          }
        `}
      />
      
      {/* Input field */}
      <input
        type={type}
        name={id}
        id={id}
        required={required}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
        className={`
          relative block py-4 px-4 w-full text-base
          text-[#F2F2F2] bg-transparent
          border-2 rounded-xl
          appearance-none outline-none
          transition-all duration-300
          placeholder-transparent
          ${isFocused 
            ? 'border-[#B6FF1A]/60 shadow-lg shadow-[#B6FF1A]/20' 
            : hasValue 
              ? 'border-white/30 bg-white/5' 
              : 'border-white/20 hover:border-white/30'
          }
          group-hover:border-white/30
        `}
      />
      
      {/* Floating label */}
      <label
        htmlFor={id}
        className={`
          absolute text-sm font-medium pointer-events-none
          transition-all duration-300 ease-out
          ${isFocused || hasValue
            ? 'top-2 left-3 text-xs text-[#B6FF1A] bg-[#0F1113] px-1 rounded'
            : 'top-4 left-4 text-[#AAAAAA] text-base'
          }
        `}
      >
        {label}
      </label>

      {/* Animated underline */}
      <div 
        className={`
          absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#B6FF1A] to-[#B6FF1A]/60
          transition-all duration-300 ease-out
          ${isFocused ? 'w-full' : 'w-0'}
        `}
      />

      {/* Icon indicator */}
      <div className={`
        absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300
        ${isFocused ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
      `}>
        <div className="w-2 h-2 bg-[#B6FF1A] rounded-full animate-pulse" />
      </div>
    </div>
  )
}