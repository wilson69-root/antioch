import { cn } from "@/lib/utils";

interface PageHeroProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    gradient?: "blue" | "gold" | "default";
}

export function PageHero({
    title,
    description,
    children,
    className,
    gradient = "default"
}: PageHeroProps) {

    const gradients = {
        default: "from-primary/90 to-secondary/90",
        blue: "from-primary/90 to-secondary/90",
        gold: "from-accent/90 to-primary/90",
    };

    return (
        <section className={cn(
            "text-white py-24 mt-20 relative overflow-hidden",
            "bg-gradient-to-r",
            gradients[gradient],
            className
        )}>
            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-fade-in-up">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed animate-fade-in-up delay-100">
                            {description}
                        </p>
                    )}
                    {children && (
                        <div className="animate-fade-in-up delay-200">
                            {children}
                        </div>
                    )}
                </div>
            </div>

            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cube-coat.png')] mix-blend-overlay"></div>
        </section>
    );
}
