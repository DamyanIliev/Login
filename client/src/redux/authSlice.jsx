import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    account: JSON.parse(window.localStorage.getItem("account")) || {},
    edit:false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action) => {
            state.account = action.payload
            localStorage.setItem("account", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.account = {};
            localStorage.removeItem("account");
        },
        updateProfile: (state, action) => {
            
        }
    }
});

export default authSlice.reducer;

export function AccountLogin(account){
    return (dispatch, getState) => {
        dispatch(authSlice.actions.login(account));
      };
}

export function AccountLogout(){
    return (dispatch, getState) => {
        dispatch(authSlice.actions.logout());
      };
}

export function UpdateAccount(dispatch,getState){

}