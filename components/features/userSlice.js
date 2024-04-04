import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  emailid: "",
  name: "",
  id:"",
  username:""
}
export const userSlice = createSlice({
  name: 'user_info',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.emailid = action.payload.emailid
      state.name = action.payload.name
      state.id = action.payload.id
      state.username = action.payload.username
      
    },
    unSetUserInfo: (state, action) => {
      state.phoneno = action.payload.phoneno
      state.name = action.payload.name
      state.id = action.payload.id
      state.username = action.payload.username
      
    },
  }
})

export const { setUserInfo, unSetUserInfo } = userSlice.actions
export default userSlice.reducer