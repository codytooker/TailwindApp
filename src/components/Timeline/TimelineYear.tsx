import { PropsWithChildren } from "react";

export function TimelineYear({ children }: PropsWithChildren) {
    return <time className="font-mono italic">{children}</time>;
}
