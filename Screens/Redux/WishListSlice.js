import { createSlice } from "@reduxjs/toolkit";


const initialState = {
        invoiceId: "",
        source: "app",
        note: "",
        warehouse: "62b5b575b4facb87eef3b47c",
        FavoritesProducts: [],
        returnProducts: [],
        returnCal: {
          totalItem: 0,
          total: 0,
          vatAmount: 0,
          grossTotal: 0,
          grossTotalRound: 0,
          point: 0,
        },
        returnInvoice: null,
        paidAmount: {
          cash: 0,
          mfs: {
            name: "",
            amount: 0,
          },
          card: {
            name: "",
            amount: 0,
          },
          point: 0,
        },
        changeAmount: 0,
        totalReceived: 0,
        grossTotal: 0,
        grossTotalRound: 0,
        totalItem: 0,
        total: 0,
        vat: 0,
        point: {
          old: 0,
          new: 0,
        },
        todayPoint: 0,
        discount: 0,
        promo_discount: 0,
        billerId: "63dfffdd1edc4e4632e8bcf4",
        delivery: {
          address: "",
          phone: "",
        },
        customerId: "",
        updateUser: "63dfffdd1edc4e4632e8bcf4",
        status: "order"
};

const WishListSlice = createSlice ({
    name: "Wishlist",
    initialState,
    reducers:{
        addFavoriteProduct: (state, action) => {
            const item = action.payload;
            const FavoritesProduct = {
              id: item._id,
              priceId: item.priceList[0]._id,
              name: item.name,
              article_code: item.article_code,
              ean: item.ean,
              mrp: item.priceList[0].mrp,
              qty: 1,
              tp: item.priceList[0].tp,
              vat: 0,
              unit: item.unit,
              supplier: item.priceList[0].supplier,
              order: 1,
              photo: item.photo,
            };
          
            console.log(FavoritesProduct);
          
            return {
              ...state,
              FavoritesProducts: [...state.FavoritesProducts, FavoritesProduct],
            };
          }
          
    },
})
export const {addFavoriteProduct} = WishListSlice.actions;
export default WishReducer =  WishListSlice.reducer