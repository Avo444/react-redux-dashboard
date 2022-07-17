export function projectsReducer(state=[], action) {
    
    return state;
}

export const initialProjects = [
    {
        id: 1,
        name: 'Web Design',
        created_at: 'December 10, 2020',
        process: 30,
        owner: 'Avo Manukyan',
        participants: [
            {
                id: 3,
            },
            {
                id: 2,
            }
        ]
    },
    {
        id: 2,
        name: 'Web Development',
        created_at: 'December 10, 2020',
        process: 20,
        owner: 'Mike Turner',
        participants: [
            {
                id: 4,
            },
            {
                id: 3,
            }
        ]
    },
    {
        id: 3,
        name: 'Mobile Application Developement',
        created_at: 'December 10, 2020',
        process: 60,
        owner: 'Richi Martinez',
        participants: [
            {
                id: 4,                
            },
            {
                id: 2,
            }
        ]
    },
    {
        id: 4,
        name: 'Graphic Design',
        created_at: 'December 10, 2020',
        process: 5,
        owner: 'John Jackson'
    },
    {
        id: 5,
        name: 'Animator',
        created_at: 'December 10, 2020',
        process: 60,
        owner: 'Avo Manukyan'
    },
    {
        id: 6,
        name: 'Data Scientist',
        created_at: 'December 10, 2020',
        process: 55,
        owner: 'Anime',
        participants: [
            {
                id: 4,
            },
            {
                id: 1,
            }
        ]
    },
    {
        id: 7,
        name: 'Game Development',
        created_at: 'December 10, 2020',
        process: 100,
        owner: 'Author Sites'
    },
    {
        id: 8,
        name: 'Desktop Application Development',
        created_at: 'December 10, 2020',
        process: 100,
        owner: 'Tester Testinger'
    },
    {
        id: 9,
        name: 'C++ Development',
        created_at: 'December 10, 2020',
        process: 100,
        owner: 'For Tester'
    },
];

export function GetProjects(state) {
    return state.Projects;
}
export function ProcessCount(state) {
    return state.Projects.filter((item) => item.process !== 100).length;
}

// export function DeleteProject(id, state) {
//     return state.Projects.filter((proj) => proj.id !== id);
    
// }