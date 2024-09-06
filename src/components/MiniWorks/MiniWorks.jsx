import s from "./MiniWorks.module.css";
import MiniWorksItem from "./MiniWorksItem";

const MiniWorks = () => {
  return (
    <section className={s.section} id="mini-works">
      <h2>Mini Single Works</h2>
      <MiniWorksItem
        title="Image Search Gallery"
        description="Project Role: Implementing the front-end using HTML, CSS, and JavaScript, and integrating the Pixabay API for image retrieval. I utilized Axios for API requests and SimpleLightbox for enhanced image viewing. Additionally, I implemented pagination to efficiently manage and display large sets of search results. I added iziToast to show errors to the user."
        techList="Technologies Used: HTML, CSS, JavaScript, Vite, Pixabay Service. Libraries: Axios, SimpleLightbox, iziToast."
        link="https://nikolayputyata.github.io/goit-js-hw-12/"
        repo="https://github.com/NikolayPutyata/goit-js-hw-12"
      />
      <MiniWorksItem
        title="Countdown Timer"
        description="Project Role: Developed the Countdown Timer application by implementing the front-end using HTML, CSS, and JavaScript. Created a responsive and user-friendly interface for tracking time until a specified event. I wrote JavaScript code to handle countdown calculations and real-time updates with the flatpickr library."
        techList="Technologies Used: HTML, CSS, JavaScript (ES6+). Libraries: iziToast, flatpickr."
        link="https://nikolayputyata.github.io/goit-js-hw-10/1-timer.html"
        repo="https://github.com/NikolayPutyata/goit-js-hw-10"
      />
      <MiniWorksItem
        title="Company Site"
        description="Project Role: Developed the web project by implementing the front-end using HTML and CSS based on a Figma design. Managed a self-directed approach with partial JavaScript integration to enhance functionality and interactivity. Created a responsive and visually appealing layout using Flexbox and Grid, with additional adjustments made through Media Queries for optimized display across various devices."
        techList="Technologies Used: HTML, CSS, JavaScript. Layout and Styling: Flexbox, Grid, Media Queries."
        link="https://nikolayputyata.github.io/goit-markup-hw-08"
        repo="https://github.com/NikolayPutyata/goit-markup-hw-08"
      />
    </section>
  );
};

export default MiniWorks;
