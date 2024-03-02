import request from '@/lib/request';

interface GetPostParams {
  offset: number;
  limit: number;
}
const getPosts = async (params: GetPostParams) => {
  return request({
    url: '/',
    method: 'GET',
    params,
  });
};
