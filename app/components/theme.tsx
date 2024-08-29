"use client";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { IconSun, IconMoon } from "@tabler/icons-react";

type ThemeType = "light" | "dark";

const setBodyTheme = (theme: ThemeType) => {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
};

const getLocalStoragetheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) return theme as ThemeType;

  const isDarkMatch = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return isDarkMatch ? "dark" : "light";
};

export const Theme = () => {
  const storedTheme = useMemo(() => getLocalStoragetheme(), []);

  const [theme, setTheme] = useState<ThemeType>(storedTheme);

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
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const handleClick = () =>
    setTheme((theme) => {
      const newTheme = theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);

      return newTheme;
    });

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
