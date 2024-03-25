import { Link } from "../components/Link";
import { Section } from "../components/Section";

export function Bio() {
    return (
        <Section>
            <h2 className="text-xl font-bold text-white">Who Am I?</h2>
            <p>
                Hi, My name is Cody Tooker. I'm a software engineer with a
                passion for building user-friendly applications. I'm currently
                working at a startup in the healthcare industry where I have
                been for 5 years where I have successfully introduced the team
                to all the awesome tools created by the Tailwind Labs team.
            </p>

            <p>
                After seeing the tweet about the job openeings I knew I had to
                apply. Everything the team has created has been a complete game
                changer for me and my team, and I would love to be a part of the
                amazing work you all are doing.
            </p>

            <h2 className="text-xl font-bold text-white">What do I do?</h2>
            <p>
                My development jouney started just like may others, building
                Wordpress sites for small businesses. During that time I learned
                so much from following the Laravel ecosytem grow and with it
                Tailwind. I was able to quickly integrate early versions of
                Tailwind into my work projects and even made an
                {"  "}
                <Link href="https://github.com/tailwindlabs/tailwindcss/pull/1027">
                    early contribution
                </Link>{" "}
                to the framework.
            </p>

            <p>
                At my current job I am a full stack developer working with
                React, React Native, and Vue in the frontend and Kotlin with
                Springboot in the backend. Like I said before I introduced the
                team to Tailwind (who were apprehensive at first) but now they
                love it. With my success in introducing these tools which sped
                up our development process, I was promoted to lead developer of
                a small team of 4.
            </p>
        </Section>
    );
}
