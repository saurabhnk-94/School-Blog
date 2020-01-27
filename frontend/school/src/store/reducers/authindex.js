import * as actiontypes from '../actions/actiontypes';
// import { updatedObject, updateObject } from '../utility';


const initialState = {
    token: null,
    error: null,
}

// const authStart = (state, action) => {
//     return updatedObject(state, {
//         error: null,
//     });
// }

// // const authSuccess = (state, action) => {
// //     return updateObject(state, {
// //         token: action.token,
// //         error: null
// //     })
// // }

// const authFail = (state, action) => {
//     return updateObject(state, {
//         error: action.error
//     })
// }

// // const authLogout = (state, action) => {
// //     return updateObject(state, {
// //         token: null
// //     })
// // }

const reducer = (state = initialState, action) => {
    console.log("reducers", action.token)
    switch (action.type) {
        case actiontypes.AUTH_START:
            return {...state, error: null };
        case actiontypes.AUTH_SUCCESS:
            return {...state, token: action.token };
        case actiontypes.AUTH_FAIL:
            return {...state, error: action.error };
        case actiontypes.AUTH_LOGOUT:
            return {...state, token: null };
        default:
            return state;
    }
}

export default reducer;