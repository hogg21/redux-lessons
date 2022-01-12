import React from "react";

export const user = {
    user1: {
        name: 'Nikola Tesla',
        avatar_url: 'https://avatars3.githubusercontent.com/u10001'
    }
}
export const userContext = React.createContext(user.user1);