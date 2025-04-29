import * as React from "react";
import { Eye, EyeOff, XCircle } from "lucide-react";

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isSecureField?: boolean;
  showClearIcon?: boolean;
  hasError?: boolean;
  showError?: boolean;
  errorMessage?: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      type = "text",
      placeholder = "",
      isSecureField = false,
      showClearIcon = false,
      hasError = false,
      showError = false,
      errorMessage = "",
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const isPasswordField = type === "password";

    return (
      <div className="relative mb-4">
        <input
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          ref={ref}
          className={`w-full rounded-md border px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 ${
            hasError
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          }`}
          {...rest}
        />

        {/* Show/Hide Password Toggle */}
        {isSecureField && isPasswordField && (
            <button
            type="button"
            className={`absolute ${
              showClearIcon ? "right-10" : "right-3"
            } ${ hasError ? "top-1/3" : "top-1/2" } transform -translate-y-1/2 flex items-center justify-center text-gray-500 hover:text-gray-700`}
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
        {showClearIcon && rest.value && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => {
              if (rest.onChange) {
                const event = {
                  target: { value: "" },
                } as unknown as React.ChangeEvent<HTMLInputElement>;
                rest.onChange(event);
              }
            }}
          >
            <XCircle className="h-5 w-5" />
          </button>
        )}

        {/* Inline Error */}
        {showError && errorMessage && (
          <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";
