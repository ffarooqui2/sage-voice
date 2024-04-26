import "./home.css";

export default function Home() {
  return (
    <div className="appBackground">
      <div className="hero">
        <h1 className="hero__title">SAGE VOICE</h1>
        <p className="hero__subtitle">Speaking with AI</p>

        <div className="hero__buttons">
          <button className="hero__button--get-started">Get Started</button>
          <button className="hero__button--github">Github</button>
        </div>
      </div>
    </div>
  );
}
