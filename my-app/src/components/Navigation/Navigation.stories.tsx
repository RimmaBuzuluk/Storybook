import type { Meta, StoryObj } from '@storybook/react';
import { Navigation, type MenuItems } from './Navigation';
import { useEffect, useState } from 'react';
import './Navigation.css'

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  argTypes: {
    isOpen: { control: 'boolean' },
    items: { control: 'object' },  
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

const Template = (args: { items: MenuItems[]; isOpen: boolean }) => {
  const [open, setOpen] = useState(args.isOpen);

  useEffect(() => {
    setOpen(args.isOpen);
  }, [args.isOpen]);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <button onClick={handleOpen} className='navigation-openButton'>
        Open Menu
      </button>
      <Navigation {...args} isOpen={open} onClose={handleClose} />
    </>
  );
};




export const OneLevel: Story = {
  render: (args) => <Template {...args} />,
  args: {
    isOpen: false, 
    items: [
      { label: 'Home' },
      { label: 'About' },
      { label: 'Contact' },
    ],
  },
};

export const TwoLevel: Story = {
  render: (args) => <Template {...args} />,
  args: {
    isOpen: false,
    items: [
      { label: 'Home' },
      {
        label: 'Services',
        submenu: [
          { label: 'Web Development' },
          { label: 'Mobile Apps' },
        ],
      },
      { label: 'Contact' },
    ],
  },
};

