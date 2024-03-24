import { PropsWithChildren } from "react";

interface TimelineSegmentProps {
    isFirst?: boolean;
    isLast?: boolean;
}

export function TimelineSegment({
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
