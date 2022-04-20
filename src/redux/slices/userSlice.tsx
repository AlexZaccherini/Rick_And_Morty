// redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// project imports
import { User } from "../../models/user";
import { RootState } from "../store";

interface UserSlice {
  user: User;
}

const initialState: UserSlice = {
  user: new User(1, "Alex", "Zaccherini"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
