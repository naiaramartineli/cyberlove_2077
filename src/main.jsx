import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/privateRoute"; // Use o componente que já criou
import "./css/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppRoutes />
	</React.StrictMode>
);
