import { PropsWithChildren } from "react";

interface LinkProps {
    href: string;
}

export function Link({ href, children }: PropsWithChildren<LinkProps>) {
    return (
        <a
            className="text-sky-500 hover:text-sky-700 transition-colors duration-200 underline underline-offset-2"
            href={href}
        >
            {children}
        </a>
    );
}
