import { createSlice } from "@reduxjs/toolkit";
import { isWithinInterval, parseISO } from "date-fns";
const intialState = {
  returned: [],
};

const init = {
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
  status: "order",
}

const cartCalculation = (products) => {
  let grossTotal = 0;
  let total = 0;
  let todayPoint = 0;
  let totalItem = 0;
  let vat = 0;
  let grossTotalRound = 0;
  if (products?.length > 0) {
    products.map((item) => {
      console.log("item", item)
      if (item?.promo_price > 0) {
        if (item?.promo_start && item?.promo_end) {
          const isBetween = isWithinInterval(new Date(), { start: parseISO(item?.promo_start), end: parseISO(item?.promo_end) });
          if (isBetween) {
            if (item.promo_type === true) {
              total = total + ((parseFloat(item.mrp) - ((item.mrp * parseFloat(item.promo_price)) / 100)) * parseFloat(item.qty));
              vat = vat + ((((parseFloat(item.mrp) - ((parseFloat(item.mrp) * parseFloat(item.promo_price)) / 100)) * parseFloat(item.qty)) * parseFloat(item.vat)) / 100)
              grossTotal = total + vat;
              totalItem = totalItem + item.qty;

            } else {
              total = total + ((parseFloat(item.mrp) - parseFloat(item?.promo_price)) * parseFloat(item.qty));
              vat = vat + ((((parseFloat(item.mrp) - parseFloat(item?.promo_price)) * parseFloat(item.qty)) * parseFloat(item.vat)) / 100)
              grossTotal = total + vat;
              totalItem = totalItem + item.qty;
            }

          } else {
            console.log("item3", item)
            total = total + item.mrp * item.qty;
            vat = vat + item.qty * ((item.mrp * item.vat) / 100);
            grossTotal = total + vat;
            totalItem = totalItem + item.qty;
          }
        } else {
          console.log("item2", item)
          total = total + item.mrp * item.qty;
          vat = vat + item.qty * ((item.mrp * item.vat) / 100);
          grossTotal = total + vat;
          totalItem = totalItem + item.qty;
        }
      } else {

        total = total + item.mrp * item.qty;
        vat = vat + item.qty * ((item.mrp * item.vat) / 100);
        grossTotal = total + vat;
        totalItem = totalItem + item.qty;
      }

    });
    todayPoint = Math.floor(grossTotal / 100);
    grossTotalRound = Math.ceil(grossTotal);
    console.table(grossTotal, total, todayPoint, totalItem, vat);
  }
  return { grossTotal, total, todayPoint, totalItem, vat, grossTotalRound };
};

export const orderSlice = createSlice({
  name: "order",
  initialState: init,

  reducers: {
    selcetProduct: (state, action) => {
      const { grossTotal, total, todayPoint, grossTotalRound, totalItem, vat } =
        cartCalculation(action.payload);
      return (state = {
        ...state,
        products: action.payload,
        changeAmount: 0,
        total: total,
        grossTotal: grossTotal,
        todayPoint: todayPoint,
        totalItem: totalItem,
        vat: vat,
        point: {
          ...state.point,
          new: state?.point?.old + todayPoint,
        },
        todayPoint: todayPoint,
        totalReceived: grossTotalRound,
        paidAmount: {
          ...state.paidAmount,
          cash: grossTotalRound,
        },
        grossTotalRound: grossTotalRound,
      });
    },
    salePointAmount: (state, action) => {
      state.pointAmount = action.payload;
    },
    setTotalPrice: (state, action) => {
      /*
       * change Ammount
       * grossTotal
       * todayPoint
       * totalItem
       * totalRecieved
       *
       */
      state.total = action.payload;
    },

    totalReceived: (state, action) => {
      state.amountTotalReceived = action.payload;
    },
    totalChangeAmount: (state, action) => {
      state.changeAmount = action.payload;
    },
    selectNote: (state, action) => {
      state.note = action.payload;
    },
    selectCustomerDeliveryAddress: (state, action) => {
      state.delivery = {
        address: action.payload.address,
        phone: action.payload.phone
      };
    },
    selectCustomerInfo: (state, action) => {

      return (state = {
        ...state,
        customerId: action.payload.id,
        point: {
          ...state.point,
          old: action.payload.point,
          new: action.payload.point + state.todayPoint,
        },
      })
      // state.customerId = action.payload;
    },
    reset: () => intialState,
  },
});

export const {
  DataAddSales,
  selcetCustomer,
  selcetProduct,
  saleFinalize,
  saleCashReceived,
  saleChangeAmount,
  saleCard,
  saleCardAmount,
  saleMfsName,
  saleMfsAmount,
  totalReceived,
  totalChangeAmount,
  LastInvoiceId,
  salePointAmount,
  selectCustomerInfo,
  selectCustomerDeliveryAddress,
  selectNote,
  reset,
  setTotalPrice,
} = orderSlice.actions;

export default orderSlice.reducer;
