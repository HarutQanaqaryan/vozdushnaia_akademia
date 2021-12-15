import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { patterns } from "../service/regex-patterns";

export interface InitialStateTypes {
    name: { text: string, isValid: boolean },
    phone: { text: string, isValid: boolean },
    validInput: boolean,
    isForm: boolean,
    delivered: boolean,
    failed: boolean,
    isOpenedModal: boolean,
}


const initialState: InitialStateTypes = {
    name: { text: "", isValid: false },
    phone: { text: "", isValid: false },
    validInput: false,
    isForm: true,
    delivered: false,
    failed: false,
    isOpenedModal: false,
};


export const feedBackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        addName(state, action: PayloadAction<{ text: string, isValid: boolean }>) {
            state.name = action.payload
        },
        addPhone(state, action: PayloadAction<{ text: string, isValid: boolean }>) {
            state.phone = action.payload
        },
        IsValidInput(state, action: PayloadAction<boolean>) {
            state.validInput = action.payload
        },
        isFormModal(state, action: PayloadAction<boolean>) {
            state.isForm = action.payload
        },
        modalOpen(state, action: PayloadAction<boolean>) {
            state.isOpenedModal = action.payload
        },
        sendMessageSucces(state, action: PayloadAction<boolean>){
            state.delivered = action.payload
        },
        sendMessageError(state, action: PayloadAction<boolean>){
            state.failed = action.payload
        }
    }
})

export default feedBackSlice.reducer;

