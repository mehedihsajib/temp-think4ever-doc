"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Hand,
  UserPlus,
  FolderPlus,
  Key,
  Rocket,
  Check,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  X,
  ExternalLink,
  Laptop,
  Layers,
  Zap,
} from "lucide-react";

interface StepMeta {
  index: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}

const stepsMeta: StepMeta[] = [
  {
    index: 0,
    title: "Introduction",
    subtitle: "Welcome",
    icon: Hand,
  },
  {
    index: 1,
    title: "Create Account",
    subtitle: "Setup identity",
    icon: UserPlus,
  },
  {
    index: 2,
    title: "Create Project",
    subtitle: "Initialize workspace",
    icon: FolderPlus,
  },
  {
    index: 3,
    title: "Add API Key",
    subtitle: "Secure access",
    icon: Key,
  },
  {
    index: 4,
    title: "Build Project",
    subtitle: "Finalize & Deploy",
    icon: Rocket,
  },
];

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentTopRef = useRef<HTMLDivElement>(null);

  const totalSteps = stepsMeta.length;

  const goToStep = (stepIndex: number) => {
    if (stepIndex === currentStep || stepIndex < 0 || stepIndex >= totalSteps) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentStep(stepIndex);
      setIsTransitioning(false);
      if (contentTopRef.current) {
        contentTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 180);
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      goToStep(currentStep + 1);
    } else {
      setShowSuccessModal(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      goToStep(currentStep - 1);
    }
  };

  const getContinueButtonText = () => {
    if (currentStep === totalSteps - 1) return "Customer Workspace";
    if (currentStep === 1) return "Create New Project";
    return "Continue";
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && !showSuccessModal && (e.metaKey || e.ctrlKey)) {
        handleNext();
      } else if (e.key === "ArrowLeft" && !showSuccessModal && (e.metaKey || e.ctrlKey)) {
        handleBack();
      } else if (e.key === "Escape" && showSuccessModal) {
        setShowSuccessModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, showSuccessModal]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Top Banner / Progress Indicator for Viewport */}
      <div className="bg-white dark:bg-[#0F172A] border-b border-slate-200/80 dark:border-slate-800 sticky top-16 z-20 transition-colors duration-200">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-[#1D63E0] dark:text-blue-400 border border-blue-200/60 dark:border-blue-900/50">
              <Sparkles className="w-3 h-3 text-[#1D63E0] dark:text-blue-400" />
              Interactive Guide
            </span>
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">
              Customer Onboarding
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                Step {currentStep + 1} of {totalSteps}
              </span>
              <div className="w-24 sm:w-36 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200/60 dark:border-slate-700">
                <div
                  className="h-full bg-gradient-to-r from-[#1D63E0] to-blue-500 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-bold text-[#1D63E0] dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
              {Math.round(((currentStep + 1) / totalSteps) * 100)}%
            </span>
          </div>
        </div>

        {/* Mobile Horizontal Stepper Tabs */}
        <div className="flex md:hidden overflow-x-auto no-scrollbar border-t border-slate-100 dark:border-slate-800 px-4 py-2 gap-2 bg-slate-50/60 dark:bg-slate-900/70">
          {stepsMeta.map((s) => {
            const isActive = s.index === currentStep;
            const isCompleted = s.index < currentStep;
            const Icon = s.icon;
            return (
              <button
                key={s.index}
                onClick={() => goToStep(s.index)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium shrink-0 transition-colors cursor-pointer ${
                  isActive
                    ? "bg-[#1D63E0] text-white shadow-xs"
                    : isCompleted
                    ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                ) : (
                  <Icon className="w-3.5 h-3.5" />
                )}
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Left Vertical Stepper Sidebar */}
          <aside className="hidden md:block w-72 lg:w-80 shrink-0 sticky top-36">
            <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs p-5 transition-colors duration-200">
              <div className="pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Onboarding Steps
                </h3>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
                  Getting Started Journey
                </p>
              </div>

              <nav className="relative space-y-2">
                {/* Connecting Track Line */}
                <div 
                  className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-100 dark:bg-slate-800 -z-0" 
                  aria-hidden="true" 
                />

                {stepsMeta.map((step) => {
                  const isActive = step.index === currentStep;
                  const isCompleted = step.index < currentStep;
                  const Icon = step.icon;

                  return (
                    <button
                      key={step.index}
                      type="button"
                      onClick={() => goToStep(step.index)}
                      className={`group relative flex items-center gap-3.5 w-full p-2.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-blue-50/90 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 shadow-xs"
                          : "hover:bg-slate-50/80 dark:hover:bg-slate-850/60 border border-transparent"
                      }`}
                    >
                      {/* Step Indicator Circle */}
                      <div
                        className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 font-bold text-xs ${
                          isActive
                            ? "bg-[#1D63E0] text-white shadow-sm ring-4 ring-blue-500/15"
                            : isCompleted
                            ? "bg-[#0B1B3A] dark:bg-blue-950 text-white dark:text-blue-300 dark:border dark:border-blue-800/60"
                            : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-2 border-slate-200 dark:border-slate-700 group-hover:border-slate-300 dark:group-hover:border-slate-600"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </div>

                      {/* Step Label */}
                      <div className="flex flex-col min-w-0">
                        <span
                          className={`text-sm font-semibold truncate transition-colors ${
                            isActive
                              ? "text-blue-900 dark:text-blue-300"
                              : isCompleted
                              ? "text-slate-800 dark:text-slate-200"
                              : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200"
                          }`}
                        >
                          {step.title}
                        </span>
                        <span
                          className={`text-xs truncate ${
                            isActive ? "text-blue-600 dark:text-blue-400 font-medium" : "text-slate-400 dark:text-slate-500"
                          }`}
                        >
                          {step.subtitle}
                        </span>
                      </div>

                      {/* Right Indicator */}
                      {isActive && (
                        <div className="ml-auto w-1.5 h-5 rounded-full bg-[#1D63E0]" />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Progress</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {currentStep + 1} of {totalSteps} Complete
                </span>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 min-w-0 w-full" ref={contentTopRef}>
            <div
              className={`transition-all duration-200 ease-out ${
                isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              {currentStep === 0 && <Step0Introduction />}
              {currentStep === 1 && <Step1CustomerOnboarding />}
              {currentStep === 2 && <Step2CreateProject />}
              {currentStep === 3 && <Step3AddApiKey />}
              {currentStep === 4 && <Step4BuildProject />}
            </div>

            {/* Sticky Bottom Navigation Controls */}
            <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 order-2 sm:order-1">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    currentStep === 0
                      ? "opacity-40 cursor-not-allowed bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-700 active:scale-[0.99]"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <span className="text-xs text-slate-400 dark:text-slate-500 hidden sm:inline">
                  Step {currentStep + 1} of {totalSteps}
                </span>
              </div>

              <div className="order-1 sm:order-2 w-full sm:w-auto flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-7 py-3 rounded-full bg-[#1D63E0] text-white font-semibold text-sm shadow-sm hover:bg-[#1554c2] hover:shadow-md hover:shadow-blue-500/15 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <span>{getContinueButtonText()}</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Completion Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white dark:bg-[#111827] rounded-3xl p-8 shadow-2xl border border-slate-100 dark:border-slate-800 text-center animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-950/50 text-[#1D63E0] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60 mx-auto flex items-center justify-center shadow-inner mb-6">
              <Rocket className="w-10 h-10 animate-bounce" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Welcome Onboard!
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
              Let's start building amazing things together. You've completed the onboarding tour.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/portal/workspace"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1D63E0] hover:bg-[#1554c2] text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer"
              >
                <span>Go to Customer Workspace</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/introduction"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-sm transition-colors cursor-pointer"
              >
                <span>Go to Documentation</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   STEP 0: INTRODUCTION
   ========================================================================= */
function Step0Introduction() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-[#1D63E0] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
          Step 0 • Introduction
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Introduction
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          The Think4Ever Home Page serves as the main landing page of the
          platform. It introduces users to the platform’s AI-powered
          software development capabilities and provides quick access to
          key sections such as Features, Packages, Sign In, and Getting
          Started.
        </p>
      </div>

      {/* Main Hero Showcase Card */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden transition-colors">
        <div className="p-3 sm:p-4 bg-slate-50/70 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono ml-2">think4ever.com</span>
        </div>
        <div className="p-4 sm:p-6 bg-slate-100/50 dark:bg-slate-900/40 flex justify-center">
          <img
            src="/docs/images/customer-onboard/t4e-website-main.png"
            alt="Think4Ever Website Main"
            className="w-full h-auto rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800 object-cover"
          />
        </div>
      </div>

      {/* Structured Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Navigation Bar Card */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#1D63E0] dark:text-blue-400 flex items-center justify-center font-bold">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Navigation Bar</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Platform navigation guide</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Located at the top of the page, the navigation bar provides quick
            access to important sections of the platform.
          </p>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Available Menu Options
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                <span><strong className="text-slate-900 dark:text-slate-100">Features</strong> – Displays the platform capabilities and tools.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                <span><strong className="text-slate-900 dark:text-slate-100">How It Works</strong> – Explains the Think4Ever workflow and AI-driven process.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                <span><strong className="text-slate-900 dark:text-slate-100">Packages</strong> – Shows available subscription plans or service offerings.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Action Buttons
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                <span><strong className="text-slate-900 dark:text-slate-100">Sign In</strong> – Redirects users to the login page.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                <span><strong className="text-slate-900 dark:text-slate-100">Get Started</strong> – Begins the onboarding or registration process for new users.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How to Use the Home Page Card */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#1D63E0] dark:text-blue-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">How to Use the Home Page</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Usage paths for different users</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <span className="font-semibold text-xs uppercase tracking-wide text-blue-900 dark:text-blue-300">
                For Existing Users
              </span>
              <ol className="mt-1.5 space-y-1 list-decimal list-inside text-slate-600 dark:text-slate-300">
                <li>Click Sign In.</li>
                <li>Enter your credentials on the Login page.</li>
                <li>Access your dashboard and projects.</li>
              </ol>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="font-semibold text-xs uppercase tracking-wide text-blue-900 dark:text-blue-300">
                For New Users
              </span>
              <ol className="mt-1.5 space-y-1 list-decimal list-inside text-slate-600 dark:text-slate-300">
                <li>Click Get Started.</li>
                <li>Complete the registration or onboarding process.</li>
                <li>Begin creating projects using the platform tools.</li>
              </ol>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="font-semibold text-xs uppercase tracking-wide text-blue-900 dark:text-blue-300">
                To Learn About the Platform
              </span>
              <ul className="mt-1.5 space-y-1 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                  <span>Use the Features menu to explore platform capabilities.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                  <span>Select How It Works to understand the AI-assisted workflow.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] mt-2 shrink-0" />
                  <span>Review Packages for available plans and services.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   STEP 1: CREATE ACCOUNT / CUSTOMER ONBOARDING
   ========================================================================= */
function Step1CustomerOnboarding() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-[#1D63E0] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
          Step 1 • Create Account
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Customer Onboarding
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          Welcome to Think4ever! The Customer Onboarding process is designed to seamlessly guide you through setting
          up your account, securing your profile, and configuring your preferences so you can quickly begin getting
          value from the platform.
        </p>
      </div>

      {/* Hero Image Card */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs overflow-hidden transition-colors">
        <div className="p-4 sm:p-6 bg-slate-100/50 dark:bg-slate-900/40 flex justify-center">
          <img
            src="/docs/images/customer-onboard/t4e-website-main.png"
            alt="Customer Onboarding"
            className="w-full h-auto rounded-xl shadow-sm border border-slate-200/60 dark:border-slate-800 object-cover"
          />
        </div>
      </div>

      {/* Overview Cards (Purpose & Prerequisites) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-3 transition-colors">
          <div className="flex items-center gap-2.5 text-[#1D63E0] dark:text-blue-400">
            <ShieldCheck className="w-5 h-5 text-[#1D63E0] dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">Purpose of Onboarding</h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">The onboarding journey ensures that:</p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D63E0] dark:text-blue-400 mt-0.5 shrink-0" />
              <span>Your account details and identity are verified for data security and privacy compliance.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D63E0] dark:text-blue-400 mt-0.5 shrink-0" />
              <span>Your profile and organizational preferences are correctly established.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D63E0] dark:text-blue-400 mt-0.5 shrink-0" />
              <span>You select the subscription plan that best aligns with your team or personal requirements.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#1D63E0] dark:text-blue-400 mt-0.5 shrink-0" />
              <span>You gain immediate access to your customized Think4ever workspace.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-3 transition-colors">
          <div className="flex items-center gap-2.5 text-[#1D63E0] dark:text-blue-400">
            <Zap className="w-5 h-5 text-[#1D63E0] dark:text-blue-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">What You Will Need Before Starting</h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">Before you begin, ensure you have:</p>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] dark:bg-blue-400 mt-2 shrink-0" />
              <span>A valid business or personal email address.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] dark:bg-blue-400 mt-2 shrink-0" />
              <span>Access to your email inbox to receive verification security codes (OTP).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] dark:bg-blue-400 mt-2 shrink-0" />
              <span>Basic organizational details (such as company/team name and your role).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D63E0] dark:bg-blue-400 mt-2 shrink-0" />
              <span>Payment information if opting for a paid subscription tier.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Step by Step Walkthrough */}
      <div className="space-y-6 pt-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
            Account Creation & Registration Process
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            Follow the step-by-step instructions below to complete your registration and onboarding:
          </p>
        </div>

        {/* Sub-step 1 */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
              Step 1
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Access the Landing Page</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Description:</strong> Navigate to the official Think4ever homepage using your web browser.
            Click on either the "Sign In" or "Start Free" button located in the top navigation header to begin the
            onboarding and registration process.
          </p>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-acc-1.png"
              alt="Access the Landing Page"
              className="w-full h-auto"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              In the Login page, click on <strong className="text-slate-900 dark:text-slate-100">Create One</strong>
            </p>
            <div className="mt-3 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <img
                src="/docs/images/customer-onboard/create-acc-1.1.png"
                alt="Create One"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Sub-step 2 */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
              Step 2
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Account Registration / Sign-Up Form</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Description:</strong> A "Create your Account" modal window will appear.
          </p>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-acc-2.png"
              alt="Registration Form"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Sub-step 3 */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
              Step 3
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Review Terms of Service & Privacy Policy</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Description:</strong> A window will display the Terms of Service and Privacy Policy document.
          </p>
          <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">Actions Required:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-2">
              <li>Carefully read through the agreement terms.</li>
              <li>Scroll to the bottom and click "I Agree" or "Accept & Continue" to acknowledge acceptance.</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-acc-3.png"
              alt="Review Terms of Service"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Sub-step 4 */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
              Step 4
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Accept User Agreements / Data Usage Policies</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Description:</strong> A secondary consent dialog displays details regarding data privacy,
            cookie consent, or platform usage terms.
          </p>
          <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">Actions Required:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-2">
              <li>Review the consent options provided.</li>
              <li>Click "Agree & Proceed" or "Accept All".</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-acc-4.png"
              alt="Accept User Agreements"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Sub-step 5 */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
              Step 5
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Email / OTP Verification</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Description:</strong> To secure your account, a verification code (OTP) is sent to the email
            address provided in Step 2.
          </p>
          <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">Actions Required:</strong>
            <div className="space-y-4">
              <div>
                <p>a. Check your email inbox for the Think4ever verification code.</p>
                <div className="mt-2 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <img
                    src="/docs/images/customer-onboard/create-acc-5.png"
                    alt="Email Verification"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <p>b. Enter the 6-digit code into the designated input fields on screen.</p>
              <div>
                <p>c. Click Verify & continue.</p>
                <div className="mt-2 rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <img
                    src="/docs/images/customer-onboard/create-acc-5.1.png"
                    alt="Email Verification"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-step 6 */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
              Step 6
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Select Subscription Plan</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Description:</strong> Choose the subscription tier that best suits your requirements (e.g.,
            Free or Think New).
          </p>
          <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
            <strong className="text-slate-900 dark:text-slate-100">Actions Required:</strong>
            <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400 pl-2">
              <li>Compare feature lists, pricing, and billing cycles (Monthly vs. Annual).</li>
              <li>Select your preferred plan by clicking "Start Free" or "Select Plan".</li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-acc-6.png"
              alt="Select Subscription Plan"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Sub-step 7 */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
              Step 7
            </span>
            <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">Workspace Initialization</h4>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong className="text-slate-900 dark:text-slate-100">Description:</strong> Once your plan is selected, a "Preparing your workspace" modal window
            appears while the platform provisions your personal development workspace and configures system
            preferences.
          </p>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/portal/00-dashboard.png"
              alt="Workspace Initialization"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   STEP 2: CREATE PROJECT
   ========================================================================= */
function Step2CreateProject() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-[#1D63E0] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
          Step 2 • Create Project
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Create your first project
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          Add a project to organize your work, tasks, and team resources efficiently.
        </p>
      </div>

      {/* Intro Card */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Upon creating an account, users are automatically directed to set up a <strong className="text-slate-900 dark:text-slate-100">New Project.</strong>
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/create-project-1.png"
            alt="Create Project"
            className="w-full h-auto"
          />
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Choose how you want to create a project
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Select the path that matches your current development state to establish a useful system view:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-slate-100 text-sm block mb-1">Analyze Existing Code:</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Import an existing repository or local codebase to automatically generate an interactive, reviewable architecture map.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-slate-100 text-sm block mb-1">Production Hardening:</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Import code to run automated reviewer agent audits across security, config, and system reliability checklists.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800">
              <strong className="text-slate-900 dark:text-slate-100 text-sm block mb-1">Design from Intent:</strong>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Define functional constraints, system invariants, and architectural diagrams before writing any code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Walkthrough Showcase Cards */}
      <div className="space-y-6">
        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Analyze Existing Code</h3>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-project-2.png"
              alt="Analyze Existing Code"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Production Hardening</h3>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-project-3.png"
              alt="Production Hardening"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Design from Intent</h3>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-project-4.png"
              alt="Design from Intent"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Requirements Analysis</h3>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-project-5.png"
              alt="Requirements Analysis"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Production readiness report can be generated for your existing project
          </h3>
          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <img
              src="/docs/images/customer-onboard/create-project-6.png"
              alt="Production Readiness Report"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   STEP 3: ADD API KEY
   ========================================================================= */
function Step3AddApiKey() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-[#1D63E0] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
          Step 3 • Add API Key
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Add your API key
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          API Keys from LLM providers like Anthropic, Google or Open AI are required
        </p>
      </div>

      {/* Step 01 Card */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
            Step 01
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Add API Key</h3>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          You need to add API key to move forward. Copy your API key from the developer settings and paste it here.
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/11-setup-api-key.png"
            alt="Setup API Key"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 02 Card */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
            Step 02
          </span>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Add Multiple API Key</h3>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          You can add multiple API Keys to your project. We recommend that you provide at least 2 keys from different LLM
          providers. All your information is stored securely in your workspace and inaccessible for anyone else, including
          Think4Ever. This is a BYOD model. We support LLMs from different providers. Select the LLM and provide the Keys
          that you have registered with the external LLM providers.
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/12-mutiple-api-key.png"
            alt="Multiple API Key"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   STEP 4: BUILD PROJECT
   ========================================================================= */
function Step4BuildProject() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-[#1D63E0] dark:text-blue-400 border border-blue-100 dark:border-blue-900/60">
          Step 4 • Build Project
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
          Build and Launch
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          Build out your workspace with automation, custom workflows, and integrations.
        </p>
      </div>

      {/* Step 1 */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Once concepts, requirements and UI screens are generated, next step will be to build the app or Develop the app.
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/build-project-1.png"
            alt="Build Project"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Choose how to build the app.</h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Select your preferred development approach and choose the AI agents that will assist in building your application.
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/build-project-2.png"
            alt="Choose how to build the app"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Choose the phase(s) you will build.</h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Select the active roadmap phase(s) for initial development and specify any specific features or goals to prioritize. Then click Draft Plan.
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/build-project-3.png"
            alt="Choose the phase"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 4 */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Wait for the system to finish building the app</h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Once the setup is complete, the system will automatically initiate the build process. Please allow the
          platform time to execute the build, assemble system architecture, and generate your application
          components based on your selected roadmap phases and agent specifications. Progress indicators will
          keep you updated in real time.
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/build-project-4.png"
            alt="Wait for system build"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 5 */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Launch your app</h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Once the app has been successfully built, you can click on Open App button to launch it.
        </p>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/build-project-5.png"
            alt="Launch your app"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Step 6 */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs space-y-4 transition-colors">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
          Explore your newly generated application and launch it to the public.
        </h3>
        <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <img
            src="/docs/images/customer-onboard/build-project-6.png"
            alt="Explore newly generated application"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
