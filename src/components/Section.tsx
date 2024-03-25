import { PropsWithChildren } from "react";

export function Section({ children }: PropsWithChildren) {
    return <section className="px-4 space-y-4">{children}</section>;
}
