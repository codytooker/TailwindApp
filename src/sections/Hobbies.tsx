import { Link } from "../components/Link";
import { MailToLink } from "../components/MailToLink";
import { Section } from "../components/Section";
import { Timeline } from "../components/Timeline/Timeline";

export function Hobbies() {
    return (
        <Section>
            <h2 className="text-xl font-bold text-white mb-6">
                Want To Know More About Me?
            </h2>

            <Timeline>
                <Timeline.Segment isFirst>
                    <Timeline.Icon />
                    <Timeline.Entry style="end">
                        <Timeline.Title>Bowling</Timeline.Title>
                        <Timeline.Content>
                            I come from a family of bowlers. I'm not sure what
                            comes first in my family, learning to walk or
                            learning to bowl. I have bowled a 300 (perfect game)
                            and I have a{" "}
                            <MailToLink subject="Show Me That Ring">
                                ring to prove it
                            </MailToLink>
                            .
                        </Timeline.Content>
                    </Timeline.Entry>
                </Timeline.Segment>
                <Timeline.Segment>
                    <Timeline.Icon />
                    <Timeline.Entry style="start">
                        <Timeline.Title>Poker</Timeline.Title>
                        <Timeline.Content>
                            I love playing poker. I mostly play tournaments and
                            have been doing so for most of my adult life. I have
                            played in the World Series of Poker in Las Vegas and
                            have cashed / won a few smaller tournaments. The
                            last year or so I have had some of my{" "}
                            <Link href="https://pokerdb.thehendonmob.com/player.php?a=r&n=275055">
                                best results
                            </Link>
                            .
                        </Timeline.Content>
                    </Timeline.Entry>
                </Timeline.Segment>
                <Timeline.Segment>
                    <Timeline.Icon />
                    <Timeline.Entry style="end">
                        <Timeline.Title>Aquariums</Timeline.Title>
                        <Timeline.Content>
                            I currently have a 90 gallon saltwater aquarium and
                            am in the process of setting up a brand new 200
                            gallon system. Running a functioning reef system
                            involves solving tons of small problems and really
                            activates the engineering sides of my brain. If you
                            are interested in seeing some of my fish, just{" "}
                            <MailToLink subject="Show Me Those Fish">
                                click here 🐠
                            </MailToLink>
                            .
                        </Timeline.Content>
                    </Timeline.Entry>
                </Timeline.Segment>
                <Timeline.Segment isLast>
                    <Timeline.Icon />
                    <Timeline.Entry style="start">
                        <Timeline.Title>Disc Golf</Timeline.Title>
                        <Timeline.Content>
                            I have been playing disc golf for 15 years or so. It
                            is a great way to get outside and enjoy nature,
                            while challenging yourself to get better. Back in
                            2015 I started my own subscription box service for
                            disc golfers called Disc2Door. It was a fun project
                            that I ran for a about half the year before I
                            decided to focus on other things.
                        </Timeline.Content>
                    </Timeline.Entry>
                </Timeline.Segment>
            </Timeline>
        </Section>
    );
}
