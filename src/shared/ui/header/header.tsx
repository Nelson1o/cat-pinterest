import { Link } from "./ui";
import { TABS } from "@/shared/constants";

import styles from "./styles.module.scss";

export const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.wrapper}>
        {TABS.map((tab) => (
          <Link key={tab.title} {...tab} />
        ))}
      </div>
    </div>
  </header>
);
