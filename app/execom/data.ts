export interface Member {
    name: string;
    role: string;
    image: string;
    bio: string;
    linkedin: string;
    email: string;
    letter: string;
}

export interface TeamSection {
    title: string;
    members: { name: string; role: string; image: string }[];
}

export interface ExecomData {
    year: string;
    leads: Member[];
    teamSections: TeamSection[];
}

export const execomHistory: ExecomData[] = [
    {
        year: "26/27",
        leads: [
            {
                name: "Yadu Krishna",
                role: "CEO",
                image: "/execom/tims.jpeg",
                bio: "Leading innovation and entrepreneurship initiatives at SJCET. Expert in strategic planning and ecosystem development.",
                linkedin: "#",
                email: "yadu@sjcetpalai.ac.in",
                letter: "C"
            },
            {
                name: "Akshay P",
                role: "COO",
                image: "/execom/tims.jpeg",
                bio: "Managing operations and internal processes. Focused on streamlining startup incubation and student support.",
                linkedin: "#",
                email: "akshay@sjcetpalai.ac.in",
                letter: "O"
            },
            {
                name: "Tims Tittus",
                role: "CTO",
                image: "/execom/tims.jpeg",
                bio: "Driving technical excellence and product development within IEDC. Specialized in emerging technologies.",
                linkedin: "#",
                email: "tims@sjcetpalai.ac.in",
                letter: "T"
            },
            {
                name: "Alan Jose",
                role: "CFO",
                image: "/execom/tims.jpeg",
                bio: "Overseeing financial planning and resource allocation. Ensuring sustainable growth for student ventures.",
                linkedin: "#",
                email: "alan@sjcetpalai.ac.in",
                letter: "F"
            },
            {
                name: "Sreya Mariya",
                role: "CPO",
                image: "/execom/tims.jpeg",
                bio: "Fostering partnerships and community engagement. Building bridges between industry and academia.",
                linkedin: "#",
                email: "sreya@sjcetpalai.ac.in",
                letter: "P"
            },
        ],
        teamSections: [
            {
                title: "Tech Team",
                members: [
                    { name: "Member 1", role: "Development Lead", image: "" },
                    { name: "Member 2", role: "AI Specialist", image: "" },
                    { name: "Member 3", role: "UI/UX Designer", image: "" },
                    { name: "Member 4", role: "Development Lead", image: "" },
                    { name: "Member 5", role: "Development Lead", image: "" },
                ]
            },
            {
                title: "Marketing Team",
                members: [
                    { name: "Member 4", role: "Marketing Lead", image: "" },
                    { name: "Member 5", role: "Social Media", image: "" },
                    { name: "Member 6", role: "Content Creator", image: "" },
                ]
            },
            {
                title: "Operations Team",
                members: [
                    { name: "Member 7", role: "Operations Lead", image: "" },
                    { name: "Member 8", role: "Event Manager", image: "" },
                    { name: "Member 9", role: "Logistics", image: "" },
                ]
            }
        ]
    },
    {
        year: "25/26",
        leads: [
            {
                name: "Past CEO 25",
                role: "CEO",
                image: "/execom/tims.jpeg",
                bio: "Leading the growth of IEDC in 2025.",
                linkedin: "#",
                email: "past25@sjcetpalai.ac.in",
                letter: "C"
            },
            {
                name: "Past CTO 25",
                role: "CTO",
                image: "/execom/tims.jpeg",
                bio: "Driving technical excellence in 2025.",
                linkedin: "#",
                email: "past25@sjcetpalai.ac.in",
                letter: "T"
            }
        ],
        teamSections: [
            {
                title: "Tech Team 25/26",
                members: [
                    { name: "Member A", role: "Dev", image: "" }
                ]
            }
        ]
    },
    {
        year: "24/25",
        leads: [
            {
                name: "Past CEO 24",
                role: "CEO",
                image: "/execom/tims.jpeg",
                bio: "Leading the historical growth of IEDC.",
                linkedin: "#",
                email: "past@sjcetpalai.ac.in",
                letter: "C"
            }
        ],
        teamSections: [
            {
                title: "Core Team 24/25",
                members: [
                    { name: "Past Member X", role: "Lead", image: "" }
                ]
            }
        ]
    },
    {
        year: "23/24",
        leads: [
            {
                name: "Past CEO 23",
                role: "CEO",
                image: "/execom/tims.jpeg",
                bio: "Foundation years of innovation.",
                linkedin: "#",
                email: "past@sjcetpalai.ac.in",
                letter: "C"
            }
        ],
        teamSections: [
            {
                title: "Legacy Team 23/24",
                members: [
                    { name: "Founder Member", role: "Ex-Lead", image: "" }
                ]
            }
        ]
    }
];
