import types from "./types";

const initialState = {
    user: null,
    isAuth: false,
    error: "",
    blogList: [],
    article: {},
};

function app(state = initialState, action) {
    const { LOGIN_SUCCESS, LOGIN_FAILURE, BLOG_LIST_SUCCESS, ARTICLE_SUCCESS } = types;

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
                error: "",
            };

        case LOGIN_FAILURE:
            return {
                ...state,
            };

        case BLOG_LIST_SUCCESS:
            return {
                ...state,
                blogList: action.payload,
            };
        case ARTICLE_SUCCESS:
            return {
                ...state,
                article: action.payload,
            };

        default:
            return state;
    }
}

export default app;
