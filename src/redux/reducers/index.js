import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SEARCH } from "../actions";

ADD_TO_FAVORITES;

const initialState = {
    companies: [],
};

const initialStateSearch = {
    data: [],
};

export const searchReducer = (currentState = initialStateSearch, action) => {
    switch (action.type) {
        case SEARCH: {
            return {
                ...currentState,
                data: action.payload,
            };
        }
        default:
            return currentState;
    }
};

export const mainReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            const company = action.payload;
            if (currentState.companies.includes(company)) {
                return currentState;
            } else
                return {
                    ...currentState,

                    companies: [...currentState.companies, company],
                };
        }

        case REMOVE_FROM_FAVORITES:
            return {
                ...currentState,

                companies: currentState.companies.filter((company) => {
                    return company !== action.payload;
                }),
            };

        default:
            return currentState;
    }
};
