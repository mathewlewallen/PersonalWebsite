import { AiOutlineControl } from 'react-icons/ai';
import { SanitizedThemeConfig } from '@cc/interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '@cc/constants';
import { skeleton } from '@cc/lib/utils';
import { useEffect, useState } from 'react';

/**
 * Renders a theme changer component with a toggle button for light/dark/system.
 *
 * @param {Object} props - The props object.
 * @param {string} props.theme - The current theme.
 * @param {function} props.setTheme - A function to set the theme.
 * @param {boolean} props.loading - Whether the component is in a loading state.
 * @param {SanitizedThemeConfig} props.themeConfig - The theme configuration object.
 * @return {JSX.Element} The rendered theme changer component.
 */
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
 const [mounted, setMounted] = useState(false);

useEffect(() => {
  if (typeof window !== 'undefined') {
    setMounted(true);
  }
}, []);

if (!mounted) return null;

  const cycleTheme = () => {
    const order = ['light', 'dark', 'system'];
    const currentIndex = order.indexOf(theme);
    const nextTheme = order[(currentIndex + 1) % order.length];

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem(LOCAL_STORAGE_KEY_NAME, nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row items-center space-x-4 flex pl-6 pr-2 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({
                widthCls: 'w-20',
                heightCls: 'h-8',
                className: 'mb-1',
              })
            ) : (
              <span className="text-base-content opacity-70">Theme</span>
            )}
          </h5>
          <span className="text-base-content text-opacity-40 capitalize text-sm">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : theme === themeConfig.defaultTheme
              ? 'Default'
              : theme}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({
              widthCls: 'w-14 md:w-28',
              heightCls: 'h-10',
              className: 'mr-6',
            })
          ) : (
            <div
              title="Toggle Theme"
              className="tooltip tooltip-left"
              data-tip="Toggle Theme"
            >
              <button
                className="btn btn-ghost m-1 normal-case opacity-50 text-base-content"
                onClick={cycleTheme}
              >
                <AiOutlineControl className="inline-block w-5 h-5 stroke-current md:mr-2" />
                <span className="hidden md:inline capitalize">
                  {theme === 'system'
                    ? 'System'
                    : theme === themeConfig.defaultTheme
                    ? 'Default'
                    : theme}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
