import { logoutHandler } from "../../Utils/logout";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const isTokenPresent = localStorage.getItem("token") ? true : false;
const initialState = {
  isLogin: isTokenPresent,
  tokenValue: localStorage.getItem("token"),
};

export const login = createAsyncThunk("login/user", async (userDetails) => {
  return await axios.post("/api/auth/login", {
    email: userDetails.email,
    password: userDetails.password,
  });
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {},
    logOutUser: (state, action) => {
      logoutHandler();
      state.isLogin = false;
      action.payload.navigate("/");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.data.encodedToken)
      );
      state.isLogin = true;
      state.tokenValue = JSON.stringify(data.encodedToken);
      //   if isLogin becomes true , navigate to productListing in the component logic
    });
  },
});
export default authSlice;
export const { logOutUser } = authSlice.reducer;
