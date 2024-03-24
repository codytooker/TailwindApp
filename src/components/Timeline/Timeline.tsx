import { PropsWithChildren } from "react";
import { TimelineEntry } from "./TimelineEntry";
import { TimelineContent } from "./TimelineContent";
import { TimelineIcon } from "./TimelineIcon";
import { TimelineSegment } from "./TimelineSegment";
import { TimelineTitle } from "./TimelineTitle";
import { TimelineYear } from "./TimelineYear";

function BaseTimeline({ children }: PropsWithChildren) {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {children}
        </ul>
    );
}

export const Timeline = Object.assign(BaseTimeline, {
    Segment: TimelineSegment,
    Icon: TimelineIcon,
    Entry: TimelineEntry,
    Year: TimelineYear,
    Title: TimelineTitle,
    Content: TimelineContent,
});
