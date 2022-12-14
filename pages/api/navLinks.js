export const data = [
    {
        label: 'Home',
        content: [
            {href: '/', name: ''}
        ],
        type: 'nav link'
    },
    {
        label: 'About',
        content : [
            {href: '/aboutUs', name: 'About Us'},
        ], 
        type: 'nav link' 
    },
    {
        label: 'Labs',
        content : [
            {href: '/labs/DRONE-EDUCATION.5dbbef6317774c24a93f8eee20036dd0', name: 'DRONE EDUCATION'},
            {href: '/labs/DRONE-AS-A-TOOL.55059f54be2c4d45895cd0f8da285d68', name: 'DRONE AS A TOOL'},
            {href: '/labs/DRONE-AS-EVIDENCE.d041c88bf316449ca8d7fb4eec4c3e00', name: 'DRONE AS EVIDENCE'},
            {href: '/labs/DRONE-AS-A-THREAT.985155822d17473291e238d986edd3e6', name: 'DRONE AS A THREAT'},
            // {href: '/tech_for_social_good', name: 'Technology for social good'}
        ],
        type: 'dropdown button'
    },
    // {
    //     label: 'Projects',
    //     content: [
    //         {href: '/irpas', name: 'Institute For Remotely Piloted Aircraft Systems'},
    //         {href: '/tac_community_hub/', name: 'TAC Community Hub'},
    //         {href: '/tac_community_hub/', name: 'Project 774'},
    //         {href: 'https://www.schoolofhardknocks.com.ng/', name: 'School Of HardKnocks'},
    //     ],
    //     type: 'dropdown button'
    // },
    {
        label: 'Publications',
        content: [
            {href: 'https://www.dropbox.com/s/28ma51r9y0vc1pi/smart_policing_concept.pdf?dl=1', name: 'Smart Policing Concepts ( AI & Robotics )'},
            {href: 'https://www.dropbox.com/s/y4vilgjbrw8pk1n/The_Underground_Economy.pdf?dl=1', name: 'The Underground Economy ( Cyber Security & Cyber Defense )'},
            {href: 'https://www.dropbox.com/s/acbrvnvz2ivjhiv/Drone_Compendium_For_TAC_Africa_compressed.pdf?dl=1', name: 'The Drone Book ( Drone & Counter Drone )'},
            {href: 'https://www.dropbox.com/s/sxe1q3q3s4ndx7t/Cryptocurrency_Brochure_Volume_1_1.pdf?dl=1', name: 'Blockchain & Crypto Currency ( Blockchain / Crypto )'},
        ],
        type: 'download'
    },
    {
        label: 'Newsletters',
        content: [
            {href: '/newsletters', name: 'newsletters'}
        ],
        type: 'nav link'
    },  
    // {
    //     label: 'Contact',
    //     content: [
    //         {href: '/contact', name: ''}
    //     ],
    //     type: 'nav link'
    // },
    {
        label: 'blog',
        content: [
            {href: 'blog', name: ''}
        ],
        type: 'button',
        details: {variant: 'primary'}

    },
    {
        label: 'News & Events',
        content: [
            {href: 'tac_events', name: ''}
        ],
        type: 'button',
        details: {variant: 'outline-primary'}
    }

];