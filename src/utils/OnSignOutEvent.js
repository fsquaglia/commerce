import { signOut } from "next-auth/react";

export const onClickSignOut = () => {
  //los estoy eliminando de ambos (local y session) porque no sé aún con cuál me voy a quedar
  localStorage.removeItem("variations");
  localStorage.removeItem("codeProduct");
  localStorage.removeItem("configurations");
  localStorage.removeItem("userData");
  sessionStorage.removeItem("variations");
  sessionStorage.removeItem("codeProduct");
  sessionStorage.removeItem("configurations");
  sessionStorage.removeItem("userData");
  signOut();
};
