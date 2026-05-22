"use client";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./sidebar.module.css";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Workspaces", path: "/workspaces" },
  { label: "API Playground", path: "/api-playground" },
];

export default function Sidebar({ setSidebarWidth }) {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [width, setWidth] = useState(200);
  const [isResizing, setIsResizing] = useState(false);

  const startResize = useCallback(() => {
    setIsResizing(true);
    document.body.style.cursor = "col-resize";
  }, []);

  const stopResize = useCallback(() => {
    setIsResizing(false);
    document.body.style.cursor = "";
  }, []);

  const handleResize = useCallback((e) => {
    if (!isResizing) return;
    const newWidth = Math.max(140, e.clientX);
    setWidth(newWidth);
    if (setSidebarWidth) setSidebarWidth(newWidth);
  }, [isResizing, setSidebarWidth]);

  useEffect(() => {
    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", stopResize);
    return () => {
      window.removeEventListener("mousemove", handleResize);
      window.removeEventListener("mouseup", stopResize);
    };
  }, [handleResize, stopResize]);

  return (
    <nav className={`${styles.nav} ${isResizing ? styles.navResizing : ""}`} style={{ width }} >
      <div className={styles.brand}>
        NEXGEN API STUDIO <br /> Powered by TIE
      </div>

      <div className={styles.navList}>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.path;

          return (
            <button key={item.path} type="button" onClick={() => navigate(item.path)} 
            className={`${styles.navItem} ${isActive ? styles.navItemActive : styles.navItemInactive}`} >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} TIE Team <br/> NEXGEN API Studio v1.0
      </div>

      <div onMouseDown={startResize} className={styles.resizeHandle} />
    </nav>
  );
}
