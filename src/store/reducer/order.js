import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};
const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};

const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)
  });
};
const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const purchaseOrdersStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const purchaseOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};
const purchaseIngredientsFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return purchaseOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return purchaseOrdersSuccess(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return purchaseIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
