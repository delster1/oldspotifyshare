import React from "react";
import Cookies from "js-cookie";
import ReactDOM from "react-dom";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import SpotifyLogin from "react-spotify-login";
import { SpotifyApiContext } from "react-spotify-api";
export const clientId = "6d37528ea6f94affbeda2e7b46549af9";
export const clientSecret = "124127e1d9f246c0a15417980ee19ee9";
export const redirectUri = "http://localhost:3001/callback";
const scopes = [];

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);

function App() {
  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"));
  return (
    <div clasname="app">
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          {/* Your Spotify Code here */}
          <p>You are authorized with token: {token}</p>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri="http://localhost:3000/callback"
          clientID={clientID}
          scopes={[Scopes.userReadPrivate, "user-read-email"]} // either style will work
          onAccessToken={(token) => setToken(token)}
        />
      )}

      <p>balls</p>
    </div>
  );
}

export default App;
