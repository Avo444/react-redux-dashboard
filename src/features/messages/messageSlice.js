export function messageReducer(state=[], action) {

    return state;
}

export const initialMessages = [
    {
        id: 1,
        ownerid: 1,
        message: 'Hello my name is Avo. I am Web Developer and Web Designer',
        date: 'Jul, 16',
        isChecked: false
    },
    {
        id: 2,
        ownerid: 3,
        message: 'Hi My friend :)',
        date: 'Jul, 16',
        isChecked: false
    },
    {
        id: 3,
        ownerid: 4,
        message: 'Hi My friend :)',
        date: 'Jul, 16',
        isChecked: false
    },
    {
        id: 4,
        ownerid: 2,
        message: 'Hi :)',
        date: 'Jul, 16',
        isChecked: false
    },
    {
        id: 5,
        ownerid: 3,
        message: 'Bye :)',
        date: 'Jul, 16',
        isChecked: false
    },
]
export function GetMessages(state) {
    return state.Messages;
}