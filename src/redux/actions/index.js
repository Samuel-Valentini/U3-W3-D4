export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SEARCH = "SEARCH";

export const actionRemoveFromFavorites = (company) => {
    return { type: REMOVE_FROM_FAVORITES, payload: company };
};

export const actionAddToFavorite = (company) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: company,
    };
};

export const actionSearch = (data) => {
    return {
        type: SEARCH,
        payload: data,
    };
};

export const getActionSearch = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(baseEndpoint + query + "&limit=20");
            if (response.ok) {
                const { data } = await response.json();
                dispatch(actionSearch(data));
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        }
    };
};
