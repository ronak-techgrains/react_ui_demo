const customTheme = {
  component: {
    defaultProps: {
      color: "blue",
      size: "md",
      variant: "filled",
      disabled: false,
    },
    valid: {
      colors: ["blue", "red", "green", "yellow", "purple", "gray"],
      sizes: ["sm", "md", "lg"],
      variants: ["filled", "outlined", "text"],
    },
    styles: {
      base: "inline-flex items-center justify-center font-medium rounded-md focus:outline-none transition-all",

      font: {
        default: "font-roboto",
        bold: "font-bold",
        semibold: "font-semibold",
        medium: "font-medium",
        normal: "font-normal",
        light: "font-light",
      },

      sizes: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
      },

      variants: {
        filled: {
          blue: "bg-blue-500 text-white hover:bg-blue-600",
          red: "bg-red-500 text-white hover:bg-red-600",
          green: "bg-green-500 text-white hover:bg-green-600",
        },
        outlined: {
          blue: "border border-blue-500 text-blue-500 hover:bg-blue-50",
          red: "border border-red-500 text-red-500 hover:bg-red-50",
          green: "border border-green-500 text-green-500 hover:bg-green-50",
        },
        text: {
          blue: "text-blue-500 hover:underline",
          red: "text-red-500 hover:underline",
          green: "text-green-500 hover:underline",
        },
      },

      disabled: "opacity-50 pointer-events-none",
    },
  },
};

export default customTheme;
