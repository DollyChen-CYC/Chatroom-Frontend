import { apiHelper } from '../utils/apiHelper.js';

export default {
  signIn({ account, password }) {
    return apiHelper.post('/signin', { account, password})
  },
}