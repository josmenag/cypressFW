class login_page{
    get getUsername_input(){
        return ('#loginusername')        
    }
    get getPassword_input(){
        return ('#loginpassword')
    }
    get getLogIn_button(){
        return ('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

}
export default login_page