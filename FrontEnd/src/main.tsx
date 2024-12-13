import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./admin/Presentation/Routes/App";
import "./index.css";
import * as Provider from "./admin/Presentation/Context";
import { AuthProvider } from "./web/components/ManejoUsuario/IniciarSesión/AuthContext";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <NextUIProvider>
        <Provider.ChatProvider>
          <Provider.AuthProvider>
            <Provider.NotifyProvider>
              <Provider.SocketProvider>
                <Provider.ConfigProvider>
                  <Provider.AdminProvider>
                    <Provider.ProductsProvider>
                      <Provider.StockProvider>
                        <Provider.RemisionGuiasProvider>
                          <Provider.ComercialProvider>
                            <App />
                          </Provider.ComercialProvider>
                        </Provider.RemisionGuiasProvider>
                      </Provider.StockProvider>
                    </Provider.ProductsProvider>
                  </Provider.AdminProvider>
                </Provider.ConfigProvider>
              </Provider.SocketProvider>
            </Provider.NotifyProvider>
          </Provider.AuthProvider>
        </Provider.ChatProvider>
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>
);
