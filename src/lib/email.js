import request from 'superagent';

const API_URL = 'https://svstoyanov.herokuapp.com';

const sendEmail = async (to, message) => {
  const res = await request
    .post(`${API_URL}/email/send`)
    .send({ email: to, message });

  return res;
};

export default {
  sendEmail,
};
