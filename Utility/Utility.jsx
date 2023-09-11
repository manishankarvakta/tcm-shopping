import { useDispatch } from "react-redux";
import { addProduct } from "../Screens/Redux/CartSlice";

const Utility = () => {
  const dispatch = useDispatch();

  const addTocart = (item) => {
    const product = {
      id: item._id,
      priceId: item?.priceList[0]?._id,
      name: item.name,
      article_code: item.article_code,
      ean: item.ean,
      mrp: item?.priceList[0]?.mrp,
      qty: 1,
      tp: item?.priceList[0]?.tp,
      vat: 0,
      unit: item.unit,
      supplier: item?.priceList[0]?.supplier,
      order: 1,
      photo: item.photo,
    };
    dispatch(addProduct(product));
    // console.log(product)
  };

  return { addTocart };
};

export default Utility;
