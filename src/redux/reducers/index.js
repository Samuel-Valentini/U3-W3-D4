import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from "../actions";

ADD_TO_FAVORITES;

const initialState = {
    favorite: {
        companies: [],
    },
};

const mainReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            const company = action.payload;
            if (currentState.favorite.companies.includes(company)) {
                return currentState;
            } else
                return {
                    ...currentState,
                    favorite: {
                        ...currentState.favorite,
                        companies: [
                            ...currentState.favorite.companies,
                            company,
                        ],
                    },
                };
        }

        case REMOVE_FROM_FAVORITES:
            return {
                ...currentState,
                favorite: {
                    ...currentState.favorite,
                    companies: currentState.favorite.companies.filter(
                        (company) => {
                            return company !== action.payload;
                        },
                    ),
                },
            };

        default:
            return currentState;
    }
};

export default mainReducer;
