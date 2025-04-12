"use client";

import React, { useState, useEffect } from "react";
import QuizHeader from "./_components/QuizHeader";
import QuizQuestion from "./_components/QuizQuestion";
import QuizOptions from "./_components/QuizOptions";
import QuizTimer from "./_components/QuizTimer";
import QuizProgress from "./_components/QuizProgress";
import QuizResult from "./_components/QuizResult";
import IdentificationQuestion from "./_components/IdentificationQuestion";
import Footer from "../_components/Footer";

const questions = [
  {
    id: 1,
    text: "Ito ang elektronikong kagamitan na ginagamit sa pagpapadikit ng tatak ng walis tambo sa tangkay nito.",
    correctAnswer: "BLOWER",
  },
  {
    id: 2,
    text: "Ano ang gamit upang pansamantalang ipitin ang tambo habang tinatahi?",
    correctAnswer: "IPIT",
  },
  {
    id: 3,
    text: "Ito ang uri ng kahoy na ginagamit bilang tangkay ng walis tambo.",
    correctAnswer: "BONGLIW",
  },
  {
    id: 4,
    text: "Ano ang kagamitan na ginagamit para sa mas mabilis na pagpapatuyo ng tambo?",
    correctAnswer: "DRYER",
  },
  {
    id: 5,
    text: "Ano ang ligaw na damong namumulaklak ng puti at may mataas na tangkad, na maaaring gamitin sa paggawa ng walis?",
    correctAnswer: "GAHO",
  },
  {
    id: 6,
    text: "Anong bayan ang kilala sa pagkakaroon ng matibay at magandang produkto ng walis tambo?",
    options: [
      "Daet, Camarines Norte",
      "San Lorenzo Ruiz, Camarines Norte",
      "Labo, Camarines Norte",
      "Mercedes, Camarines Norte",
    ],
    correctAnswer: "San Lorenzo Ruiz, Camarines Norte",
  },
  {
    id: 7,
    text: "Ano ang simbolismo ng walis tambo sa bayan ng San Lorenzo Ruiz?",
    options: [
      "Kasipagan at kasanayan ng mga manggagawa",
      "Yaman ng likas na kalikasan ng lugar",
      "Katatagan ng industriya ng agrikultura",
      "Matibay na ugnayan ng pamilya sa lugar",
    ],
    correctAnswer: "Kasipagan at kasanayan ng mga manggagawa",
  },
  {
    id: 8,
    text: "Anong buwan karaniwang inaani ang tambo?",
    options: [
      "Enero – Marso",
      "Pebrero – Mayo",
      "Hunyo – Setyembre",
      "Oktubre – Disyembre",
    ],
    correctAnswer: "Pebrero – Mayo",
  },
  {
    id: 9,
    text: "Bakit mahalagang patuyuin ang tambo bago ito iproseso?",
    options: [
      "Upang lumutong ito at madaling mahimay",
      "Upang maging matibay at hindi madaling mabulok",
      "Upang maging mas magaan at madaling dalhin",
      "Upang makulay ang magiging produkto",
    ],
    correctAnswer: "Upang maging matibay at hindi madaling mabulok",
  },
  {
    id: 10,
    text: "Ano ang ginagamit na alternatibong paraan sa pagpapatuyo ng tambo kung maulan?",
    options: [
      "Pagpapakulo ng tubig at pagsingaw ng tambo",
      "Pagsusunog ng tuyong dahon ng saging sa tabi nito",
      "Paglalagay sa mahinang apoy o pag-aagon",
      "Paggamit ng bentilador at blower",
    ],
    correctAnswer: "Paglalagay sa mahinang apoy o pag-aagon",
  },
  {
    id: 11,
    text: "Sino ang karaniwang gumagawa ng pagbibigkis ng tambo sa tangkay?",
    options: [
      "Mga lalaki",
      "Mga babae",
      "Mga bata",
      "Sinumang may sapat na kasanayan",
    ],
    correctAnswer: "Mga lalaki",
  },
  {
    id: 12,
    text: "Ano ang ginagawa sa walis bago ito ibenta sa pamilihan?",
    options: [
      "Binabalot ng dahon upang hindi madumihan",
      "Nilalagyan ng tatak at pinupulido ang anyo",
      "Isinusuot sa plastik upang hindi mabasa",
      "Pinapatakan ng langis upang maging makintab",
    ],
    correctAnswer: "Nilalagyan ng tatak at pinupulido ang anyo",
  },
  {
    id: 13,
    text: "Bakit hindi dapat tinatapakan o inuupuan ang walis tambo ayon sa paniniwala ng mga manggagawa?",
    options: [
      "Dahil masisira ang balanse ng tambo",
      "Dahil maaari itong makaapekto sa kanilang benta",
      "Dahil mas mabilis itong maluluma",
      "Dahil magiging mabigat ito sa paggamit",
    ],
    correctAnswer: "Dahil maaari itong makaapekto sa kanilang benta",
  },
  {
    id: 14,
    text: "Ano ang maaaring mangyari kung ang walis tambo ay iniimbak nang masyadong siksikan?",
    options: [
      "Mas tatagal ito at hindi madaling masira",
      "Magkakaroon ito of moisture na maaaring makasira sa kalidad",
      "Mas magiging makintab ito kapag ginamit",
      "Mas dadami ang mabebenta dahil magmumukha itong bago",
    ],
    correctAnswer:
      "Magkakaroon ito of moisture na maaaring makasira sa kalidad",
  },
  {
    id: 15,
    text: "Bakit mahalagang ipagpatuloy ang paggawa ng walis tambo sa San Lorenzo Ruiz?",
    options: [
      "Upang mapanatili ang identidad at kultura ng bayan",
      "Upang mas dumami ang dayuhang mamumuhunan sa lugar",
      "Upang palitan ang tradisyunal na paggawa ng modernong makina",
      "Upang makipagkumpitensya sa ibang bansa sa paggawa ng walis",
    ],
    correctAnswer: "Upang mapanatili ang identidad at kultura ng bayan",
  },
];

