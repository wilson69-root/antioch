export interface Event {
    id: string;
    title: string;
    date: string;
    time?: string;
    img: string; // Using img to match existing component
    desc: string;
    action: string;
    location?: string;
    category?: string;
    month?: string; // For grouping
}

export const events: Event[] = [
    {
        id: "1",
        title: "Family Fun Day",
        date: "March 15, 2025",
        time: "10:00 AM - 4:00 PM",
        img: "https://images.unsplash.com/photo-1609234656388-0aa3635261d3?auto=format&fit=crop&q=80&w=1000",
        desc: "Join us for a day filled with fun activities, games, and fellowship. Bring your family and enjoy a wonderful time together!",
        action: "Details",
        category: "Family",
        month: "March"
    },
    {
        id: "2",
        title: "Worship Night",
        date: "March 28, 2025",
        time: "7:00 PM - 9:00 PM",
        img: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=1000",
        desc: "An evening of extended praise and worship. Come expecting to encounter God's presence.",
        action: "Join Us",
        category: "Worship",
        month: "March"
    },
    {
        id: "3",
        title: "Youth Camp 2025",
        date: "April 10-14, 2025",
        time: "All Day",
        img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000",
        desc: "Sign up for our annual youth camp where young hearts can grow in faith and friendship through engaging activities and teachings.",
        action: "Sign Up",
        category: "Youth",
        month: "April"
    },
    {
        id: "4",
        title: "Good Friday Service",
        date: "April 18, 2025",
        time: "6:00 PM",
        img: "https://images.unsplash.com/photo-1543791959-12b3f543282a?auto=format&fit=crop&q=80&w=1000",
        desc: "A reflective service commemorating the crucifixion of Jesus Christ.",
        action: "Details",
        category: "Service",
        month: "April"
    },
    {
        id: "5",
        title: "Easter Sunday",
        date: "April 20, 2025",
        time: "9:00 AM & 11:30 AM",
        img: "https://images.unsplash.com/photo-1560130958-f752317112eb?auto=format&fit=crop&q=80&w=1000",
        desc: "Celebrate the resurrection of our Savior! Choose from two service times.",
        action: "Plan Visit",
        category: "Service",
        month: "April"
    },
    {
        id: "6",
        title: "Community Service Day",
        date: "May 1, 2025",
        time: "8:00 AM - 12:00 PM",
        img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000",
        desc: "Join us as we reach out to vulnerable families in our community, providing assistance and support to those in need.",
        action: "Volunteer",
        category: "Outreach",
        month: "May"
    },
    {
        id: "7",
        title: "Men's Breakfast",
        date: "May 10, 2025",
        time: "8:00 AM",
        img: "https://images.unsplash.com/photo-1510022079733-8b58aca7c4a9?auto=format&fit=crop&q=80&w=1000",
        desc: "Food, fellowship, and a challenging message for men of all ages.",
        action: "Register",
        category: "Adults",
        month: "May"
    }
];

export function getAllEvents(): Event[] {
    return events;
}

export function getUpcomingEvents(limit: number = 3): Event[] {
    return events.slice(0, limit);
}
