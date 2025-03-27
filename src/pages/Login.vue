<template>
    <div class="page-header clear-filter" filter-color="orange">
        <div class="page-header-image" style="background-image: url('img/login.jpg')"></div>
        <div class="content">
            <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                    <card type="login" plain>
                        <div slot="header" class="logo-container">
                            <img v-lazy="'img/now-logo.png'" alt="logo" />
                        </div>

                        <fg-input v-model.trim="loginForm.username" class="no-border input-lg" addon-left-icon="now-ui-icons users_circle-08" placeholder="账 户">
                        </fg-input>

                        <fg-input v-model.trim="loginForm.username" class="no-border input-lg" addon-left-icon="now-ui-icons users_circle-08" placeholder="账 户">
                        </fg-input>

                        <fg-input v-model.trim="loginForm.password" class="no-border input-lg" addon-left-icon="now-ui-icons text_caps-small" placeholder="密 码">
                        </fg-input>

                        <template slot="raw-content">
                            <div class="card-footer text-center" @click="handleLogin">
                                <span class="btn btn-primary btn-round btn-lg btn-block">登 录</span>
                            </div>
                            <div class="pull-left">
                                <h6>
                                    <a href="#" class="link footer-link">Create Account</a>
                                </h6>
                            </div>
                            <div class="pull-right">
                                <h6>
                                    <a href="#" class="link footer-link">Need Help?</a>
                                </h6>
                            </div>
                        </template>
                    </card>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
    </div>
</template>
<script>
import { login, getCaptcha } from '@/api/base/user'
import { mapState } from 'vuex'
import { Card, Button, FormGroupInput } from '@/components'
import MainFooter from '@/layout/MainFooter'
export default {
    name: 'login-page',
    bodyClass: 'login-page',
    components: {
        Card,
        MainFooter,
        [Button.name]: Button,
        [FormGroupInput.name]: FormGroupInput,
    },
    data () {
        return {
            loginForm: {
                // 账户
                username: '',
                // 密码
                password: '',
            },
        }
    },
    computed: {
        ...mapState('app', ['count']),
    },
    created () {
        // // console.log('Login page created', this.count);
        // login({username: 'admin', password: 'admin123'}).then(res => {
        //     console.log('res', res);
        // }).catch(err => {
        //     console.log('err', err);

        // })

        getCaptcha('blockPuzzle').then((r) => {
            console.log('eee', r)
        })
    },
    methods: {
        handleLogin () {
            console.log('handleLogin', this.loginForm)
            login(this.loginForm)
                .then((res) => {
                    console.log('res', res)
                })
                .catch((err) => {
                    console.log('err', err)
                })
        },
    },
};
</script>
