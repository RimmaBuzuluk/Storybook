import { useEffect, useRef, useState } from "react";
import "./SidebarMenu.css";
import type React from "react";

export type MenuItems = {
  label: string;
  submenu?: MenuItems[];
};

type SidebarMenuProps = {
  items: MenuItems[];
  isOpen: boolean;
  onClose?: () => void;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  items,
  onClose,
  isOpen,
}) => {
  const [openSubmenus, setOpenSubmenus] = useState<number[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <>
      <div className={`sidebarMenu-overlay ${isOpen ? "visible" : ""}`}> </div>
      <div className={`sidebarMenu-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div
                onClick={() => item.submenu && toggleSubmenu(index)}
                className={`menu-item ${item.submenu ? "has-submenu" : ""}`}
              >
                {item.label}
              </div>
              {item.submenu && openSubmenus.includes(index) && (
                <ul className="submenu">
                  {item.submenu.map((sub, subIndex) => (
                    <li key={subIndex} className="submenu-item">
                      {sub.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
