import { createSlice } from "@reduxjs/toolkit";


const cartCalculation = (products) => {
  let total = 0;
  let vat = 0;
  let grossTotal = 0;
  let totalItem = 0;

  products.map((item) => {
    total = total + item.mrp * item.qty;
    vat = vat + item.qty * ((item.mrp * item.vat) / 100);
    grossTotal = total + vat;
    totalItem = totalItem + item.qty;
  }) 

  return { total, vat, grossTotal, totalItem };

}

const initialState = {
        invoiceId: "",
        source: "app",
        note: "",
        warehouse: "62b5b575b4facb87eef3b47c",
        products: [],
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

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers:{
        addProduct: (state, action) => {
            const item = action.payload;
        const product = {
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
          
            console.log(product);
          
            return {
              ...state,
              products: [...state.products, product],
            };
      },

      selcetProduct: (state, action) => {
        const { grossTotal, total, totalItem, vat } =
          cartCalculation(action.payload);
        return (state = {
          ...state,
         
          total: total,
          grossTotal: grossTotal,
    
          totalItem: totalItem,
          vat: vat,
         

        });
      },
      

          
    },
})
export const {addProduct,selcetProduct} = cartSlice.actions;
export default cartReducer =  cartSlice.reducer