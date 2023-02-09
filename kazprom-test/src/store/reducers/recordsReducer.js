import * as types from '../types'

const initialState = {
  records: [],
}

export const recordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return { ...state, records: [...state.records, action.payload] }
    case types.REMOVE_ITEM:
      return {
        ...state,
        records: state.records.filter((el) => el !== action.payload),
      }
    default:
      return state
  }
}
