import axios from "axios";
const state = {
  user: null,
  email: null,
  username: null,
  country: null,
  phone_number: null,
  birthday: null,
  LoginStatus: false,
  NotLoginStatus: true,
  LoginIncorrectStatus: false,
  responseStatus: null,
  noticeResponse: null,
  responseRegisterStatus: null,
  url: null,
  Authenticated: null,
};
const getters = {
  isAuthenticated: (state) => state.Authenticated,
  StateUser: (state) => state.user,
  StateUsername: (state) => state.username,
  StateCountry: (state) => state.country,
  StatePhoneNumber: (state) => state.phone_number,
  StateBirthday: (state) => state.birthday,
  StateLogin: (state) => state.LoginStatus,
  StateNotLogin: (state) => state.NotLoginStatus,
  StateLoginIncorrect: (state) => state.LoginIncorrectStatus,
  ResponseLogin: (state) => state.responseStatus,
  ResponseRegister: (state) => state.responseRegisterStatus,
  StatusNotice: (state) => state.noticeResponse,
  StateUrl: (state) => state.url,
  StateEmail: (state) => state.email,
};
const actions = {
  async Register({ commit }, User) {
    this.responseRegisterStatus = null;
    await axios
      .post("http://127.0.0.1:5000/api/auth/register", User)
      .then((response) => (this.responseRegisterStatus = response.data))
      .then(() => {
        commit("setresponseRegisterStatus", this.responseRegisterStatus);
      });
  },

  async LogIn({ commit }, User) {
    this.responseStatus = null;
    this.user = null;
    await axios
      .post("http://127.0.0.1:5000/api/auth/browser/login", User)
      .then((response) => (this.responseStatus = response.data))
      .then(() => {
        if (this.responseStatus["status"] == "True") {
          commit("setUser", this.responseStatus["email"]);
          commit("setresponseStatusLogin", this.responseStatus["status"]);
        } else {
          commit("setresponseStatusLogin", this.responseStatus);
        }
      })
      .catch((error) => console.log(error));
  },

  async Resetpassword({ commit }, User) {
    this.responseStatus = null;
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/auth/resetpasswordver2', User);
      const responseStatus = response.data;
      commit("setresponseStatus", responseStatus);
    } catch (error) {
      commit("setErrorServerSide", false); // set the error to true to indicate that there was an error on the server side
    }
  },

  async NewPassword({ commit }, User) {
    this.responseStatus = null;
    await axios
      .post("http://127.0.0.1:5000/api/auth/newpassword", User)
      .then((response) => (this.responseStatus = response.data))
      .then(() => {
        commit("setresponseStatus", this.responseStatus);
      })
      .catch(() => {
        commit("setErrorServerSide", false);
      });
  },

  async UpdateProfileUser({ commit }, User) {
    this.responseStatus = null;
    await axios
      .post("http://127.0.0.1:5000/api/auth/profile/update", User)
      .then((response) => (this.responseStatus = response.data))
      .then(() => {
        console.log(this.responseStatus);
        commit("setresponseStatus", this.responseStatus);
      })
      .catch((error) => console.log(error));
  },

  async LoadProfileUser({ commit }, User) {
    this.responseStatus = null;
    await axios
      .post("http://127.0.0.1:5000/api/auth/profile/load", User)
      .then((response) => (this.responseStatus = response.data))
      .then(() => {
        console.log(this.responseStatus["data"]);
        commit("setresponseStatusLoadProfile", this.responseStatus);
      })
      .catch((error) => console.log(error));
  },

  async LogOut({ commit }) {
    let user = null;
    commit("LogOut", user);
  },

  // async Register({ commit }, User) {
  //   this.responseStatus = null;
  //   await axios
  //     .post("http://127.0.0.1:5000/api/auth/resetpassword", User)
  //     .then(
  //       (response) => (this.responseRegisterStatus = response.data)
  //     );
  //   commit("setresponseRegisterStatus", this.responseRegisterStatus['status']);
  // },
};
const mutations = {
  setUser(state, email) {
    state.user = email;
    state.Authenticated = true;
    state.NotLoginStatus = false;
    state.LoginStatus = true;
  },

  LogOut(state) {
    state.user = null;
    state.Authenticated = false;
    state.username = null;
    state.country = null;
    state.phone_number = null;
    state.birthday = null;
    state.NotLoginStatus = true;
    state.LoginStatus = false;
    state.LoginIncorrectStatus = false;
  },
  setresponseStatusLogin(state, responseStatus) {
    if (responseStatus === true) {
      state.responseStatus = responseStatus;
      state.LoginIncorrectStatus = false;
    } else {
      state.LoginIncorrectStatus = true;
    }
  },

  setErrorServerSide(state, responseStatus) {
    state.responseStatus = responseStatus;
  },

  setresponseRegisterStatus(state, responseRegisterStatus) {
    state.responseRegisterStatus = responseRegisterStatus["status"];
    state.noticeResponse = responseRegisterStatus["notice"];
  },

  setresponseStatus(state, responseStatus) {
    state.reponseStatus = responseStatus["status"];
  },

  setresponseStatusLoadProfile(state, responseStatus) {
    state.username = responseStatus["data"]["data"]["username"];
    state.phone_number = responseStatus["data"]["data"]["phone_number"];
    state.birthday = responseStatus["data"]["data"]["birthday"];
    state.country = responseStatus["data"]["data"]["countryCode"];
    state.responseStatus = responseStatus["data"]["status"];
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
