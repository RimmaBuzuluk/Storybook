import { useForm, Controller } from "react-hook-form";
import { Input } from "./Input";
import type { Meta, StoryObj } from "@storybook/react-vite";
import "./Input.css";

const meta: Meta<typeof Input> = {
  title: "Components/Input/InputWithForm",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

type FormValues = {
  username: string;
  password: string;
};

export const DefaultForm: Story = {
  render: () => {
    const { handleSubmit, control } = useForm<FormValues>({
      defaultValues: { username: "", password: "" },
    });

    const onSubmit = (data: FormValues) => {
      console.log("Form submitted:", data);
    };

    return (
      <div className="form-wrapper">
        <h2 className="form-title">Sign In 💖</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          <label className="form-label">Username</label>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Enter username" clearable />
            )}
          />

          <label className="form-label">Password</label>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                placeholder="Enter password"
                clearable
              />
            )}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  },
};
