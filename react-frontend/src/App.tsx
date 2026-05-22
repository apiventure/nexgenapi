import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import "./styles/globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/home";
import WorkspacesView from "./components/workspaces/WorkspacesPage";
import ApiPlaygroundView from "./components/api-playgroud/ApiPlaygroundPage";
import Chatbot from "./components/chatbot/Chatbot";
import { PlaygroundAgentProvider } from "./components/chatbot/PlaygroundAgentContext";

export default function App() {
  const [sidebarWidth, setSidebarWidth] = useState(200);

  return (
    <PlaygroundAgentProvider>
      <Sidebar setSidebarWidth={setSidebarWidth} />
      <div style={{ marginLeft: sidebarWidth }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workspaces" element={<WorkspacesView />} />
          <Route path="/api-playground" element={<ApiPlaygroundView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Chatbot />
    </PlaygroundAgentProvider>
  );
}
