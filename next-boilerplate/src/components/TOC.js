import React from "react";

const TOC = ({ tocs, gtag, display, toggle, handleToggle }) => {
  return (
    <nav className={`toc-sticky ${display}-only ${toggle ? "open" : ""}`}>
      <button
        className={`toc-toggle`}
        type='button'
        aria-label='Close Table of Contents'
        onClick={() => handleToggle()}
      >
        <h3>Table of Contents</h3>
        <span className='mobile-only'>{toggle ? "X" : "▼"}</span>
      </button>
      <div className={`toc-container ${toggle ? "show" : "hide"}`}>
        <ul className='toc-list'>
          {Array.from(tocs).map((toc, indt) => (
            <li key={indt}>
              <a href={`#${toc.id}`} onClick={() => handleToggle()}>
                {toc.innerText}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default TOC;
