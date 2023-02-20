<template>
    <div class="container" style="background: linear-gradient(135deg, #FF3E95 0%, #5AC2EF 100%);height: 825px;">
        <div class="row">
            <div class="card w-75 mx-auto mt-5 text-center border-resetpassword">
                <div class="card-body">
                    <h5 class="card-title mt-4">Reset Password</h5>
                    <p class="card-text">Enter a recovery Email-Address</p>
                    <b-form-group class="mx-auto mt-5 mb-3 text-start reset-email-input" label="E-mail address:"
                        label-for="name-input" :invalid-feedback='emailErrorMessage' :state="form.emailState">
                        <b-form-input class="input-login" v-model="form.email" ref="emailInput" required></b-form-input>
                    </b-form-group>
                    <div class="mt-4 mb-3">
                        <button class="reset-button btn" type="submit" @click="submit()">Next</button>
                        <button class="reset-button btn" type="submit" @click="testmodal()">TestModal</button>
                    </div>
                </div>
            </div>
            <b-modal id="modal-success-register" centered hide-footer hide-header v-model="isResetpasswordSuccess"
                @hide="resetModal()">
                <div class="size-modal-resetpassword">
                    <div class="text-center my-4">
                        <i class="fa-solid fa-envelope-circle-check mb-3 success-reset-password"></i>
                        <div class="text-center mt-2 detail-modal-reset-password">
                            <p>
                                Please check your email.
                                We have sent you the link, after 10 minutes still not received.
                                Please try again.
                            </p>
                        </div>
                    </div>
                </div>
            </b-modal>
            <b-modal id="modal-success-register my-auto" centered hide-footer hide-header v-model="isResetpasswordFailed" @hide="resetModal()">
                <div class="size-modal-resetpassword">
                    <div class="text-center my-4">
                        <i class="fa-solid fa-triangle-exclamation mb-3 error-reset-password"></i>
                        <div class="text-center mt-2 detail-modal-reset-password">
                            <p>
                                The system is having problems Please contact support.
                            </p>
                        </div>
                    </div>
                </div>
            </b-modal>
        </div>
    </div>
</template>
<style>
@import '../../assets/css/resetpass.css';
</style>
<script>
import { mapActions, mapGetters } from 'vuex';
import { SignJWT } from 'jose';
export default {
    name: 'ResetPassword',
    data() {
        return {
            form: {
                email: null,
                emailState: null,
                emailrequireState: null,
                emailformatState: null,
                regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            Tokenjwt: '',
            isResetpasswordSuccess: false,
            isResetpasswordFailed: false
        }
    },
    methods: {
        ...mapActions(["Resetpassword"]),
        async convertjwt(un) {
            const payload = {
                email: un,
            };

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

        testmodal() {
            this.isResetpasswordSuccess = true
        },

        resetModal() {
            this.form.email = ''
            this.form.emailState = ''
            this.form.emailrequireState = ''
            this.isResetpasswordSuccess = false
            this.isResetpasswordFailed = false
        },

        async submit() {
            await this.convertjwt(this.form.email)
            if (!this.checkFormValidity()) {
                return
            }
            const token = this.Tokenjwt
            this.Tokenjwt = ''

            await this.Resetpassword({ Token: token });
            if (this.responseStatus === true) {
                this.isResetpasswordSuccess = true
            }
            if (this.responseStatus === false) {
                this.isResetpasswordFailed = true
            }


        },
        checkFormValidity() {
            const validEmail = this.$refs.emailInput.checkValidity()
            const validFormat = this.form.regex.test(this.form.email)
            const correctEmail = validEmail && validFormat
            this.form.emailrequireState = validEmail
            this.form.emailformatState = validFormat
            this.form.emailState = correctEmail

            return correctEmail
        },
    },
    computed: {
        ...mapGetters({ responseStatus: "ResponseLogin", Url_link: "StateUrl" }),
        emailErrorMessage() {
            if (this.form.emailrequireState === false) {
                return 'Email is required'
            } else if (this.form.emailformatState === false) {
                return 'Email format valid'
            }
            return ''
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->