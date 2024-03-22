import { PropsWithChildren } from "react";
import clsx from "clsx";

function BaseTimeline({ children }: PropsWithChildren) {
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {children}
        </ul>
    );
}

interface TimelineSegmentProps {
    isFirst?: boolean;
    isLast?: boolean;
}

function TimelineSegment({
    children,
    isFirst = false,
    isLast = false,
}: PropsWithChildren<TimelineSegmentProps>) {
    return (
        <li>
            {!isFirst && <hr />}
            {children}
            {!isLast && <hr />}
        </li>
    );
}

function TimelineIcon() {
    return (
        <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                />
            </svg>
        </div>
    );
}

interface TimelineContentProps {
    style: "start" | "end";
}

function TimelineEntry({
    children,
    style,
}: PropsWithChildren<TimelineContentProps>) {
    return (
        <div
            className={clsx("mb-10", {
                "timeline-start md:text-end": style === "start",
                "timeline-end": style === "end",
            })}
        >
            {children}
        </div>
    );
}

function TimelineYear({ children }: PropsWithChildren) {
    return <time className="font-mono italic">{children}</time>;
}

function TimelineTitle({ children }: PropsWithChildren) {
    return <h3 className="text-lg font-black">{children}</h3>;
}

function TimelineContent({ children }: PropsWithChildren) {
    return <div>{children}</div>;
}

export const Timeline = Object.assign(BaseTimeline, {
    Segment: TimelineSegment,
    Icon: TimelineIcon,
    Entry: TimelineEntry,
    Year: TimelineYear,
    Title: TimelineTitle,
    Content: TimelineContent,
});
