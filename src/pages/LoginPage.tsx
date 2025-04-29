import { useForm } from "react-hook-form";
import { InputField } from "../component/ui/InputField";
import { enqueueSnackbar } from "notistack";
import { useDebounce } from "@/utils/debounce";
import { getFont } from "@/utils/style";
import { FontType } from "@/constants/common";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitted },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with:", data);

    const fieldsToValidate: (keyof FormData)[] = ["email", "password"];
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
    enqueueSnackbar("Login successful!", { variant: "success" });

    // Reset form after submit if needed
    reset();

    navigate("/register", { replace: false });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-roboto font-bold text-gray-800">
          Log in
        </h2>

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {/* Email */}
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

          {/* Password */}
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

          {/* Submit Button */}
          <button
            onSubmit={useDebounce(handleSubmit(onSubmit), 500)}
            className={`w-full rounded-md bg-blue-500 py-3 text-white hover:bg-blue-600 transition ${getFont(
              FontType.bold
            )}`}
          >
            Log in
          </button>
        </form>

        {/* Divider */}
        <div
          className={`mt-6 text-center text-sm text-gray-500 ${getFont(
            FontType.normal
          )}`}
        >
          or,{" "}
          <button
            type="button"
            onClick={async () => {
              navigate("/register", { replace: false });
            }}
            className={`font-medium text-blue-500 hover:underline bg-transparent border-none cursor-pointer ${getFont(
              FontType.bold
            )}`}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
