import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Text input",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password input",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number input",
  },
};

export const ClearableText: Story = {
  args: {
    type: "text",
    placeholder: "Clearable input",
    clearable: true,
  },
};

export const ClearablePassword: Story = {
  args: {
    type: "password",
    placeholder: "Clearable password",
    clearable: true,
  },
};
