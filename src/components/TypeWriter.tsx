import React from "@astrojs/react";
import type { ReactNode } from "react";
import { Typewriter } from "react-simple-typewriter";

interface Props {
	words: string[];
	typeSpeed?: number;
	deleteSpeed?: number;
	delaySpeed?: number;
	loop?: number | boolean;
	cursor?: boolean;
	cursorStyle?: ReactNode;
	cursorBlinking?: boolean;
}

export default function TypeWriter({
	words,
	typeSpeed = 80,
	deleteSpeed = 50,
	delaySpeed = 1500,
	loop,
	cursor = false,
	cursorStyle,
	cursorBlinking = true,
}: Props) {
	return (
		<div>
			<Typewriter
				words={words}
				typeSpeed={typeSpeed}
				deleteSpeed={deleteSpeed}
				delaySpeed={delaySpeed}
				loop={loop}
				cursor={cursor}
				cursorStyle={cursorStyle}
				cursorBlinking={cursorBlinking}
			/>
		</div>
	);
}
