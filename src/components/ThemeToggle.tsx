import * as React from "react";

export function ThemeToggle() {
	const [theme, setThemeState] = React.useState<
		"theme-light" | "dark" | "system"
	>("theme-light");

	React.useEffect(() => {
		const isDarkMode = document.documentElement.classList.contains("dark");
		setThemeState(isDarkMode ? "dark" : "theme-light");
	}, []);

	React.useEffect(() => {
		const isDark =
			theme === "dark" ||
			(theme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches);
		document.documentElement.classList[isDark ? "add" : "remove"]("dark");
	}, [theme]);

	return (
		<>
			<span  onClick={() => setThemeState("theme-light")} className="cursor-pointer">Light</span>
			<span onClick={() => setThemeState("dark")} className="cursor-pointer">Dark</span>
			<span onClick={() => setThemeState("system")} className="cursor-pointer">System</span>
		</>
	);
}
