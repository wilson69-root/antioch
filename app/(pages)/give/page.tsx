import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, RefreshCw, Globe, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";

export const metadata = {
    title: "Giving | Antioch Independent Baptist Churches of Kenya",
    description: "Support the mission and ministry of Antioch Baptist Church through your faithful giving.",
};

export default function GivingPage() {
    return (
        <div className="bg-gradient-to-b from-white to-slate-50/50 min-h-screen">
            {/* Hero Section */}
            <PageHero
                title="Giving"
                description="Your generosity helps us transform lives through Christ's love and service in our community."
                gradient="gold"
            />

            {/* Main Content */}
            <section className="py-20">
                <div className="container">

                    {/* Giving Options Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
                        {/* One-Time Gift */}
                        <Card className="border-t-4 border-t-primary shadow-medium hover:shadow-large transition-all duration-300">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                    <Heart className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">One-Time Gift</CardTitle>
                                <CardDescription>Make a single contribution</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center pt-4">
                                <p className="text-muted-foreground mb-6 h-12">
                                    Support our general fund or a specific ministry with a one-time donation.
                                </p>
                                <Button className="w-full" size="lg">
                                    Give Now
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Recurring Giving */}
                        <Card className="border-t-4 border-t-accent shadow-medium hover:shadow-large transition-all duration-300 transform md:-translate-y-4">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                    <RefreshCw className="w-6 h-6 text-accent" />
                                </div>
                                <CardTitle className="text-2xl">Recurring Giving</CardTitle>
                                <CardDescription>Automate your faithfulness</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center pt-4">
                                <p className="text-muted-foreground mb-6 h-12">
                                    Set up a weekly or monthly gift to consistent support the church's mission.
                                </p>
                                <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                                    Set Up Recurring
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Missions & Projects */}
                        <Card className="border-t-4 border-t-secondary shadow-medium hover:shadow-large transition-all duration-300">
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                    <Globe className="w-6 h-6 text-secondary" />
                                </div>
                                <CardTitle className="text-2xl">Missions & Projects</CardTitle>
                                <CardDescription>Direct your impact</CardDescription>
                            </CardHeader>
                            <CardContent className="text-center pt-4">
                                <p className="text-muted-foreground mb-6 h-12">
                                    Support specific initiatives like church planting, missions, or building projects.
                                </p>
                                <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                                    View Projects
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Impact Section */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft mb-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-secondary">Why We Give</h2>
                                <div className="prose text-muted-foreground leading-relaxed">
                                    <p className="mb-4">
                                        Giving is an act of worship and gratitude. At Antioch, we believe that everything we have belongs to God, and we are merely stewards of His resources.
                                    </p>
                                    <p className="mb-6">
                                        Your faithful giving allows us to:
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <span>Support local community outreach programs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <span>Plant new churches across Kenya</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <span>Maintain our facilities for worship and ministry</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <ArrowRight className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                                            <span>Equip the next generation through children and youth ministries</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-medium">
                                <img
                                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Community Impact"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-medium italic text-lg">
                                        "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secure Giving Note */}
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full mb-6">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="font-semibold text-sm">Safe & Secure Giving</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Security Promise</h3>
                        <p className="text-muted-foreground mb-8">
                            We use industry-standard encryption to protect your financial information. Your generosity is handled with the highest level of security and integrity.
                        </p>
                        <div className="flex justify-center gap-6 opacity-60 grayscale">
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-8 h-8" />
                                <span className="font-bold">Visa</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-8 h-8" />
                                <span className="font-bold">Mastercard</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-8 h-8" />
                                <span className="font-bold">M-Pesa</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
