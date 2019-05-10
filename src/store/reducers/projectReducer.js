const initState = {
    projects: [
        {
            id: '1', 
            title: 'help me find Pluto', 
            ontent: 'blah blah blah'
        },
        {
            id: '2', 
            title: 'collect all the stars', 
            content: 'blah blah blah'
        },
        {
            id: '3', 
            title: 'blast off in 3..2..', 
            content: 'blah blah blah'
        }
    ]
}

const projectReducer = (state=initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer;