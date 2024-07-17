import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router, RouterProvider } from "./Routes";
import App from "./App";
import { UserProvider } from "./UserContext";
// wrap provider at the highest level so all components have access to it 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
