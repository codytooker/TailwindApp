import { useState } from "react";
import { Globe } from "../components/Globe";
import { Section } from "../components/Section";

export function Intro() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Section>
            <h1 className="text-2xl font-bold text-white">
                Hey Tailwind Team 👋
            </h1>
            <div className="md:flex items-center justify-between gap-4">
                <p className="md:w-3/4">
                    Before we get started let's get this timezone issue out of
                    the way. I'm from Dallas Texas (CST). But if you think about
                    it, every timezone is between UTC-5 and UTC+1, it all just
                    depends on how{" "}
                    <span
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="border-b border-sky-500 hover:border-b-2 cursor-pointer"
                    >
                        you spin it.
                    </span>{" "}
                    So let's just agree that I'm in the right timezone and move
                    on. 😂
                </p>
                <div className="md:flex-shrink-0 flex justify-center mt-4 md:mt-0">
                    <Globe isReversed={isHovering} />
                </div>
            </div>
        </Section>
    );
}
