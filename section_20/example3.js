function validUserNames(user){
    return user.filter(username => {
        return username.length <10;
    })
}