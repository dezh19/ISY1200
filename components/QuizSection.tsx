"use client"

import { useState, useEffect, useRef } from "react"

const questions = [
  {
    q: "Which discipline is most concerned with designing and analysing algorithms?",
    options: ["Computer Science", "Information Technology", "Information Systems", "All three equally"],
    correct: 0,
    explanation: "Computer Science is the discipline rooted in algorithm design, mathematical theory, and the foundations of computation — as defined by ACM CS2023.",
  },
  {
    q: "A company needs someone to configure and maintain its corporate network. Which graduate is most suited?",
    options: ["Information Systems graduate", "Computer Science graduate", "Information Technology graduate", "None of the above"],
    correct: 2,
    explanation: "IT graduates specialise in network administration, systems management, and infrastructure maintenance — the core of the role described.",
  },
  {
    q: "Who would typically lead the selection and implementation of an ERP system for a business?",
    options: ["Software Engineer (CS)", "Network Admin (IT)", "Business Analyst (IS)", "Hardware Technician (IT)"],
    correct: 2,
    explanation: "ERP implementation and business process alignment are central competencies of Information Systems professionals, per the IS2020 ACM guidelines.",
  },
  {
    q: "Which field has the strongest mathematical foundation according to ACM curriculum guidelines?",
    options: ["Information Technology", "Information Systems", "Computer Science", "They are equal"],
    correct: 2,
    explanation: "Computer Science requires the most rigorous mathematical foundation — including discrete mathematics, linear algebra, calculus, and formal logic.",
  },
  {
    q: "The ACM document 'IS2020' refers to the curriculum for which field?",
    options: ["Computer Science", "Information Systems", "Information Technology", "Integrated Systems"],
    correct: 1,
    explanation: "IS2020 is the ACM/AIS curriculum document specifically for Information Systems, published in 2020.",
  },
  {
    q: "Which discipline acts as the bridge between business strategy and technology implementation?",
    options: ["Computer Science", "Information Technology", "Information Systems", "Software Engineering"],
    correct: 2,
    explanation: "Information Systems bridges organisational needs with technological solutions, making it the discipline most aligned with business-technology integration.",
  },
]

type UserAnswer = { selected: number; isCorrect: boolean } | null

export default function QuizSection() {
  const [answers, setAnswers] = useState<UserAnswer[]>(Array(questions.length).fill(null))
  const [showResults, setShowResults] = useState(false)
  const [currentQ, setCurrentQ] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSelect = (optionIdx: number) => {
    if (answers[currentQ] !== null) return
    const isCorrect = optionIdx === questions[currentQ].correct
    const updated = [...answers]
    updated[currentQ] = { selected: optionIdx, isCorrect }
    setAnswers(updated)
  }

  const score = answers.filter((a) => a?.isCorrect).length
  const allAnswered = answers.every((a) => a !== null)

  const reset = () => {
    setAnswers(Array(questions.length).fill(null))
    setShowResults(false)
    setCurrentQ(0)
  }

  const q = questions[currentQ]
  const ans = answers[currentQ]

  const optionClass = (i: number) => {
    if (!ans) return "border-border hover:border-primary/50 hover:bg-secondary/60 cursor-pointer"
    if (i === q.correct) return "border-green-500 bg-green-50 text-green-800"
    if (i === ans.selected && !ans.isCorrect) return "border-red-400 bg-red-50 text-red-800"
    return "border-border opacity-50 cursor-not-allowed"
  }

  return (
    <section id="quiz" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Knowledge Check
          </div>
          <h2 className="reveal font-serif text-3xl sm:text-4xl font-bold text-navy text-balance mb-4">
            Test Your Understanding
          </h2>
          <div className="reveal w-16 h-1 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="reveal text-muted-foreground leading-relaxed">
            Six questions to check your grasp of the differences between CS, IT, and IS based on ACM guidelines.
          </p>
        </div>

        {!showResults ? (
          <div className="reveal bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            {/* Progress bar */}
            <div className="h-1.5 bg-border">
              <div
                className="h-full transition-all duration-500 rounded-full"
                style={{
                  width: `${((currentQ + 1) / questions.length) * 100}%`,
                  background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))",
                }}
              />
            </div>

            <div className="p-8">
              {/* Q header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold text-muted-foreground">
                  Question {currentQ + 1} of {questions.length}
                </span>
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentQ(i)}
                      className={`w-7 h-7 rounded-full text-xs font-bold transition-all ${
                        i === currentQ
                          ? "bg-navy text-white"
                          : answers[i]?.isCorrect
                          ? "bg-green-500 text-white"
                          : answers[i]
                          ? "bg-red-400 text-white"
                          : "bg-secondary text-navy"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <h3 className="font-serif font-bold text-navy text-lg leading-snug mb-6 text-balance">{q.q}</h3>

              <div className="space-y-3 mb-6">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${optionClass(i)}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        ans && i === q.correct ? "bg-green-500 text-white" :
                        ans && i === ans.selected && !ans.isCorrect ? "bg-red-400 text-white" :
                        "bg-secondary text-navy"
                      }`}>
                        {String.fromCharCode(65 + i)}
                      </span>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>

              {/* Explanation */}
              {ans && (
                <div className={`rounded-xl p-4 mb-6 flex gap-3 ${ans.isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ans.isCorrect ? "#166534" : "#991b1b"} strokeWidth="2" className="shrink-0 mt-0.5">
                    {ans.isCorrect
                      ? <><circle cx="12" cy="12" r="10" /><polyline points="9 11 12 14 22 4" /></>
                      : <><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></>}
                  </svg>
                  <p className={`text-sm leading-relaxed ${ans.isCorrect ? "text-green-800" : "text-red-800"}`}>
                    <strong>{ans.isCorrect ? "Correct! " : "Not quite. "}</strong>
                    {q.explanation}
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                  disabled={currentQ === 0}
                  className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-navy disabled:opacity-30 hover:bg-secondary transition-colors"
                >
                  Previous
                </button>
                <div className="flex gap-3">
                  {currentQ < questions.length - 1 ? (
                    <button
                      onClick={() => setCurrentQ(currentQ + 1)}
                      className="px-5 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-primary transition-colors"
                    >
                      {ans ? "Next" : "Skip"}
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowResults(true)}
                      disabled={!allAnswered}
                      className="px-5 py-2.5 rounded-xl bg-gold text-navy text-sm font-bold disabled:opacity-40 hover:bg-gold/90 transition-colors"
                    >
                      See Results
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Results screen */
          <div className="reveal bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="bg-navy p-8 text-center">
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <span className="font-serif text-4xl font-bold text-gold">{score}/{questions.length}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {score === questions.length ? "Perfect Score!" : score >= 4 ? "Well Done!" : "Keep Learning!"}
              </h3>
              <p className="text-white/70 text-sm">
                You answered {score} out of {questions.length} questions correctly.
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-3 mb-8">
                {questions.map((question, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${answers[i]?.isCorrect ? "bg-green-50" : "bg-red-50"}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${answers[i]?.isCorrect ? "bg-green-500" : "bg-red-400"} text-white`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        {answers[i]?.isCorrect ? <polyline points="20 6 9 17 4 12" /> : <path d="M18 6 6 18M6 6l12 12" />}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy mb-0.5">Q{i + 1}: {question.q.substring(0, 60)}...</p>
                      <p className="text-xs text-muted-foreground">{question.explanation.substring(0, 80)}...</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={reset}
                className="w-full py-3 rounded-xl bg-navy text-white font-semibold hover:bg-primary transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
