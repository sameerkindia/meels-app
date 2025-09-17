import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from './favroites';

export const store = configureStore({
    reducer: {
        favoriteMeals: favoriteReducer
    }
})