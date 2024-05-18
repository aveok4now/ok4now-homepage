import { Menu } from "lucide-react";

export function DropdownMenu() {
	return (
		<div className="inline-flex">
		<div className="inline-flex items-center self-center rounded-md">
			<button
				type="button"
				className="rounded-md p-1 bg-purple-300 dark:bg-black dark:text-white shadow-sm ring-1 ring-inset ring-black dark:ring-purple-300 transition-all duration-100"
				id="menu-button"
				aria-expanded="true"
				aria-haspopup="true"
			>
				<Menu className="h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-10 active:-scale-100" />
			</button>
		</div>
		</div>
	);
}
