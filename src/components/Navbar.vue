<template>
	<div class="container">
		<div class="row">
			<b-navbar toggleable="xl" variant="faded" type="light">
				<b-navbar-brand href="/index" class="ms-5">
					<div class="column-text-navbar"><img class="icon-navbar me-2"
							src="../assets/img/VCASTFINALCC1 .png" />
						<div>
							<b>
								<div class="text-navbar-icon">BOTNOI</div>Vcast
							</b>
						</div>
					</div>
				</b-navbar-brand>
				<b-navbar-toggle target="nav-collapse" class="me-4"></b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<!-- Right aligned nav items -->
					<b-navbar-nav class="ms-4 me-4">
						<b-nav-item href="#Features" @click="check_id_navbar('Features')"><b>Features</b></b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav class="ms-4 me-4">
						<b-nav-item href="#Community"
							@click="check_id_navbar('Community')"><b>Community</b></b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav class="ms-4 me-4">
						<b-nav-item href="#Download" @click="check_id_navbar('Download')"><b>Download</b></b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav v-if="NotLoginStatus" class="ms-auto">
						<b-nav-item class="ms-4 me-2">
							<template>
								<b-button class="navbar-button" variant="outline-primary"
									@click="$bvModal.show('modal-scoped')"><b>Login</b></b-button>

								<b-modal id="modal-scoped" @hide="resetModal()" centered hide-footer hide-header>
									<template #default="{ ok, close }">
										<div class="text-end mt-2 me-3">
											<i class="fa-solid fa-xmark mb-1 cursor-cross"
												@click="reset_modal(close)"></i>
										</div>
										<div class="text-center">
											<img class="icon-login-register mt-3 mb-3"
												src="../assets/img/VCASTFINALCC1 .png" />
										</div>
										<div class="text-center mb-3">
											<h4><b>Welcome to Vcast</b></h4>
										</div>
										<form class="login-forgotten_password" @submit.stop.prevent="handleSubmit()">
											<b-form-group class="mx-auto mb-3" style="width:70%" label="E-mail address:"
												label-for="name-input" :invalid-feedback='emailErrorMessage'
												placeholder="Enter username" :state="form.emailState">
												<b-form-input id="email-input" class="input-login" v-model="form.email"
													placeholder="Enter Email address" ref="emailInput" required>
												</b-form-input>
											</b-form-group>
											<b-form-group class="mx-auto mb-2" style="width:70%;" label="Password:"
												label-for="password-input" invalid-feedback="Password is required"
												placeholder="Enter password" :state="form.passwordState">
												<b-input-group class="password-input-group">
													<b-form-input v-if="showPassword" id="name-input" type="text"
														v-model="form.password" placeholder="Enter Password"
														class="input-password" ref="passwordInput"
														required></b-form-input>
													<b-form-input v-else id="name-input" type="password"
														v-model="form.password" placeholder="Enter Password"
														class="input-password" ref="passwordInput"
														required></b-form-input>
													<b-input-group-append>
														<b-input-group-text class="showhidepassword">
															<i class="fa-solid" @click="toggleShow(0)"
																:class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
														</b-input-group-text>
													</b-input-group-append>
												</b-input-group>
											</b-form-group>
											<div class="password-incorrect mx-auto" v-if="password_incorrect">
												Login Failed: Email Or Password incorrect
											</div>
											<a href="/resetpassword">
												<div class="mx-auto" style="width:70%">
													Forgotten your password?
												</div>
											</a>
										</form>
										<div class="button-login text-center mx-auto mt-4">
											<button class="login-button btn" type="submit"
												@click="handleOk(ok, 'Login')">Login</button>
										</div>
										<div class="announce-login mx-auto mt-2 mb-5 text-center">
											By continuing, you are indicating that you accept our <a href="#">Terms of
												Service</a> and <a href="#">Privacy Policy</a>.
										</div>
									</template>
								</b-modal>
							</template>
						</b-nav-item>
						<b-nav-item href="#" class=" me-5">
							<template>
								<b-button class="navbar-button" variant="primary"
									@click="$bvModal.show('modal-register')"><b>Register</b></b-button>
								<b-modal id="modal-register" centered @hide="resetModal()" hide-footer hide-header>
									<template #default="{ ok, close }">
										<div class="text-end mt-2 me-3">
											<i class="fa-solid fa-xmark mb-1 cursor-cross"
												@click="reset_modal(close)"></i>
										</div>
										<div class="text-center">
											<img class="icon-login-register mt-3 mb-3"
												src="../assets/img/VCASTFINALCC1 .png" />
										</div>
										<div class="text-center mb-3">
											<h4><b>Welcome to Vcast</b></h4>
										</div>
										<form @submit.stop.prevent="handleSubmit()">
											<b-form-group class="mx-auto mb-3" style="width:70%" label="Username:"
												label-for="name-input" :invalid-feedback='usernameErrorMessage'
												:state="form.emailState">
												<b-form-input id="username-input" class="input-login"
													v-model="form.username" placeholder="Username" ref="usernameInput"
													required>
												</b-form-input>
											</b-form-group>
											<b-form-group class="mx-auto mb-3" style="width:70%" label="E-mail address:"
												label-for="name-input" :invalid-feedback='emailErrorMessage'
												placeholder="Enter email" :state="form.emailState">
												<b-form-input id="email-input" class="input-login" v-model="form.email"
													placeholder="Email address" ref="emailInput" required>
												</b-form-input>
											</b-form-group>
											<b-form-group class="mx-auto mb-2" style="width:70%;" label="Password:"
												label-for="password-input" :invalid-feedback="checkpassword"
												:state="form.validStrongPasswordState">
												<b-input-group class="password-input-group">
													<b-form-input v-if="showPassword" id="name-input" type="text"
														v-model="form.password" placeholder="Create a Password"
														class="input-password" ref="passwordInput" required>
													</b-form-input>
													<b-form-input v-else id="name-input" type="password"
														v-model="form.password" placeholder="Create a Password"
														class="input-password" ref="passwordInput" required>
													</b-form-input>
													<b-input-group-append>
														<b-input-group-text class="showhidepassword">
															<i class="fa-solid" @click="toggleShow(0)"
																:class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
														</b-input-group-text>
													</b-input-group-append>
												</b-input-group>
												<b-form-invalid-feedback :state="form.validlenthPasswordState">
													<i class="fa-solid fa-square-xmark"></i>
													Required at longer than 8 character.
												</b-form-invalid-feedback>
												<b-form-valid-feedback :state="form.validlenthPasswordState">
													<i class="fa-solid fa-square-check"></i>
													Required at longer than 8 character.
												</b-form-valid-feedback>
												<b-form-invalid-feedback :state="form.validUpperPasswordState">
													<i class="fa-solid fa-square-xmark"></i>
													Required at least one uppercase letter.
												</b-form-invalid-feedback>
												<b-form-valid-feedback :state="form.validUpperPasswordState">
													<i class="fa-solid fa-square-check"></i>
													Required at least one uppercase letter.
												</b-form-valid-feedback>
												<b-form-invalid-feedback :state="form.validSpecialPasswordState">
													<i class="fa-solid fa-square-xmark"></i>
													Required at least one special character.
												</b-form-invalid-feedback>
												<b-form-valid-feedback :state="form.validSpecialPasswordState">
													<i class="fa-solid fa-square-check"></i>
													Required at least one special character.
												</b-form-valid-feedback>
												<b-form-invalid-feedback :state="form.validNumberPasswordState">
													<i class="fa-solid fa-square-xmark"></i>
													Required at least one number character.
												</b-form-invalid-feedback>
												<b-form-valid-feedback :state="form.validNumberPasswordState">
													<i class="fa-solid fa-square-check"></i>
													Required at least one number character.
												</b-form-valid-feedback>
											</b-form-group>
											<b-form-group class="mx-auto" style="width:70%" label-for="password-input"
												:invalid-feedback="checkpasswordconfirm"
												:state="form.passwordEqualState">
												<b-input-group class="password-input-group">
													<b-form-input v-if="showPasswordConfirm" id="password-input"
														type="text" v-model="form.passwordconfirm"
														placeholder="Confirm a Password" class="input-password"
														ref="passwordconfirmInput" required></b-form-input>
													<b-form-input v-else id="password-input" type="password"
														v-model="form.passwordconfirm" placeholder="Confirm a Password"
														class="input-password" ref="passwordconfirmInput"
														required></b-form-input>
													<b-input-group-append>
														<b-input-group-text class="showhidepassword">
															<i class="fa-solid" @click="toggleShow(1)"
																:class="{ 'fa-eye-slash': showPasswordConfirm, 'fa-eye': !showPasswordConfirm }"></i>
														</b-input-group-text>
													</b-input-group-append>
												</b-input-group>
											</b-form-group>
										</form>
										<div class="button-login text-center mx-auto mt-4">
											<button class="login-button btn" type="submit"
												@click="handleOk(ok, 'Register')">Register</button>
										</div>
										<div class="announce-login mx-auto mt-2 mb-5 text-center">
											By continuing, you are indicating that you accept our <a href="#">Terms of
												Service</a> and <a href="/policy">Privacy Policy</a>.
										</div>
									</template>
								</b-modal>
								<b-modal id="modal-success-register" v-model="isRegisterSuccess" hide-footer hide-header
									@hide="resetModal()">
									<p>Login Successful</p>
								</b-modal>
								<b-modal id="modal-failed-register" v-model="isRegisterFailed" hide-footer hide-header
									@hide="resetModal()">
									<p>Login Failed</p>
								</b-modal>
							</template>
						</b-nav-item>
					</b-navbar-nav>
					<b-navbar-nav v-if="LoginStatus" class="ms-auto">
						<b-nav-item href="/profile" class="ms-4 me-4"><b>{{ usercurrent }}</b> </b-nav-item>
						<b-button class="navbar-button ms-4 me-5" variant="danger" @click="cookieLogout()">
							<b>Logout</b>
						</b-button>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</div>
