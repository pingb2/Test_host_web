<template>
    <div class="container">
        <div class="row" style="background: linear-gradient(135deg, #FF3E95 0%, #5AC2EF 100%);height: 825px;">
            <div class="col-12 my-auto">
                <div class="row">
                    <div class="col-10 col-md-3 card section-title mb-4 mb-md-0 mx-auto ms-md-auto  border-card">
                        <div class="card-body">
                            <div class="row-title-profile mx-auto mt-3 mb-3" :class="{ active: isActive === 1 }"
                                @click="Active_Titleprofile(1)">
                                <i class="fa-solid fa-user"></i>
                                &nbsp;<b>My Profile</b>
                            </div>
                            <div class="row-title-profile mx-auto mt-3 mb-3" :class="{ active: isActive === 2 }"
                                @click="Active_Titleprofile(2)">
                                <i class="fa-solid fa-key"></i>
                                &nbsp;<b>Setup account security</b>
                            </div>
                            <div class="row-title-profile-disable mx-auto mt-3 mb-2">
                                <i class="fa-sharp fa-solid fa-money-bill-wave"></i>
                                &nbsp;<b>Subscription</b>
                            </div>
                        </div>
                    </div>
                    <div v-if="mode === 'default' && isActive === 1"
                        class="col-10 col-md-7 card mx-auto ms-md-5 me-md-auto border-card">
                        <div class="card-body">
                            <h5 class="card-title title-header-profile mt-3 mb-2"><b>My Profile</b></h5>
                            <div class="row mt-4">
                                <div class="col-6">
                                    <label class="label-title-name">Username:</label>
                                    <div>
                                        <input type="text" class="border-input" name="username" v-model="this.username"
                                            disabled />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <label class="label-title-name">Phone-Number:</label>
                                    <div>
                                        <input type="text" class="border-input" name="email" v-model="this.PhoneNumber"
                                            disabled />
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-6">
                                    <label class="label-title-name">Email:</label>
                                    <div>
                                        <input type="text" class="border-input" name="email" v-model="this.useremail"
                                            disabled />
                                    </div>
                                </div>
                                <div class="col-6">
                                    <label class="label-title-name">Country:</label>
                                    <div>
                                        <input type="text" class="border-input" name="email" v-model="this.Country"
                                            disabled />
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-6">
                                    <label class="label-title-name">Birthday:</label>
                                    <div>
                                        <input type="text" class="border-input" name="email" v-model="this.Birthday"
                                            disabled />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-3 ms-auto">
                                <button @click="switchToEditMode"
                                    class="btn btn-warning button-edit-profile"><b>Edit</b></button>
                            </div>
                        </div>
                    </div>
                    <div v-if="mode === 'edit' && isActive === 1"
                        class="col-10 col-md-7 card mx-auto ms-md-5 me-md-auto border-card">
                        <div class="card-body">
                            <h5 class="card-title title-header-profile mt-3 mb-2"><b>My Profile</b></h5>
                            <div class="row mt-4">
                                <div class="col-6">
                                    <div>
                                        <label>Username</label>
                                    </div>
                                    <input class="input-value-profile" v-model="user_data.username"
                                        placeholder="Enter Username" />
                                </div>
                                <div class="col-6">
                                    <label>Birthday</label>
                                    <div>
                                        <b-form-datepicker id="example-datepicker" v-model="user_data.birthday"
                                            class="input-value-profile mb-2"></b-form-datepicker>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4 mb-3">
                                <div class="col-6 ms-auto">
                                    <label>Country</label>
                                    <div>
                                        <PhoneNumberInput v-model="yourValue" @update="onFormatted" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-3 ms-auto">
                                <button @click="submitChanges"
                                    class="btn btn-success button-edit-profile"><b>OK</b></button>
                            </div>
                            <div class="col-3 me-2">
                                <button @click="switchToDefaultMode"
                                    class="btn btn-danger button-edit-profile"><b>Cancel</b></button>
                            </div>
                        </div>
                    </div>
                    <div v-if="isActive === 2" class="col-10 col-md-7 card mx-auto ms-md-5 me-md-auto border-card">
                        <div class="card-body">
                            <h5 class="card-title title-header-profile mt-3 mb-2"><b>Setup account security</b></h5>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <div class='d-flex reset_password'>
                                        <label>Change or reset your password</label>
                                        <div class="ms-auto md-1 me-md-5">
                                            <button class="btn btn-danger" @click="change_password">Change
                                                password</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import '@/assets/css/profile.css';
