import React from "react";



export default function RegisterComponent({
    handleOnRegister,
    newUser,
    setNewUser,
}) {

    return (
        <div>
            <form  onSubmit={handleOnRegister}>
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
                    value={newUser.password_confirmation}
                    onChange={({ target }) =>
                        setNewUser({...newUser,password_confirmation: target.value})
                    }
                />
                <label>I accept terms and conditions</label>
                <input
            required
            type="checkbox"
          />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}