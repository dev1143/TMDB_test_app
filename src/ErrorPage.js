import React from "react";
import MainNavigation from "./Components/MainNavigation";

export default function ErrorPage() {
  return (
    <div>
      <MainNavigation />
      <div>
        <h3>404 Error</h3>
        <p>Page not found!</p>
      </div>
    </div>
  );
}
