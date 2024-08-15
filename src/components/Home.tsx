import React from 'react';
import featImg from "../assets/FTC4.jpg";

interface HomeProps {
  title: string;
}

const Home: React.FC<HomeProps> = ({ title }) => {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

      <h1>{title}</h1>
      <p>
        FindtechComp is created by {" "}
        <a
          href="https://www.linkedin.com/in/joseph-umba-75a9051b0/"
          target="_blank"
          rel="noreferrer noopener"
        >
          @Umba_J 
        </a>
        The information provided on this platform, including company details and contact information, is compiled to aid users in directly reaching out to potential employers. Any resemblance to real products, services, or companies is purely coincidental. The data offered on this site should be used as a resource and does not guarantee job placement or availability of positions. Users are encouraged to verify information with the respective companies.
      </p>
    </div>
  );
}

export default Home;
