import { Dashboard, Banking, Telephone, Accountig, Verkauf, Statistik, PostOffice, Administration, Help, Warentbestand, Auswahllisten, Einkauf, Rech } from "@/svg/listSVG";
import { createSlice } from "@reduxjs/toolkit";


export const dropSlice = createSlice({
    name: "dragDrop",
    initialState: {
        listCards: [
            {id: 1, text: "Dashboard", icon: Dashboard},
            {id: 2, text: "Banking", icon: Banking},
            {id: 3, text: "Telefonie", icon: Telephone},
            {id: 4, text: "Accounting", icon: Accountig},
            {id: 5, text: "Verkauf", icon: Verkauf},
            {id: 6, text: "Statistik", icon: Statistik},
            {id: 7, text: "Post Office", icon: PostOffice},
            {id: 8, text: "Administration", icon: Administration},
            {id: 9, text: "Help", icon: Help},
            {id: 10, text: "Warenbestand", icon: Warentbestand},
            {id: 11, text: "Auswahllisten", icon: Auswahllisten},
            {id: 12, text: "Einkauf", icon: Einkauf},
            {id: 13, text: "Rechn", icon: Rech},
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