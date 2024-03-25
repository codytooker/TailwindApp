import { PropsWithChildren } from "react";
import { Link } from "./Link";

interface MailToLinkProps {
    subject: string;
}

export function MailToLink({
    subject,
    children,
}: PropsWithChildren<MailToLinkProps>) {
    return (
        <Link
            href={`mailto:codytooker@gmail.com?subject=${subject}&body=Thanks for applying we'd love to schedule a follow up call with you.`}
        >
            {children}
        </Link>
    );
}
