import React from 'react';

const Contact = () => (
  <div className="hero">
    <h1>Contact</h1>
    <p>Message me here:</p>
    <div className="btn-group">
      <button className="primary" onClick={() => window.open("https://www.facebook.com/secocielo", "_blank")}>FACEBOOK</button>
      <button className="primary" onClick={() => window.open("https://www.instagram.com/zyloeeep/", "_blank")}>INSTAGRAM</button>
      <button className="primary" onClick={() => window.location.href = "mailto:secocielo@gmail.com"}>EMAIL ME</button>
    </div>
  </div>
);

export default Contact; 