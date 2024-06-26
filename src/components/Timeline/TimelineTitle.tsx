import { PropsWithChildren } from "react";

export function TimelineTitle({ children }: PropsWithChildren) {
    return <h3 className="text-lg font-black text-white">{children}</h3>;
}
