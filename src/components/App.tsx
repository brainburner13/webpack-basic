import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import avatar from "@/assets/avatar.png";
import UserAvatar from "@/assets/user-avatar.svg";

import styles from "./App.module.scss";

const testTs = (param: number) => {
  console.log(param);
};

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  testTs(123);

  if (__PLATFORM__ === "desctop") {
    return <div>desctop</div>;
  }

  if (__PLATFORM__ === "mobile") {
    return <div>mobile</div>;
  }

  return (
    <div>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/shop">Shop</Link>
      <div>
        <img width={100} height={100} src={avatar} />
        <UserAvatar width={100} height={100} className={styles.icon} />
      </div>
      <h1 className={styles.value}>{count}</h1>
      <button className={styles.button} onClick={increment}>
        increment
      </button>
      <Outlet />
    </div>
  );
};

export default App;
