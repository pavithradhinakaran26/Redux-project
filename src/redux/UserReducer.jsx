// const userReducer = (state = initialState, action) => {
//   switch (action.type) {

//     case "REGISTER_USER_REQUEST":
//       return {
//         ...state,
//         loading: true,
//       };

//     case "REGISTER_USER_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         users: [...state.users, action.payload], // pudhu user add pannudhu
//       };

//     case "REGISTER_USER_FAILURE":
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default userReducer;


const initialState = {
  users: [],        // existing users list
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "REGISTER_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload], // add new user
      };

    case "REGISTER_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Edit user
    case "EDIT_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "EDIT_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ), // update edited user
      };

    case "EDIT_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // Delete user
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        users: state.users.filter(user => user.id !== action.payload), // remove user by id
      };

    case "DELETE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
