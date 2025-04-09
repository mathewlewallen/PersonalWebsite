"use client";

import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@ml/components/icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Theme toggle button with animation.
 */
function ThemeChanger() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "sun" : "moon"}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.25 }}
          className="absolute"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
}

/**
 * Header component with name, socials, and theme toggle.
 */
export default function Header() {
  return (
    <header className="w-full px-4 py-3 shadow-sm sticky top-0 z-50 bg-base-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* LEFT: Social Links */}
        <div className="flex items-center gap-4 text-base-content">
          <Link
            href="https://github.com/mathewlewallen"
            target="_blank"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5 hover:opacity-80 transition" />
          </Link>
          <Link
            href="https://linkedin.com/in/mathewlewallen"
            target="_blank"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5 hover:opacity-80 transition" />
          </Link>
        </div>

        {/* CENTER: Name */}
        <div className="text-lg font-semibold text-center tracking-wide">
          <Link href="/" className="hover:underline">
            Mathew Lewallen
          </Link>
        </div>

        {/* RIGHT: Nav + Theme */}
        <div className="flex items-center gap-4">
          <Link
            href="/about"
            className="text-sm text-base-content hover:underline"
          >
            About
          </Link>
          <ThemeChanger />
        </div>
      </div>
    </header>
  );
}
