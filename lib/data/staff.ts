export interface StaffMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
    email: string;
    category: "Leadership" | "Pastoral" | "Support";
}

export const staff: StaffMember[] = [
    {
        id: "pastor-john",
        name: "Bishop John Mwangi",
        role: "Senior Pastor",
        bio: "Bishop John has been serving Antioch for over 20 years. He is passionate about preaching the uncompromised Word of God and seeing lives transformed by the Gospel.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000",
        email: "bishop.john@antioch.co.ke",
        category: "Leadership"
    },
    {
        id: "pastor-david",
        name: "David Kamau",
        role: "Associate Pastor",
        bio: "Pastor David leads our Discipleship and Youth ministries. He has a heart for the next generation and equipping believers to grow in their faith.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1000",
        email: "david.kamau@antioch.co.ke",
        category: "Pastoral"
    },
    {
        id: "sarah-mwangi",
        name: "Sarah Mwangi",
        role: "Children's Director",
        bio: "Sarah brings joy and creativity to our Kids Kingdom ministry. She believes that children are not just the church of tomorrow, but the church of today.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000",
        email: "sarah.mwangi@antioch.co.ke",
        category: "Pastoral"
    },
    {
        id: "mark-kamau",
        name: "Mark Kamau",
        role: "Worship Director",
        bio: "Mark leads our worship team with excellence and a heart for God's presence. He is a talented musician who loves mentoring up-and-coming artists.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000",
        email: "mark.kamau@antioch.co.ke",
        category: "Leadership"
    },
    {
        id: "jane-kinyua",
        name: "Jane Kinyua",
        role: "Administrator",
        bio: "Jane keeps everything running smoothly behind the scenes. Her gift of administration ensures that our ministries are well-organized and effective.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000",
        email: "office@antioch.co.ke",
        category: "Support"
    }
];

export function getAllStaff(): StaffMember[] {
    return staff;
}

export function getStaffByCategory(category: string): StaffMember[] {
    return staff.filter(s => s.category === category);
}
