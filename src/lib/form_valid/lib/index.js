import form_valid from './form_valid'

const Plugin = {
    install(Vue) {
        Vue.component('formValid', form_valid)
    }
}
export default Plugin