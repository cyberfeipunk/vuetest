import * as types from './mutation-types'

export default {
  nameAsyn({commit},{age,name}){
    commit(types.SET_NAME,name);
    commit(types.SET_AGE,age);
  },
  setAge(context,age){
    context.commit(types.SET_AGE,age);
  },
  setName(context,name){
    context.commit(types.SET_NAME,name);
  }
};
