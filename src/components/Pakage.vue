<template>
    <div class="contrainer" id="Download">
        <div class="row section-package">
            <div class="col-12 mt-5 mb-5">
                <div class="package-title text-center mt-5">
                    <div class="package-title-head">
                        <b>Plan & Pricing</b>
                    </div>
                    <div class="package-title-detail mt-2">
                        All plans start with 7-day free trial
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-7 col-sm-5  col-md-3 col-lg-2 mx-auto mx-sm-0 ms-sm-auto">
                        <div class="card me-1">
                            <div class="card-body">
                                <h5 class="card-title text-left">
                                    14 days
                                </h5>
                                <h2 class="card-text text-left">
                                    <!-- <b>THB 0</b> -->
                                    <b>THB 0</b>
                                </h2>
                                <p class="card-text text-start">
                                    The package includes all features and there are no additional charges during use.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item list-color-package">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    4 Public Characters
                                </li>
                                <li class="list-group-item list-color-package">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    Half body Tracking
                                </li>
                                <li class="list-group-item list-color-package">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    Free Camera pan
                                </li>
                                <li class="list-group-item list-color-package">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    Import Model
                                </li>
                                <li class="list-group-item list-color-package">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    Props System
                                </li>
                            </ul>
                            <a @click="submit">
                                <div class="card-body text-center purchase-pack">
                                    <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey"
                                        :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL"
                                        @loading="v => loading = v" />
                                    <!-- <b>Purchase Plan</b> -->
                                    <b>Start Free Trial</b>

                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-7 col-sm-5 col-md-3 col-lg-2 mx-auto mx-sm-0 me-sm-auto me-md-0 mt-4 mt-sm-0">
                        <div class="card me-1 disable-section">
                            <div class="card-body">
                                <h5 class="card-title text-left">
                                    1 months
                                </h5>
                                <h2 class="card-text text-left">
                                    <!-- <b>THB 0</b> -->
                                    <b>Coming soon</b>
                                </h2>
                                <p class="card-text text-left">
                                    The package includes all features and there are no additional charges during use.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                            </ul>
                            <a @click="submit2">
                                <div class="card-body text-center purchase-pack disable-section-button">
                                    <stripe-checkout ref="checkoutRef2" mode="subscription" :pk="publishableKey"
                                        :line-items="lineItems2" :success-url="successURL" :cancel-url="cancelURL"
                                        @loading="v => loading = v" />
                                    <!-- <b>Purchase Plan</b> -->
                                    <b>Coming Soon...</b>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        class="col-7 col-sm-5 col-md-3 col-lg-2 mx-auto mx-sm-0 ms-sm-auto ms-md-0 me-md-auto me-lg-0 mt-4 mt-sm-4 mt-md-0">
                        <div class="card me-1 disable-section">
                            <div class="card-body">
                                <h5 class="card-title text-left">
                                    3 months
                                </h5>
                                <h2 class="card-text text-left">
                                    <!-- <b>THB 0</b> -->
                                    <b>Coming soon</b>
                                </h2>
                                <p class="card-text text-left">
                                    The package includes all features and there are no additional charges during use.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                            </ul>
                            <a @click="submit3">
                                <div class="card-body text-center purchase-pack disable-section-button">
                                    <stripe-checkout ref="checkoutRef3" mode="subscription" :pk="publishableKey"
                                        :line-items="lineItems3" :success-url="successURL" :cancel-url="cancelURL"
                                        @loading="v => loading = v" />
                                    <!-- <b>Purchase Plan</b> -->
                                    <b>Coming Soon...</b>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        class="col-7 col-sm-5 col-md-4 col-lg-2 mx-auto mx-sm-0 mt-4 mt-lg-0 me-sm-auto me-md-0 ms-md-auto ms-lg-0">
                        <div class="card me-1 disable-section">
                            <div class="card-body">
                                <h5 class="card-title text-left">
                                    6 months
                                </h5>
                                <h2 class="card-text text-left">
                                    <!-- <b>THB 0</b> -->
                                    <b>Coming soon</b>
                                </h2>
                                <p class="card-text text-left">
                                    The package includes all features and there are no additional charges during use.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                            </ul>
                            <a @click="submit4">
                                <div class="card-body text-center purchase-pack disable-section-button">
                                    <stripe-checkout ref="checkoutRef4" mode="subscription" :pk="publishableKey"
                                        :line-items="lineItems4" :success-url="successURL" :cancel-url="cancelURL"
                                        @loading="v => loading = v" />
                                    <!-- <b>Purchase Plan</b> -->
                                    <b>Coming Soon...</b>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div
                        class="col-7 col-sm-5 col-md-4 col-lg-2 mx-auto mt-md-4 mt-lg-0 mt-4 mx-sm-auto mx-md-0 me-md-auto me-lg-auto">
                        <div class="card me-1 disable-section">
                            <div class="card-body">
                                <h5 class="card-title text-left">
                                    12 months
                                </h5>
                                <h2 class="card-text text-left">
                                    <!-- <b>THB 0</b> -->
                                    <b>Coming soon</b>
                                </h2>
                                <p class="card-text text-left">
                                    The package includes all features and there are no additional charges during use.
                                </p>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                                <li class="list-group-item">
                                    <i class="fa-solid fa-circle-check">
                                    </i>
                                    xxxxxxxxxxxxxxxx
                                </li>
                            </ul>
                            <a @click="submit5">
                                <div class="card-body text-center purchase-pack disable-section-button">
                                    <stripe-checkout ref="checkoutRef5" mode="subscription" :pk="publishableKey"
                                        :line-items="lineItems5" :success-url="successURL" :cancel-url="cancelURL"
                                        @loading="v => loading = v" />
                                    <!-- <b>Purchase Plan</b> -->
                                    <b>Coming Soon...</b>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import "@/assets/css/package.css";
</style>
<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
export default {
    name: 'PackagePayment',
    components: {
        StripeCheckout,
    },
    data() {

        this.publishableKey = "pk_test_51LzHETKzYjQ0WCrqpwzpxD68sfBzzzIsRCyEcImPWoAF8nCEq3G2jC0xtChGcaioeXCNl6hhFtAZhMHhIJGrlgqt00J5dHv4xC"
        return {
            loading: false,
            lineItems: [
                {
                    price: 'price_1M8wylKzYjQ0WCrqTpr4hmtE',
                    quantity: 1
                }
            ],
            lineItems2: [
                {
                    price: 'price_1M8uK1KzYjQ0WCrqKSDH2QHQ',
                    quantity: 1
                },
            ],
            lineItems3: [{
                price: 'price_1M8uhYKzYjQ0WCrqU7UfqLhy',
                quantity: 1
            }
            ],
            lineItems4: [{
                price: 'price_1M8wdgKzYjQ0WCrqaFnDbB3u',
                quantity: 1
            }
            ],
            lineItems5: [{
                price: 'price_1M8wfvKzYjQ0WCrq5XvNXo6X',
                quantity: 1
            }
            ],
            successURL: 'http://localhost:8080/success',
            cancelURL: 'http://localhost:8080/error'
        }
    },
    methods: {
        submit() {
            this.$refs.checkoutRef.redirectToCheckout();
        },
        submit2() {
            this.$refs.checkoutRef2.redirectToCheckout();
        },
        submit3() {
            this.$refs.checkoutRef3.redirectToCheckout();
        },
        submit4() {
            this.$refs.checkoutRef4.redirectToCheckout();
        },
        submit5() {
            this.$refs.checkoutRef5.redirectToCheckout();
        },
    }

}
</script>