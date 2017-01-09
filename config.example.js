var config = {
  "token": "211865746:AAExVhEZeV3CqJIZuLv7L13F1ptmx4NS87E",
  "update_type": "long-polling", // or "webhook"
  "webhook": "https://www.example.com/<token>",
  //"proxy": "http://127.0.0.1:8118",
  //"bot_name": "example_bot", // check bot name,
  "admin_id": "90285047",
  "db": {
    host: '127.0.0.1',
    port: 27017,
    //username: '',
    //password: '',
  }
};

module.exports = config;
