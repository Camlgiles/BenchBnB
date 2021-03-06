export const signUp = (user) => {
    return $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user }
    });
};

export const logIn = (user) => {
    // debugger
    return $.ajax({
        url: '/api/sessions',
        method: 'POST',
        data: { user }
    });
};

export const logOut = () => {
    return $.ajax({
        url: '/api/sessions',
        method: 'DELETE'
    });
};

