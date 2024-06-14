import { Menu, MenuButton, MenuItems, Transition } from "@headlessui/react";
import { HomeIcon, Menu as MenuIcon, VenetianMask } from "lucide-react";
import { Fragment } from "react/jsx-runtime";
import { DropdownMenuItem } from "./DropdownMenuItem";

const links = [
	{ href: "/", label: "Home", icon: <HomeIcon size={18} /> },
	{ href: "/about", label: "About me", icon: <VenetianMask size={18} /> },
];
const currentPath = window.location.pathname;

export function DropdownMenu() {
	return (
		<Menu as="div" className="relative inline-flex text-left">
			<div className="inline-flex items-center self-center rounded-md">
				<MenuButton className="rounded-md p-1 bg-purple-300 dark:bg-black dark:text-white shadow-sm ring-1 ring-black dark:ring-purple-300 transition-all duration-100 font-medium hover:bg-purple-400 dark:hover:bg-purple-300 focus:ring-inset focus:ring-offset-purple-100">
					<MenuIcon className="h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-10 active:-scale-100 hover:text-white dark:text-white dark:hover:text-black" />
				</MenuButton>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-in-out duration-300"
				enterFrom="transfrom opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-80"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transfrom opacityo-0 scale-95"
			>
				<MenuItems
					anchor="bottom end"
					className="w-36 mt-2 origin-top-right rounded-md bg-white/85 dark:bg-black/90 backdrop-blur-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-50"
				>
					<div className="">
						{links.map(({ href, label, icon: Icon }, index) => {
							const isActive = currentPath === href;

							const itemClasses = `
							text-sm text-black dark:text-purple-300 
							hover:bg-purple-300/30 dark:hover:text-white 
							transition-all duration-300
							${isActive ? "bg-purple-300/20 font-bold" : ""}
							${index % 2 !== 0 ? "rounded-b-md" : "rounded-t-md"}
							`;

							return (
								<DropdownMenuItem
									key={index}
									href={href}
									label={label}
									icon={Icon}
									className={itemClasses}
								/>
							);
						})}
					</div>
				</MenuItems>
			</Transition>
		</Menu>
	);
}
