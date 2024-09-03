const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
  export function Poem() {
    let output = [];
  
    // Fill the output array
    poem.lines.forEach((line, index) => {
      output.push(
        <hr key={index + '-separator'} />
      );
      output.push(
        <p 
          key={index + '-text'}>
          {line}
        </p>
      );
    });
    // Remove the first <hr />
    output.shift();
  
    return (
      <article>
        {output}
      </article>
    );
  }
  