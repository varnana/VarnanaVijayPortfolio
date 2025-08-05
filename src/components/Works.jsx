import React from "react";

const Contribution = () => {
  return (
    <div className="bg-[#0e0e0e] text-white py-10 px-4 flex flex-col items-center">
      {/* Main Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
        Academic Contributions
      </h2>

      {/* Master's Thesis Box */}
      <div className="bg-[#1d1836] p-8 rounded-2xl max-w-4xl w-full shadow-lg mb-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Master's Thesis
        </h3>
        <div className="mb-6">
          <p className="text-base sm:text-lg text-gray-400 mb-2">
            <strong className="text-white">University:</strong> University of Koblenz
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-2">
            <strong className="text-white">Supervisor:</strong> Prof. Dr. Frank Hopfgartner & Prof. Dr. Na Li
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            <strong className="text-white">Duration:</strong> March 2024 – August 2024
          </p>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4 text-[17px]">
          In the modern world, electricity consumption is rising at an unseen pace, fuelled by the post-pandemic economic revival and rising levels of electrification within many fields. Therefore, generating the electricity needed to cover all these needs is crucial. Hence, quantitative decision-making is one of the most reliable and utilized strategies that can be used here to analyze and forecast a country's energy demand. It is vital for ensuring a stable power supply and optimized resource allocation.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4 text-[17px]">
          Although electricity demand forecasting has been a research focus for many years due to its economic and strategic importance, achieving high accuracy and reliable long-term forecast patterns remains challenging. Factors contributing to this include data quality, model complexity, and interpretability. This thesis explores the application of time series analysis methods to electricity demand data in Britain, using data from 2009 to 2023. It starts with the preprocessing techniques followed by exploratory data analysis. The reasons behind the trends are also discussed. Further features are engineered and machine learning models XG Boost, FB Prophet, Linear trees, LSTM, Deep LSTM, GRU and TCN are used to forecast the demand for 2024 and compare with the originally recorded data. The best-performing models are chosen based on the accuracy and forecasting patterns.
        </p>
        <p className="text-gray-300 leading-relaxed text-[17px]">
          The results demonstrate practical impacts on energy policy, energy generation, infrastructure, and consumers, thereby adding business value to the field. Enhanced accuracy in forecasting will enhance the effective scheduling of resources and cut down on costs, power fluctuations, and instability. Also, it benefits practical energy policies in the long run as it is a general British interest to embrace sustainable energy. The use of renewable resources to reduce carbonization and its goal to stop contributing to global warming by 2050.
        </p>
      </div>

      {/* Bachelor's Thesis Box */}
      <div className="bg-[#1d1836] p-8 rounded-2xl max-w-4xl w-full shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
          Bachelor's Thesis
        </h3>
        <div className="mb-6">
          <p className="text-base sm:text-lg text-gray-400 mb-2">
            <strong className="text-white">University:</strong> Dr. APJ Abdul Kalam Technological University
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            <strong className="text-white">Duration:</strong> May 2019
          </p>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4 text-[17px]">
          Diabetic retinopathy is a leading cause of vision impairment, affecting over 93 million people worldwide. Many of these patients experience vision loss due to delayed treatment and missed follow-ups. Early diagnosis can significantly slow the progression and even prevent vision loss.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4 text-[17px]">
          In India, where there are about 30 million diabetic individuals, nearly 50% are estimated to suffer from some stage of diabetic retinopathy. Additionally, the shortage of over 127,000 eye doctors worsens the challenge, with 45% of DR patients experiencing vision loss before diagnosis.
        </p>
        <p className="text-gray-300 leading-relaxed text-[17px]">
          This thesis aims to create a machine learning-based diagnostic tool using convolutional neural networks (CNNs) to detect DR in retinal images with a high degree of accuracy. The goal is to support early diagnosis and enable automated screening processes, especially in under-resourced healthcare settings.
        </p>
      </div>
    </div>
  );
};

export default Contribution;
