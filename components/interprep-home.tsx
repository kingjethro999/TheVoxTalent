"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function InterPrepHome() {
  const router = useRouter()
  const [targetRole, setTargetRole] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleStartSimulation = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!targetRole.trim()) return

    setIsSubmitting(true)

    try {
      const params = new URLSearchParams({
        mode: "interprep",
        targetRole,
        jobDescription,
      })
      router.push(`/ai?${params.toString()}`)
    } catch (error) {
      console.error("Failed to navigate to interview:", error)
      setIsSubmitting(false)
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "40px",
        width: "100%",
        height: "100%",
        padding: "40px 20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 800,
            margin: 0,
            background: "linear-gradient(to bottom, #fff, #666)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          InterPrep
        </h1>
        <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.5)", margin: 0 }}>
          Master your interview with high-stakes simulation. Get brutally honest AI feedback.
        </p>
      </div>

      <form
        onSubmit={handleStartSimulation}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "100%",
          maxWidth: "400px",
          background: "rgba(21, 21, 24, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          borderRadius: "20px",
          padding: "32px",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255, 255, 255, 0.7)" }}>Target Role</label>
          <input
            type="text"
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value)}
            placeholder="e.g. Frontend Engineer"
            style={{
              marginTop: "8px",
              padding: "12px 16px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: "0.9rem",
              fontFamily: "Inter, sans-serif",
              width: "100%",
              boxSizing: "border-box",
              transition: "all 0.3s",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#8E75FF"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
            }}
            required
          />
        </div>

        <div style={{ textAlign: "left" }}>
          <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255, 255, 255, 0.7)" }}>
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            style={{
              marginTop: "8px",
              padding: "12px 16px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "white",
              fontSize: "0.9rem",
              fontFamily: "Inter, sans-serif",
              width: "100%",
              boxSizing: "border-box",
              minHeight: "100px",
              resize: "none",
              transition: "all 0.3s",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#8E75FF"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)"
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !targetRole.trim()}
          style={{
            marginTop: "16px",
            padding: "14px 32px",
            borderRadius: "50px",
            background: targetRole.trim() ? "#fff" : "rgba(255, 255, 255, 0.3)",
            color: targetRole.trim() ? "#000" : "rgba(255, 255, 255, 0.5)",
            fontWeight: 700,
            fontSize: "0.95rem",
            border: "none",
            cursor: targetRole.trim() ? "pointer" : "not-allowed",
            transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            fontFamily: "Inter, sans-serif",
            opacity: isSubmitting ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (targetRole.trim()) {
              e.currentTarget.style.transform = "scale(1.05)"
              e.currentTarget.style.boxShadow = "0 0 30px rgba(255, 255, 255, 0.15)"
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          {isSubmitting ? "Starting..." : "Enter Simulation"}
        </button>
      </form>
    </div>
  )
}
