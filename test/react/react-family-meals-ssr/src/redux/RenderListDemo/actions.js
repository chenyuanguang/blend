import { RENDERLISTDATA, GETRENDERLISTDATA } from './type';
import { getList } from '@services';
export default {
    [RENDERLISTDATA](text) {
        console.log('====++++===');
        console.log(text);
        return {
            type: RENDERLISTDATA,
            text,
        };
    },
    [GETRENDERLISTDATA](data) {
        return (dispatch) => {
            console.log('=======');
            console.log(dispatch);
            return getList(data).then((data) => {
                dispatch(this[RENDERLISTDATA](data));
            });
        };
    },
};

// export const getHeaderInfo = () => {
//     return (dispatch, getState, axiosInstance) => {
//         return axiosInstance.get('/api/isLogin.json').then((res) => {
//             dispatch(changeLogin(res.data.data.login));
//         });
//     };
// };
