import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation } from "./Navigation";
import { useArgs } from "storybook/internal/preview-api";
import "./Navigation.css";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  argTypes: {
    isOpen: { control: "boolean" },
    items: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const OneLevel: Story = {
  args: {
    isOpen: false,
    items: [{ label: "Home" }, { label: "About" }, { label: "Contact" }],
  },

  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    return (
      <>
        <button
          className="navigation-openButton"
          onClick={() => updateArgs({ isOpen: true })}
        >
          Open Menu
        </button>

        <Navigation
          {...args}
          isOpen={isOpen}
          onClose={() => updateArgs({ isOpen: false })}
        />
      </>
    );
  },
};

export const TwoLevel: Story = {
  args: {
    isOpen: false,
    items: [
      { label: "Home" },
      {
        label: "Services",
        submenu: [{ label: "Web Development" }, { label: "Mobile Apps" }],
      },
      { label: "Contact" },
    ],
  },

  render: (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    return (
      <>
        <button
          className="navigation-openButton"
          onClick={() => updateArgs({ isOpen: true })}
        >
          Open Menu
        </button>

        <Navigation
          {...args}
          isOpen={isOpen}
          onClose={() => updateArgs({ isOpen: false })}
        />
      </>
    );
  },
};
