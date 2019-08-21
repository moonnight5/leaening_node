const { createStore,combineReducers } = require('redux');

// action.type 是个常量 决定了这次dispatch要干什么
// reducer 可以收到action的信息
const add = {
  type: 'INCREMENT'
}
const reduce = {
  type: 'DECREMENT'
}
// 加 ADD_FILM
// type + payload
function filmReducer (state = [],action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state,action.film];
    default:
      return state;
  }
}
function reducer (state,action) {
  // console.log('reducer触发了'); 
  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    return 0;
  }
}

const index = combineReducers({
  count: reducer,
  films: filmReducer
})

// createStore只接收reducer
// const store = createStore(reducer);
const store = createStore(index);
// console.log(store.getState());  //0
store.subscribe(() => {
  console.log(store.getState())
})    //每修改一次就触发一次
store.dispatch(add);
store.dispatch(add);
// console.log(store.getState());
store.dispatch(reduce);
// console.log(store.getState());
store.dispatch({
  type: 'ADD_FILM',
  a: 1,
  b: 2,
  id: 0,
  film: {name: '狮子王'}
})


