import { PropsWithChildren } from "react";
import clsx from "clsx";

interface TimelineEntryProps {
    style: "start" | "end";
}

export function TimelineEntry({
    children,
    style,
}: PropsWithChildren<TimelineEntryProps>) {
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
