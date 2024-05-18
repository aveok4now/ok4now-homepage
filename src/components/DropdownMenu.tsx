import { HomeIcon, Menu, VenetianMask } from "lucide-react";
import { useState } from "react";

export function DropdownMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ href: "/", label: "Home page", icon: HomeIcon },
		{ href: "/about", label: "About me",  icon: VenetianMask },
	];

	return (
		<div className="relative inline-flex">
			<div className="inline-flex items-center self-center rounded-md">
				<button
					type="button"
					className="rounded-md p-1 bg-purple-300 dark:bg-black dark:text-white shadow-sm ring-1 ring-inset ring-black dark:ring-purple-300 transition-all duration-100"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
					onClick={() => setIsOpen(!isOpen)}
				>
					<Menu className="h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-10 active:-scale-100" />
				</button>
			</div>

			{isOpen && (
				<div
					className="absolute right-0 z-10 mt-9 w-32 origin-top-right rounded-md bg-white/90 dark:bg-black/90 backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-300"
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabIndex={-1}
				>
					<div role="none" className="">
						{links.map((link) => {
							const Icon = link.icon;
							return (
								<a
									key={link.href}
									href={link.href}		
									className="text-black font-regular dark:text-purple-300 px-4 py-2 text-sm cursor-pointer hover:bg-purple-300/30 rounded-md flex items-center text-center gap-x-1.5"
									role="menuitem"
									tabIndex={-1}
								>
									<Icon size={12} className="text-black/50 dark:text-white"/>
									{link.label}
								</a>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
