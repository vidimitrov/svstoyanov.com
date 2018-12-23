import request from 'superagent';

const API_URL = 'https://svstoyanov.herokuapp.com';

export const wakeUp = async () => {
  await request.get(`${API_URL}`);
};

export const sendEmail = async (to, message) => {
  const res = await request
    .post(`${API_URL}/email/send`)
    .send({ email: to, message });

  return res;
};

export default {
  wakeUp,
  sendEmail,
};
