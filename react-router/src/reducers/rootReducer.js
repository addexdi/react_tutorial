const initialState = {
    cards: [
        {id: 1, title: 'Alex', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos perferendis at hic nostrum, fugit tempora assumenda est, ad in recusandae cumque iusto consequuntur maxime minima aperiam cum praesentium similique?'},
        {id: 2, title: 'Willma', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos perferendis at hic nostrum, fugit tempora assumenda est, ad in recusandae cumque iusto consequuntur maxime minima aperiam cum praesentium similique?'},
        {id: 3, title: 'John', body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eos perferendis at hic nostrum, fugit tempora assumenda est, ad in recusandae cumque iusto consequuntur maxime minima aperiam cum praesentium similique?'}
    ],
    users: []
}

const rootReducer = (state = initialState, action) => {
    // console.log(action);
    //When updating the state don't use destructive code
    switch(action.type) {
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id
            })
            return {
                ...state,
                cards: newCard
            }
        case 'FETCH_USER':
            return {
                ...state,
                users: action.payload
            }
            default:
                return state;
    }
}

export default rootReducer;