// import {
// 	GET_USERINFO,
// 	SAVE_ADDRESS
// } from './mutation-types.js'

// export default{
//     async getUserInfo({
// 		commit,
// 		state
// 	}) {

//         //let res = await getUser();
//         let res="123456";
// 		commit(GET_USERINFO, res);
// 	},
// }
//异步的方法
import {
	getUser,
	getAddressList
} from '../service/getData'
import {
	GET_USERINFO,
	SAVE_ADDRESS
} from './mutation-types.js'

export default {

	async getUserInfo({
		commit,
		state
	}) {
		let res = await getUser();
		commit(GET_USERINFO, res)
	},
	async saveAddress({
		commit,
		state
	}) {

		if(state.removeAddress.length > 0) return;

		let addres = await getAddressList(state.userInfo.user_id);
		commit(SAVE_ADDRESS, addres);	
	},
}