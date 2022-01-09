import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import initializeApp from "firebase/app";
import { Navigation } from "./src/infrastructure/navigation/index";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import firebase from "firebase/app";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";
const firebaseConfig = {
  apiKey: "AIzaSyDCZ1HN7Oi6hkBD_ppOnQINtmZUfuRMqL8",
  authDomain: "mealstogo-7f9ec.firebaseapp.com",
  projectId: "mealstogo-7f9ec",
  storageBucket: "mealstogo-7f9ec.appspot.com",
  messagingSenderId: "326807271646",
  appId: "1:326807271646:web:aca6f9b44de52077c32a4f",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
