export interface Ministry {
    id: string;
    name: string;
    description: string;
    leader?: string;
    meetingTime?: string;
    image: string;
    category: "Kids & Youth" | "Adults" | "Service" | "Outreach";
}

export const ministries: Ministry[] = [
    {
        id: "kids-kingdom",
        name: "Kids Kingdom",
        description: "A fun, safe, and biblically-grounded environment for children ages 0-12 to learn about Jesus. We have age-appropriate classes during every service.",
        leader: "Sarah Mwangi",
        meetingTime: "Sundays at 10:00 AM",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000",
        category: "Kids & Youth"
    },
    {
        id: "youth-ignite",
        name: "Ignite Youth",
        description: "Empowering teenagers to live boldly for Christ. We focus on discipleship, real talk about life issues, and building strong friendships.",
        leader: "Pastor David",
        meetingTime: "Fridays at 6:00 PM",
        image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=1000",
        category: "Kids & Youth"
    },
    {
        id: "mens-fellowship",
        name: "Men of Valor",
        description: "Equipping men to be servant leaders in their homes, church, and community through prayer, Bible study, and accountability.",
        leader: "Elder John",
        meetingTime: "1st Saturday of Month at 8:00 AM",
        image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&q=80&w=1000",
        category: "Adults"
    },
    {
        id: "womens-ministry",
        name: "Sisters in Grace",
        description: "A community of women growing together in faith, supporting one another through life's seasons, and serving with love.",
        leader: "Mary Wanjiku",
        meetingTime: "Wednesdays at 2:00 PM",
        image: "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?auto=format&fit=crop&q=80&w=1000",
        category: "Adults"
    },
    {
        id: "worship-team",
        name: "Worship Team",
        description: "Leading the congregation in praise and worship. We are always looking for gifted musicians and vocalists to join our team.",
        leader: "Mark Kamau",
        meetingTime: "Practices on Thu at 6:00 PM",
        image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&q=80&w=1000",
        category: "Service"
    },
    {
        id: "outreach",
        name: "Community Outreach",
        description: "Sharing the love of Christ by serving our local community through food drives, hospital visits, and evangelism.",
        leader: "Team Lead",
        meetingTime: "Various times",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=1000",
        category: "Outreach"
    }
];

export function getAllMinistries(): Ministry[] {
    return ministries;
}

export function getMinistriesByCategory(category: string): Ministry[] {
    return ministries.filter(m => m.category === category);
}
