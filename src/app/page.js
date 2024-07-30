"use client";
import APIKeyRoute from "./components/APIKeyRoute";
import Jumbotron from "./components/Jumbotron";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

export default function Home() {
  return (
    <>
      <Jumbotron />

      <PublicRoute />

      <ProtectedRoute />

      <APIKeyRoute />
    </>
  );
}
