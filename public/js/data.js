window.siteData = {
  title: "Ronald Corona",
  hero: {
    title: "Full Stack Interactive Web Developer",
    description: "Software Developer. Skater. Digital Nomad.",
  },
  sections: [
    {
      id: "music",
      title: "Music",
      path: "/music",
      description: "Sonic experiments and synthesizers.",
      theme: {
        header: "#d500f9", // Neon Purple
        title: "#ff4081", // Neon Pink
      },
      projects: [
        {
          id: "nunisynth",
          title: "NuniSynth",
          path: "/music/nunisynth",
          description: "A browser-based synthesizer built with Web Audio API.",
          image: "/images/nunisynth.png",
          action: "SYNTHESIZE",
          links: { demo: "#", repo: "#" },
        },
      ],
    },
    {
      id: "academic",
      title: "Academic",
      path: "/academic",
      description: "Research and theoretical computer science.",
      theme: {
        header: "#00b0ff", // Neon Blue
        title: "#00e5ff", // Neon Cyan
      },
      projects: [
        {
          id: "lambda-calc-eval",
          title: "Lambda Calc Eval",
          path: "/academic/lambda-calc-eval",
          description: "A visual evaluator for Lambda Calculus expressions.",
          image: "/images/lambda_calc_eval.png",
          action: "EVALUATE",
          links: { demo: "#", repo: "#" },
        },
        {
          id: "coding-pro",
          title: "Coding Pro",
          path: "/academic/coding-pro",
          description: "Advanced algorithms and data structures visualizer.",
          image: "/images/coding_pro.png",
          action: "COMPILE",
          links: { demo: "#", repo: "#" },
        },
      ],
    },
    {
      id: "games",
      title: "Games",
      path: "/games",
      description: "Interactive experiences and digital playgrounds.",
      theme: {
        header: "#ff3d00", // Neon Red-Orange
        title: "#ff9100", // Neon Orange
      },
      projects: [
        {
          id: "blood-blaze",
          title: "Blood Blaze",
          path: "/games/blood-blaze",
          description: "High-octane action platformer.",
          image: "/images/blood_blaze.png",
          action: "FIGHT",
          links: { demo: "#", repo: "#" },
        },
        {
          id: "blur-blaze",
          title: "Blur Blaze",
          path: "/games/blur-blaze",
          description: "Experimental racing game with motion blur aesthetics.",
          image: "/images/blur_blaze.png",
          action: "RACE",
          links: { demo: "#", repo: "#" },
        },
      ],
    },
    {
      id: "electronics",
      title: "Electronics",
      path: "/electronics",
      description: "Hardware hacks and physical computing.",
      theme: {
        header: "#00e676", // Neon Green
        title: "#76ff03", // Neon Lime
      },
      projects: [
        {
          id: "asynchonous-reluctance-motor",
          title: "Async Reluctance Motor",
          path: "/electronics/asynchonous-reluctance-motor",
          description: "Custom controller for a reluctance motor.",
          image: "/images/async_motor.svg",
          action: "ENERGIZE",
          links: { demo: "#", repo: "#" },
        },
        {
          id: "nodemcu-car",
          title: "NodeMCU Car",
          path: "/electronics/nodemcu-car",
          description: "WiFi-controlled RC car using NodeMCU.",
          image: "/images/nodemcu_car.svg",
          action: "DRIVE",
          links: { demo: "#", repo: "#" },
        },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      path: "/analytics",
      description: "Blockchain tools and data analysis.",
      theme: {
        header: "#ffab00", // Neon Amber
        title: "#ffea00", // Neon Yellow
      },
      projects: [
        {
          id: "crypto-pump-notifier",
          title: "Crypto Pump Notifier",
          path: "/analytics/crypto-pump-notifier",
          description: "Real-time alerts for market movements.",
          image: "/images/crypto_pump.svg",
          action: "TRACK",
          links: { demo: "#", repo: "#" },
        },
        {
          id: "corona-analytics",
          title: "Corona Analytics",
          path: "/analytics/corona-analytics",
          description: "Data visualization for global health statistics.",
          image: "/images/corona_analytics.svg",
          action: "ANALYZE",
          links: { demo: "#", repo: "#" },
        },
      ],
    },
  ],
};