export default function ActivityPage() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(1200); // 20 minutes in seconds
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null),
  );
  const [hasAnswered, setHasAnswered] = useState<boolean[]>(
    Array(questions.length).fill(false),
  );

  useEffect(() => {
    if (!quizCompleted && hasStarted) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 0) {
            // Time's up, complete the quiz
            setQuizCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quizCompleted, hasStarted]);

  const goToNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (hasAnswered[currentQuestion]) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === questions[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore((prev) => Math.min(prev + 1, questions.length));
    }

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    const updatedHasAnswered = [...hasAnswered];
    updatedHasAnswered[currentQuestion] = true;
    setHasAnswered(updatedHasAnswered);

    setTimeout(() => goToNextQuestion(), transitionDelay);
  };

  const handleCorrect = () => {
    if (hasAnswered[currentQuestion]) return;

    setScore((prev) => Math.min(prev + 1, questions.length));

    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = questions[currentQuestion].correctAnswer;
      return updated;
    });

    const updatedHasAnswered = [...hasAnswered];
    updatedHasAnswered[currentQuestion] = true;
    setHasAnswered(updatedHasAnswered);

    setTimeout(() => goToNextQuestion(), transitionDelay);
  };

  const handleIncorrect = () => {
    if (hasAnswered[currentQuestion]) return;

    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestion] = "INCORRECT";
      return updated;
    });

    const updatedHasAnswered = [...hasAnswered];
    updatedHasAnswered[currentQuestion] = true;
    setHasAnswered(updatedHasAnswered);

    setTimeout(() => goToNextQuestion(), transitionDelay);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setTimeRemaining(1200); // Reset to 20 minutes
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
    setAnswers(Array(questions.length).fill(null));
    setHasAnswered(Array(questions.length).fill(false));
    setHasStarted(false); // reset to welcome screen
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const isIdentification = currentQuestion < 5;
  const transitionDelay = isIdentification ? 100 : 700;

  return (
    <div className="relative flex h-full flex-col bg-white">
      <div className="flex w-full flex-1 flex-col gap-6 px-4 pt-6 pb-12 sm:gap-8 sm:px-6 sm:pt-8 sm:pb-16 md:gap-12 md:px-8 md:pt-10 md:pb-20 lg:px-12 xl:px-16">
        {hasStarted && (
          <QuizHeader
            title="E-HABI"
            instruction={
              !quizCompleted ? "Complete the quiz to test your knowledge" : ""
            }
          />
        )}
        {!hasStarted ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-3xl font-bold text-black sm:mb-6 sm:text-4xl md:text-5xl">
              Pagsusulit para sa E-HABI
            </h1>
            <p className="mb-6 text-base text-gray-700 sm:mb-10 md:text-xl">
              Subukin ang iyong kaalaman tungkol sa Walis Tambo! I-click ang
              button sa ibaba upang magsimula.
            </p>
            <button
              onClick={() => setHasStarted(true)}
              className="rounded-full bg-orange-500 px-6 py-3 text-lg font-semibold text-white transition hover:bg-orange-600 sm:px-8 sm:py-4 sm:text-xl md:text-2xl"
            >
              Magsimula
            </button>
          </div>
        ) : !quizCompleted ? (
          <div className="flex h-[70vh] flex-col gap-4">
            <div className="mb-4 grid gap-4 md:grid-cols-[1fr_auto]">
              <QuizProgress
                current={currentQuestion + 1}
                total={questions.length}
              />
              <QuizTimer timeRemaining={formatTime(timeRemaining)} />
            </div>
            {isIdentification ? (
              <IdentificationQuestion
                question={questions[currentQuestion].text}
                answer={questions[currentQuestion].correctAnswer}
                onCorrect={handleCorrect}
                onIncorrect={handleIncorrect}
              />
            ) : (
              <div className="flex h-full flex-col gap-4">
                <QuizQuestion question={questions[currentQuestion].text} />
                <QuizOptions
                  options={questions[currentQuestion].options || []}
                  selectedAnswer={selectedAnswer}
                  correctAnswer={questions[currentQuestion].correctAnswer}
                  onSelect={handleAnswerSelect}
                />
              </div>
            )}
          </div>
        ) : (
          <>
            <QuizResult
              score={score}
              total={questions.length}
              answers={answers}
              questions={questions}
              onRestart={handleRestart}
            />
          </>
        )}
      </div>
      {quizCompleted && <Footer darkMode />}
    </div>
  );
}
