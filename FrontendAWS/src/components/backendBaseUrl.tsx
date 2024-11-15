
// const environment = import.meta.env.REACT_APP_ENVIRONMENT;
let environment;

// Now, you can use the 'environment' variable in your code
let backendBaseUrl = "";
if (environment === "prod") {
  backendBaseUrl =
    "https://backend-qbb3iu3sv-davidheidari2-gmailcoms-projects.vercel.app";
} else {
  backendBaseUrl = "http://localhost:3000";
}

export default backendBaseUrl;
