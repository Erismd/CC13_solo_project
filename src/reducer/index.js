import { createStore } from "redux";

const defaultState = {
  posts: [],
  mainView: true,
  contactView: true,
  editcontents: "",
};

const blogs = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      return { ...state, posts: [...state.posts, action.posts] };
    case "SWITCH_PAGE":
      return { ...state, mainView: !state.mainView };
    case "ADD_CONTENTS":
      return { ...state, editcontents: action.editcontents };
    case "SWITCH_CONTACT":
      return { ...state, contactView: !state.contactView };
    default:
      return state;
  }
};

const store = createStore(blogs);

export default store;
