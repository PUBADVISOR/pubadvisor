
// pubadvisor-app/src/App.jsx
import React, { useState } from "react";

const ads = [
  {
    id: 1,
    title: "Digital Ad 1",
    videoUrl: "/ad1.mp4", // Video files should be placed in public folder
  },
  {
    id: 2,
    title: "TV Ad 2",
    videoUrl: "/ad2.mp4",
  },
];

const criteria = ["Relevance", "Creativity", "Clarity", "Emotion"];

function App() {
  const [selectedAd, setSelectedAd] = useState(ads[0]);
  const [ratings, setRatings] = useState({});

  const handleRating = (criterion, value) => {
    setRatings((prev) => ({ ...prev, [criterion]: value }));
  };

  const handleSubmit = () => {
    console.log("Submitted ratings:", ratings);
    alert("Thank you for your feedback!");
  };

  return (
    <div className="p-6 font-sans max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">PubAdvisor</h1>
      <select
        className="mb-4 p-2 border rounded w-full"
        onChange={(e) =>
          setSelectedAd(ads.find((ad) => ad.id === Number(e.target.value)))
        }
      >
        {ads.map((ad) => (
          <option key={ad.id} value={ad.id}>
            {ad.title}
          </option>
        ))}
      </select>

      <div className="mb-6">
        <video width="100%" controls>
          <source src={selectedAd.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mb-6">
        {criteria.map((criterion) => (
          <div key={criterion} className="mb-4">
            <label className="block text-sm font-medium mb-1">
              {criterion}
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={ratings[criterion] || 3}
              onChange={(e) => handleRating(criterion, Number(e.target.value))}
              className="w-full"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-3 rounded w-full text-lg"
      >
        Submit Review
      </button>
    </div>
  );
}

export default App;
