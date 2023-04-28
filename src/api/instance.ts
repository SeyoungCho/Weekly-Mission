import axios from "axios";

export const wrapRequest = (func) => {
  return async (...args) => {
    const res = await func(...args);
    if (res?.data && res?.code && res.code !== 0) {
      throw res;
    } else {
      // 성공하면 data를 return
      return res.data;
    }
  };
};

export const instance = () => {
  const instance = axios.create({
    baseURL: "https://bootcamp-api.codeit.kr/api/sample",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });

  instance.interceptors.request.use(
    function (config) {
      // 모든 요청 바로 직전에 공통으로 들어갈 작업
      return config;
    },
    function (error) {
      // 요청 에러 처리
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      /*
			  http status가 20X인 경우
			  응답 바로 직전에 대해 작성합니다.
			  .then() 으로 이어집니다.
			*/
      return response;
    },
    function (error) {
      /*
			  http status가 20X가 아닌 경우
			  응답 에러 처리를 작성합니다.
			  .catch() 으로 이어집니다.
		  */
      return Promise.reject(error);
    }
  );

  return instance;
};
