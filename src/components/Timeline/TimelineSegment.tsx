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
            {!isFirst && <hr className="bg-sky-700" />}
            {children}
            {!isLast && <hr className="bg-sky-700" />}
        </li>
    );
}
