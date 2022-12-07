import React, { useEffect, useState } from "react";



export default function RegisterComponent({
    handleOnRegister,
    newUser,
    setNewUser,
}) {
    const [confirmPassword, setConfirmPassword] = useState({ password: "" });
    const [passwordConfirmed, setPasswordConfirmed] = useState(false);

    useEffect(() => {
        checkPasswords();
    }, [confirmPassword]);

    const checkPasswords = () => {
        if (confirmPassword === newUser.password) {
            setPasswordConfirmed(true);
        }
    };


    const handleUnmatchedPasswords = (e) => {
        e.preventDefault()
        alert('Passwords do not match');
    };

    return (
        <div>
            <form  onSubmit={
                passwordConfirmed ? handleOnRegister : handleUnmatchedPasswords
            }>
                <label htmlFor="name">First Name:</label>
                <input 
                    required
                    type="text"
                    value={newUser.first_name}
                    onChange={({ target }) => setNewUser({ ...newUser, first_name: target.value })}
                />
                <label htmlFor="name">Last Name:</label>
                <input 
                    required
                    type="text"
                    value={newUser.last_name}
                    onChange={({ target }) => setNewUser({ ...newUser, last_name: target.value })}
                />
                <label htmlFor="email">Email:</label>
                <input 
                    required
                    type="email"
                    value={newUser.email}
                    onChange={({ target }) => setNewUser({ ...newUser, email: target.value })}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    required
                    type="password"
                    value={newUser.password}
                    onChange={({ target }) =>
                        setNewUser({ ...newUser, password: target.value })
                    }
                />
                <label htmlFor="password">Confirm Password:</label>
                <input 
                    required
                    type="password"
                    value={confirmPassword.confirmPassword}
                    onChange={({ target }) =>
                        setConfirmPassword(target.value)
                    }
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}