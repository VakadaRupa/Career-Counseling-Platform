// Gemini disabled – using mock data instead

export const getCareerRecommendations = async (userData) => {
  console.log("Gemini disabled. Returning mock recommendations.");

  return [
    {
      jobTitle: "Frontend Developer",
      matchReason: "Based on your interest in technology and problem-solving.",
      skillsToDevelop: ["React", "JavaScript", "UI/UX basics"],
      salaryRange: "$60,000 - $95,000"
    },
    {
      jobTitle: "Data Analyst",
      matchReason: "Strong analytical and logical thinking skills.",
      skillsToDevelop: ["SQL", "Python", "Data Visualization"],
      salaryRange: "$55,000 - $90,000"
    },
    {
      jobTitle: "Product Manager",
      matchReason: "Good communication and strategic thinking abilities.",
      skillsToDevelop: ["Leadership", "Agile", "Market Research"],
      salaryRange: "$75,000 - $120,000"
    }
  ];
};

export const getCareerPathVisualizationData = async (careerGoal) => {
  console.log("Gemini disabled. Returning mock career path.");

  return [
    {
      title: "Junior Level",
      experience: "0-2 years",
      responsibilities: "Assist senior team members and learn fundamentals.",
      salary: "$50,000"
    },
    {
      title: "Mid Level",
      experience: "2-5 years",
      responsibilities: "Handle independent projects and collaborate cross-team.",
      salary: "$75,000"
    },
    {
      title: "Senior Level",
      experience: "5-8 years",
      responsibilities: "Lead projects and mentor junior staff.",
      salary: "$100,000"
    },
    {
      title: "Expert / Lead",
      experience: "8+ years",
      responsibilities: "Strategic decision-making and team leadership.",
      salary: "$130,000"
    }
  ];
};