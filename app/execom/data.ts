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
    members: { name: string; role: string; image: string; linkedin?: string }[];
}

export interface ExecomData {
    year: string;
    leads?: Member[];
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
        teamSections: [
            {
                title: "Core Team",
                members: [
                    { name: "Member A", role: "Dev", image: "" }
                ]
            },
        ]
    },
    {
        year: "24/25",
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
                name: "Denix Sebastian",
                role: "Assistant Nodal Officer",
                image: "/execom/23-24/denix_sebastian.png",
                bio: "Guiding the institution's innovation and entrepreneurship ecosystem.",
                linkedin: "https://www.linkedin.com/in/denix-sebastian-39061475/",
                email: "denix@sjcetpalai.ac.in",
                letter: "D"
            },
            {
                name: "Annu Rajesh",
                role: "Chief Executive Officer",
                image: "/execom/23-24/annu_rajesh.png",
                bio: "Leading the executive committee and strategic initiatives.",
                linkedin: "https://www.linkedin.com/in/annu-rajesh-a82a66221/",
                email: "annu.rajesh@sjcetpalai.ac.in",
                letter: "A"
            },
            {
                name: "Vishnu C R",
                role: "Chief Marketing Officer",
                image: "/execom/23-24/vishnu_cr.png",
                bio: "Driving marketing strategies and outreach programs.",
                linkedin: "https://www.linkedin.com/in/vishnu-c-r-821a31201/",
                email: "vishnu@sjcetpalai.ac.in",
                letter: "V"
            },
            {
                name: "Jesvin C Jess",
                role: "Chief Social Officer",
                image: "/execom/23-24/jesvin_c_jess.png",
                bio: "Managing social responsibility and community impact initiatives.",
                linkedin: "https://www.linkedin.com/in/jesvin-chathiyalil-jess-4375a1232/",
                email: "jesvin@sjcetpalai.ac.in",
                letter: "J"
            },
            {
                name: "Johns Raju",
                role: "Chief Creative Officer",
                image: "/execom/23-24/johns_raju.png",
                bio: "Overseeing creative direction and design execution.",
                linkedin: "https://www.linkedin.com/in/johns-raju-90b327201/",
                email: "johns@sjcetpalai.ac.in",
                letter: "J"
            },
            {
                name: "Deepu Sasi",
                role: "Chief Operation Officer",
                image: "/execom/23-24/deepu_sasi.png",
                bio: "Optimizing operations and event logistics.",
                linkedin: "https://www.linkedin.com/in/deepu-sasi/",
                email: "deepu@sjcetpalai.ac.in",
                letter: "D"
            },
            {
                name: "Mohammed Yasim",
                role: "Chief Technical Officer",
                image: "/execom/23-24/mohammed_yasin.png",
                bio: "Fostering technological innovation and technical teams.",
                linkedin: "https://www.linkedin.com/in/mohammed-yasim/",
                email: "mohammed@sjcetpalai.ac.in",
                letter: "M"
            },
            {
                name: "Alvin Dennis",
                role: "Chief Finance Officer",
                image: "/execom/23-24/alvin_dennis.jpg",
                bio: "Handling financial planning and resource management.",
                linkedin: "https://www.linkedin.com/in/alvindennis/",
                email: "alvin@sjcetpalai.ac.in",
                letter: "A"
            }
        ],
        teamSections: [
            {
                title: "Tech Team",
                members: [
                    { name: "Milan Suman", role: "Technical Officer", image: "/execom/23-24/milan_suman.png", linkedin: "https://www.linkedin.com/in/milan-suman-66234b25b/" },
                    { name: "Rajat Sandeep", role: "Technical Officer", image: "/execom/23-24/rajat_sandeep.png", linkedin: "https://www.linkedin.com/in/rajatsandeepsen/" },
                    { name: "Jovit Mathew", role: "Technical Officer", image: "/execom/23-24/jovit_mathew.png", linkedin: "https://www.linkedin.com/in/jovit-mathew/" }
                ]
            },
            {
                title: "Marketing Team",
                members: [
                    { name: "Jeslin Jose", role: "Marketing Officer", image: "/execom/23-24/jeslin_jose.png", linkedin: "https://www.linkedin.com/in/jeslin-jose-3227b425a/" },
                    { name: "Jibin Gigi", role: "Marketing Officer", image: "/execom/23-24/jibin_gigi.png", linkedin: "https://www.linkedin.com/in/404-jibin-gigi/" },
                    { name: "Neha Manoj", role: "Marketing Officer", image: "/execom/23-24/neha_manoj.png", linkedin: "https://www.linkedin.com/in/neha-manoj-6ab292223/" }
                ]
            },
            {
                title: "Social Team",
                members: [
                    { name: "Leon Joshy", role: "Social Officer", image: "/execom/23-24/leon_joshy.png", linkedin: "https://www.linkedin.com/in/leon-joshy/" },
                    { name: "Liya Elizabeth Joseph", role: "Social Officer", image: "/execom/23-24/liya_elizabeth_joseph.png", linkedin: "https://www.linkedin.com/in/liya-joseph2123/" },
                    { name: "Alina Tresa Johnson", role: "Social Officer", image: "/execom/23-24/alina_tresa_johnson.png", linkedin: "https://www.linkedin.com/in/alina-tresa-johnson-525a5b27b/" }
                ]
            },
            {
                title: "Creative Team",
                members: [
                    { name: "Abhiram Reji", role: "Creative Officer", image: "/execom/23-24/abhiram_reji.png", linkedin: "https://www.linkedin.com/in/abhiram-reji-3b1057247/" },
                    { name: "Goutham Sreeram", role: "Creative Officer", image: "/execom/23-24/goutham_sreeram.png", linkedin: "https://www.linkedin.com/in/goutham-sreeram-sb-2b7661241/" },
                    { name: "Abhishek S", role: "Creative Officer", image: "/execom/23-24/abhishek_s.jpg", linkedin: "https://www.behance.net/gallery/230414381/Portfolio" }
                ]
            },
            {
                title: "Operations Team",
                members: [
                    { name: "Ann Elizabeth James", role: "Operation Officer", image: "/execom/23-24/ann_elizabeth_james.png", linkedin: "https://www.linkedin.com/in/annelizabethjames/" },
                    { name: "Sanjana", role: "Operation Officer", image: "/execom/23-24/sanjana.png", linkedin: "https://www.linkedin.com/in/sanjana-vs-8758b0212/" },
                    { name: "Agnel Brigit Shaji", role: "Operation Officer", image: "/execom/23-24/agnel_brigit_james.png", linkedin: "https://www.linkedin.com/in/agnel-brigit-shaji-383701234/" }
                ]
            },
            {
                title: "Finance Team",
                members: [
                    { name: "Basil Vazhathottathil", role: "Finance Officer", image: "/execom/23-24/basil_vazhathottathil.jpg", linkedin: "https://www.linkedin.com/in/basil-vazhathottathil/" },
                    { name: "Alby Joseph", role: "Finance Officer", image: "/execom/23-24/alby_joseph.png", linkedin: "https://www.linkedin.com/in/alby-joseph-2925aa247/" }
                ]
            }
        ]
    }
];
