import {
    Pagination as PaginationParent,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationProps } from "@/types/models/meta";

interface PaginationLinkItem {
    url: string | null;
    label: string;
    active: boolean;
}

export default function DynamicPagination({ meta }: PaginationProps) {
    // We filter out the "Previous" and "Next" links from the main loop
    const pageLinks = meta.links.filter(
        (link: PaginationLinkItem) =>
            link.label !== '&laquo; Previous' && link.label !== 'Next &raquo;'
    );
    const previousLink = meta.links.find(
        (link: PaginationLinkItem) => link.label === '&laquo; Previous'
    );
    const nextLink = meta.links.find(
        (link: PaginationLinkItem) => link.label === 'Next &raquo;'
    );

    return (
        <div>
            <PaginationParent>
                <PaginationContent>
                    {/* Render Previous button */}
                    {previousLink && (
                        <PaginationItem>
                            <PaginationPrevious
                                href={previousLink.url || '#'}
                                className={!previousLink.url ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    )}

                    {/* Render page number links and ellipsis */}
                    {pageLinks.map((link: PaginationLinkItem, index: number) => {
                        // Check if the label is an ellipsis
                        if (link.label === '...') {
                            return (
                                <PaginationItem key={index}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            );
                        }
                        // Render page links
                        return (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href={link.url || '#'}
                                    isActive={link.active}
                                    className={link.active ? 'bg-primary text-white hover:bg-primary/90' : ''}
                                >
                                    {link.label}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    })}

                    {/* Render Next button */}
                    {nextLink && (
                        <PaginationItem>
                            <PaginationNext
                                href={nextLink.url || '#'}
                                className={!nextLink.url ? 'pointer-events-none opacity-50' : ''}
                            />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </PaginationParent>
        </div>
    );
}
