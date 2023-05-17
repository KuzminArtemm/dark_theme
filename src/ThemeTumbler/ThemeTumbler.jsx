import { useCallback, useContext } from "react";
import "./tumbler.css";
import { userContext } from "../App";

const ThemeTumbler = () => {
  const { theme, setTheme } = useContext(userContext);
  const handleClick = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);
  return (
    <div
      onClick={handleClick}
      className="tumbler"
      style={{
        backgroundImage: `url(${
          theme === "light"
            ? "https://avatars.mds.yandex.net/i?id=16c54cfe59991959ac908e5a27c581e3317c98d1-8176266-images-thumbs&n=13"
            : "https://avatars.mds.yandex.net/i?id=40030c58a6bb9ff8a24f6b91839c356b8cdce021-7555069-images-thumbs&n=13"
        })`,
      }}
    />
  );
};

export default ThemeTumbler;
