"use client";

import React, { useState, useEffect } from "react";
import QuizHeader from "./_components/QuizHeader";
import QuizQuestion from "./_components/QuizQuestion";
import QuizOptions from "./_components/QuizOptions";
import QuizTimer from "./_components/QuizTimer";
import QuizProgress from "./_components/QuizProgress";
import QuizResult from "./_components/QuizResult";
import IdentificationQuestion from "./_components/IdentificationQuestion";

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
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [hasAnswered, setHasAnswered] = useState<boolean[]>(
    Array(questions.length).fill(false)
  );

  useEffect(() => {
    setTimeRemaining(60);
  }, [currentQuestion]);

  useEffect(() => {
    if (!quizCompleted && hasStarted && !selectedAnswer) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 0) {
            const updatedAnswers = [...answers];
            if (!hasAnswered[currentQuestion]) {
              updatedAnswers[currentQuestion] = "TIMEOUT";
              setAnswers(updatedAnswers);

              const updatedHasAnswered = [...hasAnswered];
              updatedHasAnswered[currentQuestion] = true;
              setHasAnswered(updatedHasAnswered);
            }

            if (currentQuestion + 1 < questions.length) {
              setCurrentQuestion(currentQuestion + 1);
              setSelectedAnswer(null);
            } else {
              setQuizCompleted(true);
            }
            return 60;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [
    quizCompleted,
    hasStarted,
    currentQuestion,
    selectedAnswer,
    answers,
    hasAnswered,
  ]);

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
    setTimeRemaining(60);
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
    <div className="relative min-h-screen flex flex-col bg-[#F5F3F0]">
      {hasStarted && <QuizHeader title="E-HABI" showInstruction={!quizCompleted} />}

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 md:pb-20 flex-1 flex flex-col gap-6 sm:gap-8 md:gap-12">
        {!hasStarted ? (
          <div className="flex flex-col items-center justify-center flex-1 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
              Welcome to E-HABI Quiz
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-10">
              Test your knowledge about Walis Tambo! Click below to begin.
            </p>
            <button
              onClick={() => setHasStarted(true)}
              className="bg-orange-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-lg sm:text-xl md:text-2xl font-semibold hover:bg-orange-600 transition"
            >
              Start Quiz
            </button>
          </div>
        ) : !quizCompleted ? (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 md:mb-8 gap-4 sm:gap-0">
              <QuizProgress current={currentQuestion + 1} total={questions.length} />
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
              <>
                <QuizQuestion question={questions[currentQuestion].text} />
                <QuizOptions
                  options={questions[currentQuestion].options || []}
                  selectedAnswer={selectedAnswer}
                  correctAnswer={questions[currentQuestion].correctAnswer}
                  onSelect={handleAnswerSelect}
                />
              </>
            )}
          </>
        ) : (
          <QuizResult
            score={score}
            total={questions.length}
            answers={answers}
            questions={questions}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}
