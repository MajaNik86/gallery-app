import React from "react";

export default function LoginComponent({ handleOnLogin, newUser, setNewUser }){
    return (
        <div>
            <form  onSubmit={handleOnLogin}>
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
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}