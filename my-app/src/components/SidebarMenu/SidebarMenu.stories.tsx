import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMenu } from "./SidebarMenu";
import { useArgs } from "storybook/internal/preview-api";
import "./SidebarMenu.css";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  argTypes: {
    isOpen: { control: "boolean" },
    items: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof SidebarMenu>;

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
          className="sidebarMenu-openButton"
          onClick={() => updateArgs({ isOpen: true })}
        >
          Open Menu
        </button>

        <SidebarMenu
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
          className="sidebarMenu-openButton"
          onClick={() => updateArgs({ isOpen: true })}
        >
          Open Menu
        </button>

        <SidebarMenu
          {...args}
          isOpen={isOpen}
          onClose={() => updateArgs({ isOpen: false })}
        />
      </>
    );
  },
};
