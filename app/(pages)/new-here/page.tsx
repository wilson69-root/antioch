import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Baby, Accessibility, Camera } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = {
    title: "New Here? | Antioch Independent Baptist Churches of Kenya",
    description: "Planning your first visit? Learn what to expect, service times, directions, and how to make the most of your visit to Antioch Baptist Church.",
};

export default function NewHerePage() {
    return (
        <div className="bg-gradient-to-b from-white to-slate-50/50">
            {/* Hero Section */}
            <PageHero
                title="We're Glad You're Here!"
                description="Planning your first visit? We'd love to meet you. Here's everything you need to know to make your first Sunday with us comfortable and welcoming."
            >
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
                    <a href="#contact">Plan Your Visit</a>
                </Button>
            </PageHero>

            {/* Service Times Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Service Times</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Join us for worship and fellowship
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="border-t-4 border-t-primary shadow-medium hover:shadow-large transition-smooth">
                            <CardContent className="p-8 text-center">
                                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold mb-3">Sunday Worship</h3>
                                <p className="text-4xl font-bold text-primary mb-2">10:00 AM</p>
                                <p className="text-muted-foreground">Every Sunday</p>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-secondary shadow-medium hover:shadow-large transition-smooth">
                            <CardContent className="p-8 text-center">
                                <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
                                <h3 className="text-2xl font-semibold mb-3">Midweek Service</h3>
                                <p className="text-4xl font-bold text-secondary mb-2">4:30 PM</p>
                                <p className="text-muted-foreground">Every Wednesday</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What to Expect Section */}
            <section className="bg-white py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">What to Expect</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Your first visit made easy
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="shadow-soft hover:shadow-medium transition-smooth">
                            <CardContent className="p-6">
                                <Users className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Warm Welcome</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our welcome team will greet you at the entrance and help you feel right at home. Don't hesitate to ask questions!
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-soft hover:shadow-medium transition-smooth">
                            <CardContent className="p-6">
                                <Clock className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Service Length</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our Sunday service typically lasts about 90 minutes, including worship, teaching, and fellowship time.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="shadow-soft hover:shadow-medium transition-smooth">
                            <CardContent className="p-6">
                                <Users className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-xl font-semibold mb-3">What to Wear</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Come as you are! We have a mix of casual and formal attire. The most important thing is that you're comfortable.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Location & Directions Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Location & Directions</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find us easily with these helpful tips
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="shadow-medium">
                            <CardContent className="p-8">
                                <MapPin className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
                                <p className="text-muted-foreground mb-4 leading-relaxed">
                                    <strong>Antioch Independent Baptist Churches of Kenya</strong><br />
                                    [Church Address]<br />
                                    [City], Kenya
                                </p>
                                <Button className="w-full shadow-soft hover:shadow-medium transition-smooth" asChild>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Get Directions
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card className="shadow-medium">
                            <CardContent className="p-8">
                                <Camera className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-2xl font-semibold mb-4">Parking Information</h3>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">✓</span>
                                        <span>Free parking available on-site</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">✓</span>
                                        <span>Accessible parking spaces near the main entrance</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">✓</span>
                                        <span>Parking attendants available to assist you</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-1">✓</span>
                                        <span>Arrive 15 minutes early for best parking spots</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Children's Ministry Section */}
            <section className="bg-white py-20">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Children & Families</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A safe and fun environment for your kids
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <Card className="shadow-large">
                            <CardContent className="p-8">
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="flex-shrink-0">
                                        <Baby className="w-20 h-20 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-4">Children's Ministry</h3>
                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            Our Children's Ministry meets every Sunday at 9:00 AM. We provide age-appropriate Bible teaching, worship, and activities in a safe, nurturing environment.
                                        </p>
                                        <div className="space-y-2 text-muted-foreground">
                                            <p className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span><strong>Check-in:</strong> Located at the main entrance. First-time families will receive a welcome packet.</span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span><strong>Safety:</strong> Secure check-in/check-out system with trained volunteers.</span>
                                            </p>
                                            <p className="flex items-start gap-2">
                                                <span className="text-primary font-bold">•</span>
                                                <span><strong>Ages:</strong> We have classes for nursery (0-2), preschool (3-5), and elementary (6-12).</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Accessibility Section */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <Card className="shadow-medium border-t-4 border-t-accent">
                            <CardContent className="p-8">
                                <div className="flex items-start gap-6">
                                    <Accessibility className="w-12 h-12 text-accent flex-shrink-0" />
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4">Accessibility</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            We strive to make our church accessible to everyone. Our facility includes:
                                        </p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="text-accent">✓</span>
                                                <span>Wheelchair-accessible entrances and restrooms</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-accent">✓</span>
                                                <span>Reserved seating for those with mobility needs</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-accent">✓</span>
                                                <span>Hearing assistance available upon request</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Visit?</h2>
                    <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                        We can't wait to meet you! Let us know you're coming so we can prepare a special welcome.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" asChild>
                            <a href="#contact">Plan My Visit</a>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
                            <a href="/">Back to Home</a>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
