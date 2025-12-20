export interface Sermon {
    id: string;
    title: string;
    speaker: string;
    date: string;
    videoUrl: string;
    thumbnail?: string;
    series?: string;
    description: string;
    shortDescription?: string;
    featured?: boolean;
    topic?: string[];
    scripture?: string;
    duration?: string;
}

export const sermons: Sermon[] = [
    {
        id: "1",
        title: "The Power of Prayer",
        speaker: "Pastor Steven Furtick",
        date: "December 15, 2024",
        videoUrl: "https://www.youtube.com/embed/G0BppDtl3_Q",
        series: "Teach Us To Pray",
        description: "In this sermon, we explore how prayer transforms our spiritual lives and draws us closer to God. Discover practical insights on developing a consistent prayer life and experiencing God's presence in your daily walk.",
        shortDescription: "Discover how prayer transforms your spiritual life.",
        featured: true,
        topic: ["Prayer", "Spiritual Growth", "Faith"],
        scripture: "Luke 11:1-13",
        duration: "45:30"
    },
    {
        id: "2",
        title: "Walking in Faith",
        speaker: "Pastor Steven Furtick",
        date: "December 8, 2024",
        videoUrl: "https://www.youtube.com/embed/sample_video_2",
        series: "Faith Walk",
        description: "Learn what it means to truly walk by faith and not by sight in this challenging message about trusting God when the path isn't clear.",
        shortDescription: "Trusting God when the path isn't clear.",
        featured: false,
        topic: ["Faith", "Trust", "Obedience"],
        scripture: "2 Corinthians 5:7",
        duration: "52:15"
    },
    {
        id: "3",
        title: "Community and Fellowship",
        speaker: "Pastor Steven Furtick",
        date: "December 1, 2024",
        videoUrl: "https://www.youtube.com/embed/sample_video_3",
        series: "Better Together",
        description: "Why we need each other in the body of Christ and the power of unified fellowship. We overcome more when we stand together.",
        shortDescription: "The power of unified fellowship.",
        featured: false,
        topic: ["Community", "Relationships", "Unity"],
        scripture: "Acts 2:42-47",
        duration: "48:20"
    },
    {
        id: "4",
        title: "Overcoming Anxiety",
        speaker: "Pastor Bishop John",
        date: "November 24, 2024",
        videoUrl: "https://www.youtube.com/embed/sample_video_4",
        series: "Peace of Mind",
        description: "Biblical strategies for dealing with anxiety and finding God's peace in a chaotic world. You don't have to carry the weight alone.",
        shortDescription: "Finding God's peace in a chaotic world.",
        featured: false,
        topic: ["Mental Health", "Peace", "Anxiety"],
        scripture: "Philippians 4:6-7",
        duration: "41:10"
    },
    {
        id: "5",
        title: "The Grace of Giving",
        speaker: "Pastor Bishop John",
        date: "November 17, 2024",
        videoUrl: "https://www.youtube.com/embed/sample_video_5",
        series: "Generosity",
        description: "Understanding the joy and blessing that comes from a generous heart. Giving is an act of worship that reflects God's nature.",
        shortDescription: "giving is an act of worship.",
        featured: false,
        topic: ["Giving", "Generosity", "Worship"],
        scripture: "2 Corinthians 9:6-8",
        duration: "38:45"
    },
    {
        id: "6",
        title: "Forgiveness Freedom",
        speaker: "Pastor Steven Furtick",
        date: "November 10, 2024",
        videoUrl: "https://www.youtube.com/embed/sample_video_6",
        series: "Freedom",
        description: "Letting go of bitterness and embracing the freedom that forgiveness brings. Forgiveness is not just for others, it's for you.",
        shortDescription: "Embracing the freedom of forgiveness.",
        featured: false,
        topic: ["Forgiveness", "Healing", "Relationships"],
        scripture: "Matthew 18:21-35",
        duration: "49:55"
    }
];

export function getFeaturedSermon(): Sermon | undefined {
    return sermons.find(sermon => sermon.featured);
}

export function getAllSermons(): Sermon[] {
    return sermons;
}

export function searchSermons(query: string): Sermon[] {
    const lowerQuery = query.toLowerCase();
    return sermons.filter(sermon =>
        sermon.title.toLowerCase().includes(lowerQuery) ||
        sermon.description.toLowerCase().includes(lowerQuery) ||
        sermon.speaker.toLowerCase().includes(lowerQuery) ||
        (sermon.series && sermon.series.toLowerCase().includes(lowerQuery)) ||
        (sermon.topic && sermon.topic.some(t => t.toLowerCase().includes(lowerQuery)))
    );
}

export function getUniqueSeries(): string[] {
    const series = sermons.map(s => s.series).filter((s): s is string => !!s);
    return Array.from(new Set(series));
}

export function getUniqueTopics(): string[] {
    const topics = sermons.flatMap(s => s.topic || []);
    return Array.from(new Set(topics));
}

export function getUniqueSpeakers(): string[] {
    const speakers = sermons.map(s => s.speaker);
    return Array.from(new Set(speakers));
}
