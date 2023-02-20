<template>
    <div class="container" style="background: linear-gradient(135deg, #FF3E95 0%, #5AC2EF 100%);height: 825px;">
        <div class="row">
            <div class="card w-75 mx-auto mt-5 text-center">
                <div class="card-body">
                    <h5 class="card-title mt-4">Reset Password</h5>
                    <p class="card-text">Enter a recovery Email-Address</p>
                    <b-form-group class="mx-auto mt-5 mb-1 text-start reset-email-input" label="New Password:"
                        label-for="name-input" :invalid-feedback='ErrorMessage' :state="form.newpasswordState">
                        <b-form-input class="input-login" v-model="form.newpassword" ref="newPasswordInput"
                            required></b-form-input>
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
                    <b-form-group class="mx-auto mt-2 mb-3 text-start reset-email-input" label="Password Confirm:"
                        label-for="name-input" :invalid-feedback='ErrorMessage' :state="form.equalpasswordState">
                        <b-form-input class="input-login" v-model="form.confirmnewpassword" ref="confirmPasswordInput"
                            required></b-form-input>
                    </b-form-group>
                    <div class="mt-2 mb-3">
                        <button class="reset-button btn" type="submit" @click="submit_newpassword()">Submit</button>
                    </div>
                </div>
            </div>
            <b-modal id="modal-success-register" v-model="isResetpasswordSuccess" hide-footer hide-header @hide="resetModal()">
                <p>Reset Password Successful</p>
            </b-modal>
            <b-modal id="modal-success-register" v-model="isResetpasswordFailed" hide-footer hide-header @hide="resetModal()">
                <p>Reset Password Failed</p>
            </b-modal>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { SignJWT } from 'jose';
export default {
    name: 'NewpasswordPassword',

    data() {
        return {
            token: '',
            form: {
                newpassword: '',
                newpasswordState: '',
                confirmnewpassword: '',
                confirmnewpasswordState: '',
                equalpasswordState: '',
                validlenthPasswordState: null,
                validStrongPasswordState: null,
                validUpperPasswordState: null,
                validSpecialPasswordState: null,
                validNumberPasswordState: null,
                regex_strong_password: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
                regex_upper_password: /(?=.*[A-Z])/,
                regex_special_password: /(?=.*[^A-Za-z0-9])/,
                regex_number_password: /(?=.*[0-9])/

            },
            isResetpasswordSuccess: false,
            isResetpasswordFailed: false,
            Tokenjwt: null,

        }
    },
    methods: {
        ...mapActions(["NewPassword"]),

        checkFormValidity() {
            const validPassword = this.$refs.newPasswordInput.checkValidity()
            const validPasswordConfirm = this.$refs.confirmPasswordInput.checkValidity()
            this.form.newpasswordState = validPassword
            this.form.confirmnewpasswordState = validPasswordConfirm
            const passwordEqual = (this.form.newpassword === this.form.confirmnewpassword)
            return validPassword && validPasswordConfirm && passwordEqual
        },

        resetModal() {
            this.form.newpassword = ''
            this.form.newpasswordState = ''
            this.form.confirmnewpassword = ''
            this.form.confirmnewpasswordState = ''
            this.form.equalpasswordState = ''
            this.form.validlenthPasswordState = null
            this.form.validStrongPasswordState = null
            this.form.validUpperPasswordState = null
            this.form.validSpecialPasswordState = null
            this.form.validNumberPasswordState = null
            this.isResetpasswordSuccess = false
            this.isResetpasswordFailed = false
        },

        async convertjwt(email, ps) {
            console.log(email)
            const payload = {
                email: email,
                new_password: ps
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
        async submit_newpassword() {
            console.log('ss')
            if (!this.checkFormValidity()) {

                return
            }
            await this.convertjwt(this.email, this.form.newpassword)
            const token = this.Tokenjwt
            //Resetdata Token jwt
            this.Tokenjwt = ''
            await this.NewPassword({ Token: token });
            console.log(this.responseStatus)
            if (this.responseStatus === true) {
                this.isResetpasswordSuccess = true
                setTimeout(() => {
                    this.isResetpasswordSuccess = false
                    this.$router.push("/index");
                }, 2000)
            } else {
                this.isResetpasswordFailed = false
              
            }
        }
    },
    computed: {
        ...mapGetters({
            email: "StateEmail",
            responseStatus:"ResponseLogin"
        }),
        ErrorMessage() {
            this.form.validlenthPasswordState = this.form.newpassword.length > 7
            this.form.validUpperPasswordState = this.form.regex_upper_password.test(this.form.newpassword)
            this.form.validSpecialPasswordState = this.form.regex_special_password.test(this.form.newpassword)
            this.form.validNumberPasswordState = this.form.regex_number_password.test(this.form.newpassword)
            if (this.form.newpasswordState === false) {
                return 'Require newpassword'
            } else if (this.form.equalpasswordState === false) {
                return 'Password does not match'
            }
        }
    }
}

</script>