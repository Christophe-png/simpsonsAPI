import React from "react";
import "./QuoteList.css";

function QuoteListe({ quote }) {
  return (
    <div className="QuoteList">
      <img src={quote.image} alt={quote.character} />
      <figure>
        <blockquote>{quote.quote}</blockquote>
        <p>
          <cite>{quote.characters}</cite>
        </p>
      </figure>
    </div>
  );
}

export default QuoteList;
