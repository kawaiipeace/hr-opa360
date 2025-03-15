import { UserPlus, UserCheck, ListTodo } from "lucide-react";

export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu? : MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void;
}

export const menusConfig = {
  mainNav: [
      {
      title: "blank",
      icon: UserPlus,
      href: "/blank",
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "blank",
        icon: UserPlus,
        href: "/blank",
      },
    ],
    classic: [
       {
        isHeader: true,
        title: "ระบบรับสมัครพนักงานดีเด่น",
      },
      {
        title: "สมัครเป็น Candidate",
        icon: UserPlus,
        href: "/register",
      },
      {
        title: "ตรวจสอบการสมัคร",
        icon: UserCheck,
        href: "#",
      },
      {
       isHeader: true,
       title: "ระบบประเมินพนักงานดีเด่น 360",
      },
      {
        title: "ประเมินพนักงาน",
        icon: ListTodo,
        href: "/evaluate",
      },
    ],
  },
};


export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]