</template>
<style>
@import '../assets/css/navbar.css';
</style>
<script>
import Cookies from 'js-cookie';
import { SignJWT } from 'jose';
import { mapGetters, mapActions } from "vuex";
export default {
	name: 'HelloWorld',
	data() {
		return {
			form: {
				email: "",
				username: "",
				password: "",
				passwordconfirm: "",
				emailState: null,
				usernameState: null,
				passwordState: null,
				passwordconfirmState: null,
				passwordEqualState: null,
				emailrequireState: null,
				emailformatState: null,
				validlenthPasswordState: null,
				validStrongPasswordState: null,
				validUpperPasswordState: null,
				validSpecialPasswordState: null,
				validNumberPasswordState: null,
				/* eslint-disable-next-line */
				regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				regex_strong_password: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
				regex_upper_password: /(?=.*[A-Z])/,
				regex_special_password: /(?=.*[^A-Za-z0-9])/,
				regex_number_password: /(?=.*[0-9])/
			},
			password_incorrect: null,
			value_state: null,
			status_state: null,
			Tokenjwt: '',
			ErrorToken: '',
			showPassword: false,
			showPasswordConfirm: false,
			username_already_existState: null,
			isRegisterSuccess: false,
			isRegisterFailed: false,
		}
	},

	methods: {
		...mapActions(["LogIn", "Register", "LogOut"]),

		toggleShow(indexshow) {
			if (indexshow === 0) {
				this.showPassword = !this.showPassword;
			}
			if (indexshow === 1) {
				this.showPasswordConfirm = !this.showPasswordConfirm;
			}
		},

		async cookieLogout() {
			await Cookies.remove('jwt');
			await this.LogOut()
			this.$router.push("/index");
		},

		async convertjwt(un, ps, username, number) {

			const payload = {
				email: un,
				password: ps
			};

			if (number === 1) {

				payload['username'] = username

			}

			const secretKey = new TextEncoder().encode(
				'8683f24fe13247e9c033618aa577e072e2afdea832bd93d327edf153c039d29e',
			)
			const alg = 'HS256';
			const jwtToken = new SignJWT(payload)
				.setProtectedHeader({ alg })
				.setExpirationTime('7d')
				.sign(secretKey)
			await jwtToken.then(token => {
				this.Tokenjwt = token
			}).catch(err => {
				this.ErrorToken = "login failed: " + err
			});

		},

		async cookieLogin(token) {
			const jwt = token
			await Cookies.set('jwt', jwt, { secure: true, httpOnly: true, expires: 7 });
		},

		checkFormValidity(Formstate) {
			const validEmail = this.$refs.emailInput.checkValidity()
			const validPassword = this.$refs.passwordInput.checkValidity()
			const validFormat = this.form.regex.test(this.form.email)
			const correctEmail = validEmail && validFormat

			this.form.emailrequireState = validEmail
			this.form.passwordState = validPassword
			this.form.emailformatState = validFormat
			this.form.emailState = correctEmail
			if (Formstate === 'Register') {
				const validUsername = this.$refs.usernameInput.checkValidity()
				this.form.usernameState = validUsername
				const validPasswordConfirm = this.$refs.passwordconfirmInput.checkValidity()
				this.form.passwordconfirmState = validPasswordConfirm
				const validPasswordStrong = this.form.regex_strong_password.test(this.form.password)
				this.form.validStrongPasswordState = validPasswordStrong
				const passwordEqual = (this.form.password === this.form.passwordconfirm)
				this.form.passwordEqualState = passwordEqual && validPasswordConfirm
				const correctPassword = passwordEqual && validPasswordConfirm && validPassword && passwordEqual
				return correctEmail && correctPassword && validUsername && validPasswordStrong
			}
			console.log(correctEmail && validPassword)
			return correctEmail && validPassword
		},

		resetModal() {
			this.form.email = ''
			this.form.password = ''
			this.form.username = ''
			this.form.passwordconfirm = ''
			this.form.emailState = null
			this.form.usernameState = null
			this.form.passwordState = null
			this.form.passwordconfirmState = null
			this.form.validStrongPasswordState = null
			this.form.passwordEqualState = null
			this.form.emailrequireState = null
			this.form.emailformatState = null
			this.password_incorrect = null
			this.isRegisterSuccess = false,
				this.isRegisterFailed = false
		},

		async reset_modal(close) {
			this.resetModal()
			close()

		},

		async check_id_navbar(section) {
			const check_id = document.getElementById(section)
			console.log(check_id)
			if (check_id == null && this.$route.path !== '/index') {
				this.$router.push('/');
				console.log(check_id)
			}
		},

		async handleOk(ok, state) {
			// Trigger submit handler
			await this.handleSubmit(state, ok)
		},

		async handleSubmit(Formstate, ok) {
			// Exit when the form isn't valid
			if (!this.checkFormValidity(Formstate)) {

				return
			}
			if (Formstate === 'Login') {
				await this.convertjwt(this.form.email, this.form.password, '', 0)
				const token = this.Tokenjwt
				//Resetdata Token jwt
				this.Tokenjwt = ''
				this.cookieLogin(token)
				await this.LogIn({ Token: token });
				if (this.responseStatus === 'True') {
					this.$router.push("/index");
					ok()
				} else {
					this.password_incorrect = this.LoginIncorrect
					console.log(this.responseStatus);
					console.log(this.password_incorrect)
					console.log(this.noticeResponse);

				}

			}

			if (Formstate == 'Register') {
				await this.convertjwt(this.form.email, this.form.password, this.form.username, 1)
				const token = this.Tokenjwt
				this.Tokenjwt = ''
				await this.Register({ Token: token })
				if (this.StatusRegister === true) {
					ok()
					this.isRegisterSuccess = true
					setTimeout(() => {
						this.isRegisterSuccess = false
					}, 2000)
				}
				if (this.StatusRegister === false) {
					this.isRegisterFailed = true
				}

			}
		},
	},
	computed: {
		...mapGetters({
			responseStatus: "ResponseLogin",
			noticeResponse: "StateNotice", NotLoginStatus: "StateNotLogin",
			LoginStatus: "StateLogin", usercurrent: 'StateUser',
			LoginIncorrect: "StateLoginIncorrect",
			StatusRegister: "ResponseRegister",

		}),

		usernameErrorMessage() {
			if (this.form.usernameState === false) {
				return 'Username is required'
			}

			if (this.username_already_existState === false) {
				return 'Username already exist'
			}
		},

		emailErrorMessage() {
			this.form.validlenthPasswordState = this.form.password.length > 7
			this.form.validUpperPasswordState = this.form.regex_upper_password.test(this.form.password)
			this.form.validSpecialPasswordState = this.form.regex_special_password.test(this.form.password)
			this.form.validNumberPasswordState = this.form.regex_number_password.test(this.form.password)
			if (this.form.emailrequireState === false) {
				return 'Email is required'
			} else if (this.form.emailformatState === false) {
				return 'Email format valid'
			}
			return ''
		},

		checkpassword() {
			if (this.form.passwordState === false) {
				return "Password is required"
			}
			if (this.form.validStrongPasswordState === false) {
				return "Password is still invalid according to the above conditions."
			}
		},

		checkpasswordconfirm() {
			if (this.form.passwordconfirmState === false) {
				return "PasswordConfirm is required"
			}

			if (this.form.passwordEqualState === false) {
				return "Password does not match"
			}
		},
	}
}

</script>