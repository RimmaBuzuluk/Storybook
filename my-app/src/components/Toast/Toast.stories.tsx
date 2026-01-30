import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: "success",
    message: "Operation successful!",
    duration: 3000,
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "Something went wrong.",
    duration: 3000,
  },
};

export const Info: Story = {
  args: {
    type: "info",
    message: "Here is some information.",
    duration: 3000,
  },
};

export const LongDuration: Story = {
  args: {
    type: "info",
    message: "This will stay longer...",
    duration: 10000,
  },
};

export const ManualClose: Story = {
  args: {
    type: "info",
    message: "You can close me manually.",
    duration: 0,
    showCloseButton: true,
  },
};
