"use client";

import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

import { IconSun, IconMoon } from "@tabler/icons-react";

type ThemeSwitchType = "light" | "dark";

const setBodyTheme = (theme: ThemeSwitchType) => {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
};

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState<ThemeSwitchType>("light");

  useEffect(() => {
    const handleThemeChange = ({ matches }: MediaQueryListEvent) => {
      const newTheme = matches ? "dark" : "light";

      setBodyTheme(newTheme);
      setTheme(newTheme);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleThemeChange);
  }, []);

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) return setTheme(theme as ThemeSwitchType);

    const isDarkMatch = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(isDarkMatch ? "dark" : "light");
  }, []);

  useLayoutEffect(() => {
    setBodyTheme(theme);
  }, [theme]);

  const handleClick = useCallback(
    () =>
      setTheme((theme) => {
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);

        return newTheme;
      }),
    []
  );

  return (
    <motion.button
      onClick={handleClick}
      className="absolute right-4 top-4"
      whileHover={{ scale: 0.8 }}
      whileTap={{ scale: 1.1 }}
    >
      {theme === "light" ? <IconMoon /> : <IconSun color="white" />}
    </motion.button>
  );
};
