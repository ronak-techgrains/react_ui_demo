import * as React from "react";
import { Eye, EyeOff, XCircle } from "lucide-react"; // using lucide icons (you already have!)

interface InputFieldProps {
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  isSecureField?: boolean;
  showClearIcon?: boolean;
  hasError?: boolean;
  showError?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder = "",
  value = "",
  isSecureField = false,
  showClearIcon = false,
  hasError = false,
  showError = false,
  errorMessage = "",
  onChange,
}) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    onChange?.("");
  };

  const isPasswordField = type === "password";

  return (
    <div className="relative mb-4">
      <input
        type={isPasswordField && showPassword ? "text" : type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className={`w-full rounded-md border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 ${
          hasError
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        }`}
      />

      {/* Show/Hide Password Toggle */}
      {inputValue && isSecureField && isPasswordField && (
        <button
          type="button"
          className={`absolute ${
            showClearIcon && inputValue ? "right-10" : "right-3"
          } top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700`}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      )}

      {/* Clear Icon */}
      {showClearIcon && inputValue && (
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          onClick={handleClear}
        >
          <XCircle className="h-5 w-5" />
        </button>
      )}

      {/* Inline Error */}
      {showError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};
