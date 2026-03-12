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
                image: "/execom/24-25/tims.jpeg",
                bio: "Leading innovation and entrepreneurship initiatives at SJCET. Expert in strategic planning and ecosystem development.",
                linkedin: "#",
                email: "yadu@sjcetpalai.ac.in",
                letter: "C"
            },
            {
                name: "Akshay P",
                role: "COO",
                image: "/execom/24-25/tims.jpeg",
                bio: "Managing operations and internal processes. Focused on streamlining startup incubation and student support.",
                linkedin: "#",
                email: "akshay@sjcetpalai.ac.in",
                letter: "O"
            },
            {
                name: "Tims Tittus",
                role: "CTO",
                image: "/execom/24-25/tims.jpeg",
                bio: "Driving technical excellence and product development within IEDC. Specialized in emerging technologies.",
                linkedin: "https://linkedin.com/in/tims-tittus/",
                email: "timstittus2027@sjcetpalai.ac.in",
                letter: "T"
            },
            {
                name: "Alan Jose",
                role: "CFO",
                image: "/execom/24-25/tims.jpeg",
                bio: "Overseeing financial planning and resource allocation. Ensuring sustainable growth for student ventures.",
                linkedin: "#",
                email: "alan@sjcetpalai.ac.in",
                letter: "F"
            },
            {
                name: "Sreya Mariya",
                role: "CPO",
                image: "/execom/24-25/tims.jpeg",
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
                name: "Sarju S",
                role: "IEDC Nodal Officer",
                image: "",
                bio: "Guiding the institution's innovation and entrepreneurship ecosystem.",
                linkedin: "#",
                email: "sarju@sjcetpalai.ac.in",
                letter: "S"
            },
            {
                name: "Jose Thomas",
                role: "CMO",
                image: "/execom/24-25/jose.png",
                bio: "Driving marketing strategies and outreach programs.",
                linkedin: "https://www.linkedin.com/in/jose-thomas-62696527b/",
                email: "jose@sjcetpalai.ac.in",
                letter: "J"
            },
            {
                name: "Basil V",
                role: "CFO",
                image: "/execom/24-25/basil.png",
                bio: "Handling financial planning and resource management.",
                linkedin: "#",
                email: "basil@sjcetpalai.ac.in",
                letter: "B"
            },
            {
                name: "Tims Tittus",
                role: "IPR and Research Lead",
                image: "/execom/24-25/tims.jpeg",
                bio: "Managing public relations, research, and technical strategy.",
                linkedin: "https://www.linkedin.com/in/tims-tittus-b4908b27b/",
                email: "tims@sjcetpalai.ac.in",
                letter: "T"
            },
            {
                name: "Angel Mariya",
                role: "Women Innovation Lead",
                image: "/execom/24-25/Angle.png",
                bio: "Empowering women in technology and entrepreneurship.",
                linkedin: "https://www.linkedin.com/in/angel-maria-5474302b1/",
                email: "angel@sjcetpalai.ac.in",
                letter: "A"
            },
            {
                name: "Milan Suman",
                role: "CTO",
                image: "/execom/24-25/milan.png",
                bio: "Driving technical excellence and product development within IEDC.",
                linkedin: "https://www.linkedin.com/in/milan-suman-66234b25b/",
                email: "milan@sjcetpalai.ac.in",
                letter: "M"
            },
            {
                name: "Chris Alex",
                role: "CCO",
                image: "/execom/24-25/chris.png",
                bio: "Overseeing creative direction and design execution.",
                linkedin: "https://www.linkedin.com/in/chris-oommen-alex/",
                email: "chris@sjcetpalai.ac.in",
                letter: "C"
            },
            {
                name: "Yadhu Krishna",
                role: "COO",
                image: "/execom/24-25/yadhu.png",
                bio: "Managing operations and internal processes.",
                linkedin: "https://www.linkedin.com/in/yadukrishna-hari-964170317/",
                email: "yadhu@sjcetpalai.ac.in",
                letter: "Y"
            },
            {
                name: "Jibin Gigi",
                role: "CEO",
                image: "/execom/24-25/jibin.png",
                bio: "Leading the executive committee and strategic initiatives.",
                linkedin: "https://www.linkedin.com/in/404-jibin-gigi/",
                email: "jibin@sjcetpalai.ac.in",
                letter: "J"
            },
            {
                name: "Andrea Theresa",
                role: "Student Lead",
                image: "",
                bio: "Leading student initiatives and engagement.",
                linkedin: "#",
                email: "andrea@sjcetpalai.ac.in",
                letter: "A"
            },
            {
                name: "Doney Siby",
                role: "Community Lead",
                image: "",
                bio: "Fostering community growth and collaborations.",
                linkedin: "#",
                email: "doney@sjcetpalai.ac.in",
                letter: "D"
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
        year: "24/25",
        leads: [
            {
                name: "Sarju S",
                role: "IEDC Nodal Officer",
                image: "",
                bio: "Guiding the institution's innovation and entrepreneurship ecosystem.",
                linkedin: "#",
                email: "sarju@sjcetpalai.ac.in",
                letter: "S"
            },
            {
                name: "Liya Elizabeth Joseph",
                role: "CEO",
                image: "/execom/24-25/liya.webp",
                linkedin: "https://www.linkedin.com/in/liya-joseph2123/",
                email: "#",
                letter: "L",
                bio: "",
            },
            {
                name: "Rajat Sandeep",
                role: "CTO",
                image: "/execom/24-25/RAJAT_CTO.webp",
                linkedin: "https://www.linkedin.com/in/rajatsandeepsen/",
                email: "#",
                letter: "R",
                bio: "",
            },
            {
                name: "Alina Tresa Johnson",
                role: "COO",
                image: "/execom/24-25/ALINA_COO.webp",
                linkedin: "https://www.linkedin.com/in/alina-tresa-johnson-525a5b27b/",
                email: "#",
                letter: "A",
                bio: "",
            },
            {
                name: "Goutham Sreeram S B",
                role: "CCO",
                image: "/execom/24-25/goutham.webp",
                linkedin: "https://www.linkedin.com/in/goutham-sreeram-sb-2b7661241/",
                email: "#",
                letter: "C",
                bio: "",
            },
            {
                name: "Alvin Dennis",
                role: "CFO",
                image: "/execom/24-25/ALVIN_CFO.webp",
                linkedin: "https://www.linkedin.com/in/alvindennis/",
                email: "#",
                letter: "A",
                bio: "",
            },
            {
                name: "Ayush Krishnan",
                role: "CMO",
                image: "/execom/24-25/AYUSH_CMO.webp",
                linkedin: "https://www.linkedin.com/in/ayushkrishnanu/",
                email: "#",
                letter: "A",
                bio: "",
            },
            {
                name: "Jibin Gigi",
                role: "CSO",
                image: "/execom/24-25/AYUSH_CMO.webp",
                linkedin: "https://www.linkedin.com/in/404-jibin-gigi/",
                email: "#",
                letter: "J",
                bio: "",
            },
            {
                name: "Aibel Bin Zachariah",
                role: "CVO",
                image: "/execom/24-25/AIBEL_CVO.webp",
                linkedin: "https://www.linkedin.com/in/aibel-bin-zacariah-677660226/",
                email: "#",
                letter: "A",
                bio: "",
            },

        ],
        teamSections: [
            {
                title: "Technical Team",
                members: [
                    { name: "Milan Suman", role: "Technical Officer", image: "/execom/24-25/MILAN_TO.webp",linkedin: "https://www.linkedin.com/in/milan-suman-66234b25b/" },
                    { name: "Jovit Mathew", role: "Technical Officer", image: "/execom/24-25/JOVIT_TO.webp",linkedin: "https://www.linkedin.com/in/jovit-mathew/" },
                    { name: "Sanu K Joseph", role: "Technical Officer", image: "/execom/24-25/SANU_TO.webp",linkedin: "https://www.linkedin.com/in/sanu-k-joseph/" },
                    { name: "Ashwin K O", role: "Technical Officer", image: "/execom/24-25/ASHWIN_TO.webp"}
                ]
            },
            {
                title: "Creative Team",
                members: [
                    { name: "Ashwin Sreenivasan", role: "Creative Officer", image: "/execom/24-25/ASHWIN_CO.webp",linkedin: "https://www.linkedin.com/in/ashwin-sreenivasan-04b96827b/" },
                    { name: "Chris Alex", role: "Creative Officer", image: "/execom/24-25/CHRIS_CO.webp",linkedin: "https://www.linkedin.com/in/chris-oommen-alex/" },
                    { name: "Joel Varghese", role: "Creative Officer", image: "/execom/24-25/joel_varghese.webp",linkedin: "https://www.linkedin.com/in/joel-varghese-/" },
                    { name: "Pooja Shibu", role: "Creative Officer", image: "/execom/24-25/pooja_shibu.webp",linkedin: "https://www.linkedin.com/in/pooja-shibu-888654224/" },
                    { name: "Ashwin Joseph A", role: "Creative Officer", image: "/execom/24-25/ashwin_CO(1).webp",linkedin: "https://www.linkedin.com/in/ashwin-joseph-a-922884353/" },
                ]
            },
            {
                title: "Operations Team",
                members: [
                    { name: "Eilin Kennedy", role: "Operating Officer", image: "/execom/24-25/EILIN_OO.webp",linkedin: "https://www.linkedin.com/in/eilin-kennedy-97ba47291/" },
                    { name: "Vasudev Nair P", role: "Operating Officer", image: "/execom/24-25/JOVIT_TO.webp",linkedin: "https://www.linkedin.com/in/vasudevnairp/" },
                ]
            },
            {
                title: "Skills Team",
                members: [
                    { name: "Andrea Tresa Tom", role: "Skills Officer", image: "/execom/24-25/ANDREA_SO.webp",linkedin: "https://www.linkedin.com/in/andreatresatom/" },
                    { name: "Basil Vazhathottathil", role: "Skills Officer", image: "/execom/24-25/BASIL_SO.webp",linkedin: "https://www.linkedin.com/in/basil-vazhathottathil/" },
                ]
            },
            {
                title: "Marketing Team",
                members: [
                    { name: "Sneha Prasanth", role: "Marketing Officer", image: "/execom/24-25/sneha_prasanth.webp",linkedin: "https://www.linkedin.com/in/snehaprasanth/" },
                ]
            },
            {
                title: "Vibes Team",
                members: [
                    { name: "Angel Maria", role: "Vibes Officer", image: "/execom/24-25/ANGEL_VO.webp",linkedin: "https://www.linkedin.com/in/angel-maria-5474302b1/" },
                ]
            },
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
    },
    {
        year: "22/23",
        leads: [
            {
                name: "Sarju S",
                role: "IEDC Nodal Officer",
                image: "",
                bio: "Guiding the institution's innovation and entrepreneurship ecosystem.",
                linkedin: "#",
                email: "sarju@sjcetpalai.ac.in",
                letter: "S"
            },
            {
                name: "Arun Alex",
                role: "CEO",
                email: "#",
                letter: "A",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Rajat Mathew",
                role: "CTO",
                email: "#",
                letter: "R",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Sreelakshnmi Madhu",
                role: "COO",
                email: "#",
                letter: "S",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Rahul  Surendran",
                role: "CCO",
                email: "#",
                letter: "R",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Abhijith E S",
                role: "CFO",
                email: "#",
                letter: "A",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Jeiddon  Grill Shajan",
                role: "CMO",
                email: "#",
                letter: "J",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Jerin Jacob",
                role: "CSO",
                email: "#",
                letter: "J",
                bio: "",
                linkedin: "#",
                image: ""
            },

        ],
        teamSections: [
            {
                title: "Technical Team",
                members: [
                    { name: "Rajath Sandeep", role: "Technical Officer", image:"",  linkedin:"#" },
                    { name: "Alvin Dennis", role: "Technical Officer", image:"",linkedin:"#" },
                ]
            },
            {
                title: "Creative Team",
                members: [
                    { name: "Anto Sabastain", role: "Creative Officer", image: "",linkedin: "" },
                    { name: "Anand Krishna", role: "Creative Officer", image: "",linkedin: "" },
                    { name: "Mubeena S", role: "Creative Officer", image: "",linkedin: "" },
                ]
            },
            {
                title: "Operations Team",
                members: [
                    { name: "Anu Rajesh", role: "Operating Officer", image: "",linkedin: "" },
                    { name: "Kennith Joseph", role: "Operating Officer", image: "",linkedin: "" },
                    { name: "Harichand M Ramesh", role: "Operating Officer", image: "",linkedin: "" },
                ]
            },
            {
                title: "Skills Team",
                members: [
                    { name: "Devanandha S", role: "Skills Officer", image:"",linkedin:"#" },
                    { name: "Jesvin C Jess", role: "Skills Officer", image:"",linkedin:"#" },
                    { name: "Melissa Manoj Thondoli", role: "Skills Officer", image:"",linkedin:"#" },
                ]
            },
            {
                title: "Marketing Team",
                members: [
                    { name: "Vishnu CR", role: "Marketing Officer", image:"",linkedin:"#" },
                    { name: "Nikhil Jose", role: "Marketing Officer", image:"",linkedin:"#" },
                    { name: "Delna K Jose", role: "Marketing Officer", image:"",linkedin:"#" },
                ]
            },
            {
                title: "Finance Team",
                members: [
                    { name: "Deena Maria jimson", role: "Finance Officer", image:"",linkedin:"#" },
                ]
            },
        ]
    },
    {
        year: "21/22",
        leads: [
            {
                name: "Sarju S",
                role: "IEDC Nodal Officer",
                image: "",
                bio: "Guiding the institution's innovation and entrepreneurship ecosystem.",
                linkedin: "#",
                email: "sarju@sjcetpalai.ac.in",
                letter: "S"
            },
            {
                name: "Arun Alex",
                role: "IEDC Lead",
                email: "#",
                letter: "A",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Tom Thomas",
                role: "CTO",
                email: "#",
                letter: "T",
                bio: "",
                linkedin: "#",
                image: ""
            },
            {
                name: "Merin Alex",
                role: "COO",
                email: "#",
                letter: "M",
                bio: "",
                linkedin: "https://www.linkedin.com/in/merinalex23/",
                image: "/execom/21-22/Merin_Alex.webp"
            },
            {
                name: "Joe Martin",
                role: "CCO",
                email: "#",
                letter: "J",
                bio: "",
                linkedin: "https://www.linkedin.com/in/joe-martin-4685351b6/",
                image: "/execom/21-22/Joe_Martin.webp"
            },
            {
                name: "Sandra Pramod",
                role: "CFO",
                email: "#",
                letter: "S",
                bio: "",
                linkedin: "https://www.linkedin.com/in/sandrapramod/",
                image: "/execom/21-22/sandra_pramode.webp"
            },
            {
                name: "Parvathy S Nath",
                role: "CMO",
                email: "#",
                letter: "J",
                bio: "",
                linkedin: "https://www.linkedin.com/in/parvathy-s-nath/",
                image: "/execom/21-22/Parvathy_S_Nath.webp"
            },
            {
                name: "Rahul Surendran",
                role: "Design Lead",
                email: "#",
                letter: "R",
                bio: "",
                linkedin: "https://www.linkedin.com/in/rahul-surendran-a749461aa/",
                image: ""
            },
            {
                name: "Anna Thomas",
                role: "Community Lead",
                email: "#",
                letter: "A",
                bio: "",
                linkedin: "https://www.linkedin.com/in/theannathomas/",
                image: "/execom/21-22/Anna_Thomas.webp"
            },
            

            
        ],
        teamSections: [
            {
                title: "IPR Coordinator",
                members: [
                    {
                        name: "Jaidon Gill Shajan",
                        role: "IPR Coordinator",
                        linkedin: "https://www.linkedin.com/in/jaidon-gill-shajan/",
                        image: "/execom/21-22/Jaidon_Gill.webp"
                    },
                ]
            },
            {
                title: "Internship Coordinator",
                members: [
                    {
                        name: "Sidharth Ganesh",
                        role: "Internship Coordinator",
                        linkedin: "",
                        image: ""
                    },
                ]
            },
            {
                title: "Community Team",
                members: [
                    {
                        name: "Albin Sebastian",
                        role: "Co Lead",
                        linkedin: "",
                        image: ""
                    },
                ]
            }
        ]
    },
    {
        year: "20/21",
        leads: [
            {
                name: "Gouri S Kumar",
                role: "Chief Executive Officer",
                image: "/execom/20-21/gouri_s_kumar.png",
                bio: "Leading the executive committee and strategic initiatives.",
                linkedin: "https://www.linkedin.com/in/gouri-sreekumar/",
                email: "",
                letter: "G"
            },
            {
                name: "Joe Martin",
                role: "Chief Finance & Technical Officer",
                image: "/execom/20-21/joe_martin.png",
                bio: "Handling financial planning and future tech initiatives.",
                linkedin: "https://www.linkedin.com/in/joe-martin-4685351b6/",
                email: "",
                letter: "J"
            },
            {
                name: "Ashly Sibichan",
                role: "Chief Operating Officer",
                image: "/execom/20-21/ashly_sebastian.png",
                bio: "Managing operations and internal processes.",
                linkedin: "https://www.linkedin.com/in/ashly-sibichan/",
                email: "",
                letter: "A"
            },
            {
                name: "Andrea Antony",
                role: "Chief Marketing Officer",
                image: "/execom/20-21/andrea_antony.png",
                bio: "Driving marketing strategies and outreach programs.",
                linkedin: "https://www.linkedin.com/in/andreaantony/",
                email: "",
                letter: "A"
            },
            {
                name: "Shinu Saju",
                role: "Chief Technical Officer",
                image: "/execom/20-21/shinu_saju.png",
                bio: "Fostering technological innovation and technical teams.",
                linkedin: "",
                email: "",
                letter: "S"
            },
            {
                name: "Johan Issac",
                role: "Chief Creative Officer",
                image: "/execom/20-21/johan_issac.png",
                bio: "Overseeing creative direction and design execution.",
                linkedin: "https://www.linkedin.com/in/johanissac/",
                email: "",
                letter: "J"
            },
            {
                name: "Lija Alex",
                role: "Chief Social Officer",
                image: "/execom/20-21/lija_alex.png",
                bio: "Managing social responsibility and community impact initiatives.",
                linkedin: "https://www.linkedin.com/in/lijaalex123/",
                email: "",
                letter: "L"
            }
        ],
        teamSections: [
            {
                title: "Finance Team",
                members: [
                    { name: "Alana Benny", role: "Finance Officer", image: "/execom/20-21/alana_benny.jpg", linkedin: "https://www.linkedin.com/in/alanabenny/" },
                    { name: "Amalu Rajan", role: "Finance Officer", image: "/execom/20-21/amalu_rajan.jpg", linkedin: "https://www.linkedin.com/in/amalurajan/" }
                ]
            },
            {
                title: "Operations Team",
                members: [
                    { name: "Basil Philip Isaac", role: "Operating Officer", image: "/execom/20-21/basil_philip.png", linkedin: "https://www.linkedin.com/in/basilphilip/" },
                    { name: "Arun Alex", role: "Operating Officer", image: "/execom/20-21/arun_alex.png", linkedin: "https://www.linkedin.com/in/arun-alex-6b9a24191/" },
                    { name: "Sandra Pramod", role: "Operating Officer", image: "/execom/20-21/sandra_pramod.png", linkedin: "https://www.linkedin.com/in/sandrapramod/" }
                ]
            },
            {
                title: "Marketing Team",
                members: [
                    { name: "Rinu Mathew", role: "Marketing Officer", image: "/execom/20-21/rinu_mathew.png", linkedin: "https://www.linkedin.com/in/rinumathews/" },
                    { name: "Anu Jose", role: "Marketing Officer", image: "/execom/20-21/anu_jose.png", linkedin: "https://www.linkedin.com/in/anu-jose-3785aa1a9/" },
                    { name: "Arun K", role: "Marketing Officer", image: "/execom/20-21/arun_k.png", linkedin: "https://www.linkedin.com/in/linkeiarun/" },
                    { name: "Sreelakshmi Madhu", role: "Marketing Officer", image: "/execom/20-21/sreelakshmi_madhu.png", linkedin: "" }
                ]
            },
            {
                title: "Technical Team",
                members: [
                    { name: "Kennith Philips", role: "Technical Officer (Hackathons)", image: "/execom/20-21/kennith_philips.png", linkedin: "https://www.linkedin.com/in/kenn850/" },
                    { name: "Aiswarya Raju", role: "Technical Officer (Women In Design)", image: "/execom/20-21/aiswarya_raju.png", linkedin: "https://www.linkedin.com/in/aiswarya-raju/" },
                    { name: "Adithya Ramesh", role: "Technical Officer (AI & ML)", image: "/execom/20-21/adithya_ramesh.png", linkedin: "https://www.linkedin.com/in/adithya-ramesh-34b66417a/" },
                    { name: "Tom Thomas", role: "Technical Officer (Maker Space)", image: "/execom/20-21/tom_thomas.jpg", linkedin: "https://www.linkedin.com/in/tom-thomas-06695b92/" },
                    { name: "Abraham Reji", role: "Technical Officer (Foss Cell)", image: "/execom/20-21/abraham_reji.png", linkedin: "" }
                ]
            },
            {
                title: "Creative Team",
                members: [
                    { name: "Christy Varghese", role: "Creative Officer", image: "/execom/20-21/christy_varghese.png", linkedin: "https://www.linkedin.com/in/christy-varghese/" },
                    { name: "Teena Tomy", role: "Creative Officer", image: "/execom/20-21/teena_tomy.png", linkedin: "https://www.linkedin.com/in/teenatomy129/" },
                    { name: "Rahul Surendran", role: "Creative Officer", image: "/execom/20-21/rahul_surendran.png", linkedin: "https://www.linkedin.com/in/rahul-surendran-a749461aa/" }
                ]
            },
            {
                title: "Social Team",
                members: [
                    { name: "Tobin Thomson", role: "Social Officer", image: "/execom/20-21/tobin_thomason.png", linkedin: "https://www.linkedin.com/in/tobin-thomson-8600961aa/" },
                    { name: "Parvathy S Nath", role: "Social Officer", image: "/execom/20-21/parvathy_s_nath.jpg", linkedin: "https://www.linkedin.com/in/parvathy-s-nath/" },
                    { name: "Roshan Siby", role: "Social Officer", image: "/execom/20-21/roshan_siby.png", linkedin: "https://www.linkedin.com/in/roshan-siby/" },
                    { name: "Anitta Mary Thomas", role: "Social Officer", image: "/execom/20-21/anitta_mary.png", linkedin: "https://www.linkedin.com/in/anitta-mary-thomas-b348aa1a5/" },
                    { name: "Deepthi Mary John", role: "Social Officer", image: "/execom/20-21/deepthi_mary.png", linkedin: "" }
                ]
            }
        ]
    },
    {
        year: "19/20",
        leads: [
            {
                name: "Vishal Thomas Payikkad",
                role: "Chief Executive Officer",
                image: "",
                bio: "Leading the executive committee and strategic initiatives.",
                linkedin: "",
                email: "",
                letter: "V"
            },
            {
                name: "Seby Antony",
                role: "Chief Finance Officer",
                image: "/execom/19-20/seby_antony.png",
                bio: "Handling financial planning and resource management.",
                linkedin: "https://www.linkedin.com/in/seby-antony-b32b50169",
                email: "",
                letter: "S"
            },
            {
                name: "Andrea Antony",
                role: "Chief Marketing Officer",
                image: "/execom/19-20/andrea_antony.png",
                bio: "Driving marketing strategies and outreach programs.",
                linkedin: "https://www.linkedin.com/in/andreaantony",
                email: "",
                letter: "A"
            },
            {
                name: "Ouseppachan George",
                role: "Chief Creative Officer",
                image: "/execom/19-20/ouseppachan_george.png",
                bio: "Overseeing creative direction and design execution.",
                linkedin: "https://www.linkedin.com/in/ouseppachengeorge-3049/",
                email: "",
                letter: "O"
            },
            {
                name: "Gouri S Kumar",
                role: "Chief Skill Officer",
                image: "/execom/19-20/gouri_s_kumar.png",
                bio: "Overseeing skill development and training programs.",
                linkedin: "https://www.linkedin.com/in/gouri-sreekumar",
                email: "",
                letter: "G"
            },
            {
                name: "Kenneth Philips",
                role: "Chief Technical Officer",
                image: "/execom/19-20/kenneth_philips.png",
                bio: "Fostering technological innovation and technical teams.",
                linkedin: "https://www.linkedin.com/in/kenn850",
                email: "",
                letter: "K"
            },
            {
                name: "Nissi Samuel",
                role: "Chief Operating Officer",
                image: "",
                bio: "Managing operations and internal processes.",
                linkedin: "https://www.linkedin.com/in/nissi-s-565570183",
                email: "",
                letter: "N"
            }
        ],
        teamSections: []
    },
    {
        year: "17/18",
        leads: [
            {
                name: "Sheyby Babu",
                role: "Chief Skill Officer",
                image: "/execom/17-18/sheyby.jpg",
                bio: "Overseeing skill development and training programs.",
                linkedin: "https://www.linkedin.com/in/shebymariambabu",
                email: "",
                letter: "S"
            },
            {
                name: "Neethu George",
                role: "Chief Operating Officer",
                image: "/execom/17-18/neethu.jpg",
                bio: "Managing operations and internal processes.",
                linkedin: "https://www.linkedin.com/in/neethu-george-892187146",
                email: "",
                letter: "N"
            },
            {
                name: "Anto P Biju",
                role: "Chief Finance Officer",
                image: "",
                bio: "Handling financial planning and resource management.",
                linkedin: "",
                email: "",
                letter: "A"
            },
            {
                name: "Cyril Cherian",
                role: "Chief Marketing Officer",
                image: "/execom/17-18/cyril.jpg",
                bio: "Driving marketing strategies and outreach programs.",
                linkedin: "https://www.linkedin.com/in/xcyrilcherian",
                email: "",
                letter: "C"
            },
            {
                name: "Sandeep Salmon",
                role: "Chief Creative Officer",
                image: "/execom/17-18/sandeep.jpg",
                bio: "Overseeing creative direction and design execution.",
                linkedin: "https://www.linkedin.com/in/sandeepsalmon",
                email: "",
                letter: "S"
            },
            {
                name: "Ebin Alex",
                role: "Chief Technical Officer",
                image: "/execom/17-18/ebin.jpg",
                bio: "Fostering technological innovation and technical teams.",
                linkedin: "https://www.linkedin.com/in/ebin-alex",
                email: "",
                letter: "E"
            },
            {
                name: "Bony Antony",
                role: "Chief Executive Officer",
                image: "",
                bio: "Leading the executive committee and strategic initiatives.",
                linkedin: "https://www.linkedin.com/in/bonny-mathew-antony-mech-430586134",
                email: "",
                letter: "B"
            }
        ],
        teamSections: []
    },
];
