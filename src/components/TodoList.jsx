import React from "react"
import Image from 'react-bootstrap/Image'
import ListGroup from "react-bootstrap/ListGroup"

export function TodoList() {
    return (
      <>
      <h1>Hedy Lamarr&apos;s Todos</h1>
      <Image
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
      />
      <ListGroup className="m-3">
        <ListGroup.Item>Invent new traffic lights</ListGroup.Item>
        <ListGroup.Item>Rehearse a movie scene</ListGroup.Item>
        <ListGroup.Item>Improve the spectrum technology</ListGroup.Item>
      </ListGroup>
      </>
    );
}
  