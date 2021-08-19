import { createStore, combineReducers } from "redux";
import shadowReducer from "./amount/reducer";

const reducer = combineReducers({
    shadowReducer,
    //... y todos los demás reducers.
})

const store = createStore(
    reducer, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export default store

/*


En el component:
import { connect } from "react-redux";
import { deposit, withdraw } from ...

const mapStateToProps = (state) => {
    return{
        amount: state.amountReducer.amount
    }
}

const Component = ({amount, deposit, withdraw}) => {
    ....
}


export default connect(mapStateToProps,{deposit, withdraw})(Component)



connect --> 
1er parametro: recibir
2do parametro: enviar
*/