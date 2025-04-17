import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  selectedConversationId?: string;
}

const initialState: AppState = {
  selectedConversationId: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedConversationId: (state, action: PayloadAction<string>) => {
      state.selectedConversationId = action.payload;
    },
  },
});

export const { setSelectedConversationId } = appSlice.actions;
export default appSlice.reducer;
