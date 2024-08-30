import React from "react"
import Image from 'react-bootstrap/Image'
import ListGroup from "react-bootstrap/ListGroup"

export function TodoList1() {
    const avatar = "https://i.imgur.com/yXOvdOSs.jpg";
    const description = "Hedy Lamarr"

    const today = new Date();
    function formatDate(date){
      const formattedDate = new Intl.DateTimeFormat(
        'en-US',
        {'weekday': 'long'}
      ).format(date);
      return formattedDate;
    }


    return (
      <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <Image
        src= {avatar}
        alt= {description}
      />
      <h3>Date: {formatDate(today)}</h3>
      <ListGroup className="m-3">
        <ListGroup.Item>Invent new traffic lights</ListGroup.Item>
        <ListGroup.Item>Rehearse a movie scene</ListGroup.Item>
        <ListGroup.Item>Improve the spectrum technology</ListGroup.Item>
      </ListGroup>
      </>
    );
}
  
const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 'b',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

/**
 * Using JavaScript in JSX.
 * You can write it as 
 * src={baseUrl + person.imageId + person.imageSize + '.jpg'}.
 * 
 * { opens the JavaScript expression
 *     baseUrl + person.imageId + person.imageSize + '.jpg' produces
 *     the correct URL string
 * } closes the JavaScript expression
 * 
 */

export function TodoList2() {
  return (
    <div>
      <h1>{person.name}&apos;s Todos</h1>
      <Image
        src={baseUrl + person.imageId + person.imageSize + ".jpg"}
        alt={person.name}
      />
      <ListGroup className="p-3">
        <ListGroup.Item>Improve the videophone</ListGroup.Item>
        <ListGroup.Item>Prepare aeronautics lectures</ListGroup.Item>
        <ListGroup.Item>Work on the alcohol-fuelled engine</ListGroup.Item>
      </ListGroup>
    </div>
  );
}