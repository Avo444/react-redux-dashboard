export function usersReducer(state=[], action) {

    return state;
}

export const initialUsers = [
    {
        id: 1,
        name: 'Avo Manukyan',
        picture: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
        id: 2,
        name: 'Mike Turner',
        picture: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    },
    {
        id: 3,
        name: 'Richi Martinez',
        picture: 'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    },
    {
        id: 4,
        name: 'Rihanna Docklez',
        picture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D',
    }
];

export function getOwner(state) {
    return state.Users;
}