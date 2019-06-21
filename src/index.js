import React from "react";
import { Button } from "reactstrap";

const ReactColorSquare = props => {

  const { data, fileName } = props;

  const download = () => {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8, ${encodeURIComponent(data)}`);
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.append(element);

    element.click();

    document.body.removeChild(element);
  }

  return (
    <div>
      <Button onClick={download}>Download</Button>
    </div>
  );
};

export default ReactColorSquare;
