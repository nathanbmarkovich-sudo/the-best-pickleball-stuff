import Link from "next/link";
import React from "react";

interface AffiliateLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

/**
 * AffiliateLink component that automatically adds rel="nofollow sponsored"
 * to comply with Google's spam policies.
 */
export default function AffiliateLink({ href, children, className }: AffiliateLinkProps) {
    const isExternal = href.startsWith("http");

    if (!isExternal) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <a
            href={href}
            className={className}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
        >
            {children}
        </a>
    );
}
