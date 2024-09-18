import { createSlice } from "@reduxjs/toolkit";


export const dropSlice = createSlice({
    name: "dragDrop",
    initialState: {
        listCards: [
            {id: 1, text: "Dashboard", icon: "./Dashboard.svg"},
            {id: 2, text: "Banking", icon: "./Banking.svg"},
            {id: 3, text: "Telefonie", icon: "./Telefonie.svg"},
            {id: 4, text: "Accounting", icon: "./Accounting.svg"},
            {id: 5, text: "Verkauf", icon: "./Verkauf.svg"},
            {id: 6, text: "Statistik", icon: "./Statistic.svg"},
            {id: 7, text: "Post Office", icon: "./PostOffice.svg"},
            {id: 8, text: "Administration", icon: "./Administration.svg"},
            {id: 9, text: "Help", icon: "./Help.svg"},
            {id: 10, text: "Warenbestand", icon: "./Warenbestand.svg"},
            {id: 11, text: "Auswahllisten", icon: "./Auswahllisten.svg"},
            {id: 12, text: "Einkauf", icon: "./Einkauf.svg"},
            {id: 13, text: "Rechn", icon: "./Rechn.svg"},
          ]
    },
    reducers: {
        addElements: (state: any, action: any) => {
            state.list.push(action.payload)
        }
    }
})

export const {addElements} = dropSlice.actions

export default dropSlice.reducer