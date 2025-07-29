import { publicationAndResume } from "../constants";
import { FaFileAlt, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const Certification = () => {
  const { publication, resume } = publicationAndResume;

  return (
    <section className="max-w-6xl mx-auto px-6 sm:px-12 py-28 flex flex-col gap-28">
      {/* 📄 Published Paper */}
      <div className="flex flex-col gap-6 text-left">
        <div className="flex items-center gap-4">
          <FaFileAlt className="text-[36px] text-indigo-400" />
          <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-snug">
            Published Conference Paper:
            <br />
            <span className="text-white/90">CampusTrace</span>
          </h2>
        </div>

        <p className="text-secondary text-[18px] leading-[30px] max-w-4xl">
          {publication.description}
        </p>

        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-indigo-400 text-[17px] font-semibold hover:underline hover:opacity-90 transition"
        >
          <FaExternalLinkAlt />
          View Published Paper
        </a>
      </div>

   {/* 📂 Resume Section */}
<div className="flex flex-col gap-6 text-left mt-4">
  <div className="flex items-center gap-4">
    <FaDownload className="text-[36px] text-purple-400" />
    <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-snug">
      Download My Resume
    </h2>
  </div>
  <p className="mt-2 text-secondary text-[17px] max-w-5xl leading-relaxed">
    Feel free to download my updated resume to know more about my work,
    experience, and skills.
  </p>
  <a
    href="/abhiram_resume.pdf"
    download
    className="text-purple-400 hover:underline text-lg font-medium w-fit"
  >
    📥 Click here to Download My Resume
  </a>
</div>


    </section>
  );
};

export default Certification;
