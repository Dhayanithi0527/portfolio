import { cn } from '../../lib/utils';

export default function Section({ className, id, children, ...props }) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 lg:py-32 scroll-mt-16", className)}
            {...props}
        >
            {children}
        </section>
    );
}
