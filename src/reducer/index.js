import { createStore } from "redux";

const defaultState = {
  posts: [],
  mainView : true
};

const blogs = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      return { ...state, posts: [...state.posts, action.posts] };
    case "SWITCH_PAGE":
        return {...state, mainView: !state.mainView}
    default:
      return state;
  }
};

const store = createStore(blogs);

export default store;
