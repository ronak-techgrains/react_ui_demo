import React from "react";
import { InputField } from "../component/ui/InputField";
import { enqueueSnackbar } from "notistack";
import { useDebounce } from "../utils/debounce";
import { getFont } from "@/utils/style";
import { FontType } from "@/constants/common";

const LoginPage: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showEmailError, setShowEmailError] = React.useState(false);
  const [showPasswordError, setShowPasswordError] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  function handleLogin() {
    console.log("Form submitted with:", { email, password });
    if (!email || !password) {
      setEmailError("Email is required.");
      setPasswordError("Password is required.");
      enqueueSnackbar("Both email and password are required.", {
        variant: "error",
      });
      setShowEmailError(true);
      setShowPasswordError(true);
      return;
    }

    if (!email) {
      setEmailError("Email is required.");
      enqueueSnackbar("Email is required.", {
        variant: "error",
      });
      setShowEmailError(true);
      return;
    }

    if (!password) {
      setPasswordError("Password is required.");
      enqueueSnackbar("Password is required.", {
        variant: "error",
      });
      setShowPasswordError(true);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      enqueueSnackbar("Please enter a valid email address.", {
        variant: "error",
      });
      setShowEmailError(true);
      return;
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-roboto font-bold text-gray-800">
          Log in
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <InputField
            type="email"
            value={email}
            placeholder="Email address"
            isSecureField={false}
            showClearIcon={false}
            hasError={showEmailError}
            showError={showEmailError}
            errorMessage={showEmailError ? emailError : ""}
            onChange={(value) => {
              setEmail(value);
              setShowEmailError(false); // Reset error on change
            }}
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <InputField
            type="password"
            value={password}
            placeholder="Password"
            isSecureField={true}
            showClearIcon={false}
            hasError={showPasswordError}
            onChange={(value) => {
              setPassword(value);
              setShowPasswordError(false); // Reset error on change
            }}
            showError={showPasswordError}
            errorMessage={showPasswordError ? passwordError : undefined}
          />
        </div>

        {/* Validation Logic */}
        <button
          onClick={useDebounce(() => handleLogin(), 500)}
          className={`w-full rounded-md bg-blue-500 py-3 text-white hover:bg-blue-600 transition ${getFont(
            FontType.bold
          )}`}
        >
          Log in
        </button>
        {/* Divider */}
        <div
          className={`mt-6 text-center text-sm text-gray-500 ${getFont(
            FontType.normal
          )}`}
        >
          or,{" "}
          <button
            onClick={() => console.log("Sign up clicked")}
            className={`font-medium text-blue-500 hover:underline bg-transparent border-none cursor-pointer ${getFont(
              FontType.bold
            )}`}
          >
            sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
