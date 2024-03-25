import { Link } from "../components/Link";
import { Section } from "../components/Section";

export function Outro() {
    return (
        <Section>
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white">
                        Goodbye For Now 👋
                    </h2>
                    <p>
                        Thanks again for the opportunity to apply for the
                        Tailwind Labs team. I'm looking forward to the
                        possibility of working with you all and contributing to
                        the amazing work you are doing.
                    </p>

                    <p>
                        However I can't leave without mentioning some 🤓 things
                        about me.
                    </p>
                    <ul className="list-disc ml-4">
                        <li>I have been to three different WrestleManias</li>
                        <li>
                            I have over 450{" "}
                            <Link href="https://fortnitetracker.com/profile/gamepad/mynameiscody0789">
                                {" "}
                                Fortnite victory royales
                            </Link>
                        </li>
                        <li>
                            Lost is the greatest TV show of all time and I will
                            fight you on that
                        </li>
                    </ul>
                </div>
                <div className="flex-shrink-0 flex gap-6 items-center justify-center md:gap-2 md:text-center md:flex-col">
                    <img
                        src="/headshot.png"
                        alt="Cody Tooker"
                        className="rounded-full size-32 md:size-48"
                    />
                    <div className="flex flex-col text-xs gap-2">
                        <Link href="https://www.linkedin.com/in/cody-tooker/">
                            LinkedIn
                        </Link>
                        <Link href="https://github.com/codytooker">Github</Link>
                        <Link href="https://github.com/codytooker/TailwindApp">
                            This App
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    );
}
