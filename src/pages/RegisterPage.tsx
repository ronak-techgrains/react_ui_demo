import { InputField } from "@/component/ui/InputField";
import { FontType } from "@/constants/common";
import { useDebounce } from "@/utils/debounce";
import { getFont } from "@/utils/style";
import { enqueueSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage: React.FC = () => {
  const {
    watch,
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<FormData>();

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with:", data);

    const fieldsToValidate: (keyof FormData)[] = [
      "name",
      "email",
      "phone",
      "password",
      "confirmPassword",
    ];
    // Validate all fields
    const results = await Promise.all(
      fieldsToValidate.map((field) => trigger(field))
    );
    // If any field is invalid, stop the submission
    if (results.includes(false)) {
      console.log("Validation failed.");
      return;
    }

    // You can add your login API call here
    enqueueSnackbar("Register successful!", { variant: "success" });

    // Reset form after submit if needed
    reset();

    navigate("/home", { replace: false });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-roboto font-bold text-gray-800">
          Register
        </h2>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {/* Name Input */}
          <div className="mb-4">
            <InputField
              type="name"
              placeholder="Name"
              isSecureField={false}
              showClearIcon={false}
              hasError={errors.name && isSubmitted}
              showError={errors.name && isSubmitted}
              errorMessage={errors.name?.message}
              {...register("name", {
                required: { value: true, message: "Name is required" },
                pattern: {
                  value: /^[a-zA-Z]+ [a-zA-Z]+$/,
                  message:
                    "Name must contain first name and last name separated by a space",
                },
              })}
              onChange={(value) => register("name").onChange({ target: value })}
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <InputField
              type="email"
              placeholder="Email address"
              isSecureField={false}
              showClearIcon={false}
              hasError={errors.email && isSubmitted}
              showError={errors.email && isSubmitted}
              errorMessage={errors.email?.message}
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
              onChange={(value) =>
                register("email").onChange({ target: value })
              }
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <InputField
              type="number"
              placeholder="Phone number"
              isSecureField={false}
              showClearIcon={false}
              hasError={errors.phone && isSubmitted}
              showError={errors.phone && isSubmitted}
              errorMessage={errors.phone?.message}
              {...register("phone", {
                required: { value: true, message: "Phone is required" },
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be exactly 10 digits",
                },
              })}
              onChange={(value) =>
                register("phone").onChange({ target: value })
              }
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <InputField
              type="password"
              placeholder="Password"
              isSecureField={true}
              showClearIcon={false}
              hasError={errors.password && isSubmitted}
              showError={errors.password && isSubmitted}
              errorMessage={errors.password?.message}
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              onChange={(value) =>
                register("password").onChange({ target: value })
              }
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <InputField
              type="password"
              placeholder="Confirm Password"
              isSecureField={true}
              showClearIcon={false}
              hasError={errors.confirmPassword && isSubmitted}
              showError={errors.confirmPassword && isSubmitted}
              errorMessage={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Confirm Password is required",
                },
                minLength: {
                  value: 6,
                  message:
                    "Confirm Password must be at least 6 characters long",
                },
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              onChange={(value) =>
                register("confirmPassword").onChange({ target: value })
              }
            />
          </div>
          <button
            onSubmit={useDebounce(handleSubmit(onSubmit), 500)}
            className={`w-full rounded-md bg-blue-500 py-3 text-white hover:bg-blue-600 transition ${getFont(
              FontType.bold
            )}`}
          >
            Register
          </button>

          {/* Submit Button */}
          <div className="mb-4 mt-5">
            <button
              type="button"
              onClick={() => window.history.back()}
              className={`w-full rounded-md bg-gray-500 py-3 text-white hover:bg-gray-600 transition ${getFont(
                FontType.bold
              )}`}
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
