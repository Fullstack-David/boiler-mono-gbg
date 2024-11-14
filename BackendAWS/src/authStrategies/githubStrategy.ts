import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { UserProfile } from "../types/types.js";
import dotenv from "dotenv";

dotenv.config();
const clientID = process.env.GITHUB_CLIENT_ID as string || "Ov23liytUKPfKwmanNUp" // test med hårdkodad env för docker ska fungera
const clientSecret = process.env.GITHUB_CLIENT_SECRET as string || "fefb6bd8588e2c1189aa51917d33113184f5c8e1" // test med hårdkodad env för docker ska fungera
console.log(clientID, "clientID")
console.log(clientSecret, "clientSecret")

// Använd GitHub-strategin
passport.use(
  new GitHubStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://localhost:5173/",
    },
    (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: (err: any, user?: UserProfile | null) => void
    ) => {
      try {
        // Logga profil för felsökning
        console.log(profile);

        const user: UserProfile = {
          id: profile.id,
          username: profile.username || profile.displayName,
          displayName: profile.displayName,
          profileUrl: profile.profileUrl || "", // Kontrollera att detta finns
          emails: profile.emails || [], // Kontrollera att detta finns
        };
        console.log(user);

        return done(null, user); // Skicka den skapade användaren
      } catch (err) {
        console.error("Error during authentication", err);
        return done(err); // Skicka fel
      }
    }
  )
);