</style>
<script>
import PhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'
import { SignJWT } from 'jose';
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'OurCommunity',
    components: {
        PhoneNumberInput
    },
    data() {
        return {
            mode: 'default',
            yourValue: null,
            isValid: '',
            user_data: {
                username: '',
                email: '',
                country: '',
                phone: '',
                phone_number: '',
                birthday: '',
            },
            isActive: 1,
            Tokenjwt: null
        }

    },
    methods: {
        ...mapActions(["Resetpassword", "UpdateProfileUser", "LoadProfileUser"]),
        onFormatted(event) {
            this.user_data.phone = event.formattedNumber
            this.user_data.country = event.countryCode
            this.isValid = event.isValid
        },

        Active_Titleprofile(index) {
            this.isActive = index;
        },

        async switchToDefaultMode() {
            this.mode = 'default';
            await this.load_profile
        },

        async load_profile() {
            console.log(this.useremail)
            await this.convertjwt(this.useremail)
            const token = this.Tokenjwt
            //Resetdata Token jwt
            this.Tokenjwt = ''
            await this.LoadProfileUser({ Token: token })
            this.user_data.email = this.useremail;
            this.user_data.username = this.username;
            this.user_data.country = this.Country;
            this.user_data.phone_number = this.PhoneNumber;
            this.user_data.birthday = this.Birthday;
        },

        async switchToEditMode() {
            this.mode = 'edit';
        },

        async submitChanges() {
            // Make API call to save changes
            await this.convertjwt_UpdateProfile(
                this.user_data.email, this.user_data.username,
                this.user_data.country, this.user_data.phone,
                this.user_data.birthday)
            const token = this.Tokenjwt
            //Resetdata Token jwt
            this.Tokenjwt = ''
            await this.UpdateProfileUser({ Token: token })
            if (this.responseStatus === 'true') {
                this.switchToDefaultMode();
            } else {
                this.switchToDefaultMode();
            }
        },

        async convertjwt_UpdateProfile(email, username, country, phone, birthday) {
            const payload = {
                email: email,
                username: username,
                country: country,
                phone_number: phone,
                birthday: birthday
            };

            const secretKey = new TextEncoder().encode(
                '8683f24fe13247e9c033618aa577e072e2afdea832bd93d327edf153c039d29e',
            )
            const alg = 'HS256';
            const jwtToken = new SignJWT(payload)
                .setProtectedHeader({ alg })
                .setExpirationTime('1d')
                .sign(secretKey)
            await jwtToken.then(token => {
                this.Tokenjwt = token
            }).catch(err => {
                this.ErrorToken = "reset failed: " + err
            });

        },

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
                this.ErrorToken = "reset failed: " + err
            });

        },

        async change_password() {
            await convertjwt(this.form.email)
            if (!this.checkFormValidity()) {
                return
            }
            const token = this.Tokenjwt
            this.Tokenjwt = ''

            await this.Resetpassword({ Token: token });
            if (this.responseStatus === true) {

            }
            if (this.responseStatus === false) {

            }
        }
    },
    mounted(){
        this.load_profile()
    },

    computed: {
        ...mapGetters({
            useremail: 'StateUser', responseStatus: 'ResponseLogin',
            username: 'StateUsername', Country: 'StateCountry',
            PhoneNumber: 'StatePhoneNumber', Birthday: 'StateBirthday'
        }),
    }
}
</script>