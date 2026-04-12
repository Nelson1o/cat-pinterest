import { NavLink } from "react-router";

import type { Tabs } from "@/shared/types";

import styles from "./styles.module.scss";

type LinkProps = Tabs;

export const Link = ({ link, title }: LinkProps) => (
  <NavLink
    to={link}
    className={({ isActive }) =>
      isActive
        ? `${styles.link} ${styles.active}`
        : `${styles.link} ${styles.notActive}`
    }
  >
    {title}
  </NavLink>
);
