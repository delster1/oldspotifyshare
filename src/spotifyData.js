const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = '6d37528ea6f94affbeda2e7b46549af9';
export const clientSecret = '124127e1d9f246c0a15417980ee19ee9';
export const redirectUri = 'http://localhost:8888/callback';
const scopes = [

];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}`;