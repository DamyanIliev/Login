import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    account: JSON.parse(window.localStorage.getItem("account") ?? {}),
    edit:false
}

export const authSlice = createSlice({
    name: authSlice,
    initialState,
    reducers:{
        login: (state, action) => {
            state.account = action.payload
            localStorage.setItem("account", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.account = null;
            localStorage.removeItem("account");
        },
        updateProfile: (state, action) => {
            
        }
    }
});

export default authSlice.reducer;

export function AccountLogin(dispatch,getState){
    dispatch(authSlice.actions.login)
}

export function AccountLogout(dispatch,getState){
    dispatch(authSlice.actions.logout)
}

export function UpdateAccount(dispatch,getState){

}