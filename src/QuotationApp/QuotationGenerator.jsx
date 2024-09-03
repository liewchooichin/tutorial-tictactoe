import { useState, useEffect } from "react";
import { FancyText } from "./FancyText";
import { Button } from 'react-bootstrap';
import { quotes } from "./quotesData";


export function QuotationGenerator({children}) {
    const [index, setIndex] = useState(0);
    const quote = quotes[index];
    function handleNextIndex(event){
        setIndex((index + 1) % quotes.length);
    }   
    
    console.log(`Quote: ${quote.author}, ${quote.title}, index: ${index}`);

    return (
      <>
        <p>Your inspirational quote is:</p>
        <FancyText quotation={quote} />
        <Button onClick={handleNextIndex}>
            Inspire me again
        </Button>
        
      </>
    );
  }
  