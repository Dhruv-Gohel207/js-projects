const User = {
    _email: 'one@one.com',
    _password:'abcd',

        get email(){
            return this._email.toUpperCase()
        },

        set email(value){
            this._email = value
        }
}
const tea = Object.create(User)
console.log(tea.email);