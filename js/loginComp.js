const login ={
    type: 'text',
    placeholder:'Email',
    className:'modal_input',
    atr: 'text',
    isRequierd : true
}

const password = {
    type: 'password',
    placeholder: 'Password',
    className:'modal_input',
    atr: 'password',
    isRequierd : true
}
const btn = {
    type: 'submit',
    className:'modal_login_button',
    atr: 'submit'
}

export {login, password, btn}