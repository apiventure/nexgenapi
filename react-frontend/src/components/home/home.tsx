"use client";
import React, { useState } from "react";
import { fetchSpringApi } from "../springAPIBackEndCalls/springApiCalls";
import styles from "./home.module.css";

export default function Home() {
  const [apiResult, setApiResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    setApiResult("");

    try {
      const result = await fetchSpringApi();
      setApiResult(result);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown error";
      setApiResult(`Error: ${message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to NEXUS API Studio
      </h1>

      <p className={styles.subtitle}>
        TIP-powered API testing platform built by the TIE Team. A unified workspace
        for designing, testing, and debugging APIs with speed and precision.
      </p>

      <p className={styles.notice}>
        Usage Notice: Use one workspace per team to keep setups minimal.
      </p>

      <button type="button" onClick={handleClick} disabled={loading} className={styles.button} >
        {loading ? "Calling Spring Boot API..." : "Call Spring Boot API"}
      </button>

      {apiResult && (
        <div className={styles.result}>
          {apiResult}
        </div>
      )}
    </main>
  );
}
