import request from '@utils/request';
export const getList = (data) => {
    return request('/mock/api/data', {
        method: 'GET',
        data,
    });
};
