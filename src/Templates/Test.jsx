import jsPDF from "jspdf";
import React from "react";

const Test = () => {
  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    const elem = document.querySelector("#doc");
    doc.html(elem, {
      callback: (doc) => {
        // pdf.setFont("normal")
        // pdf.setFontSize(10)
        // doc.addPage()
        doc.save("test.pdf");
      },
      // x: 10,
      // y: 10,
      width:595,
      // height:842,
      windowWidth:752
      // margin:0
    });
  };
  return (
    <>
      <div id="doc" style={{ width: 595, margin:'auto' }}>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit
          voluptatum obcaecati culpa error ducimus nisi, explicabo odit, sequi
          repudiandae reiciendis iusto animi accusamus minima illo inventore id
          rerum dolor?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit
          voluptatum obcaecati culpa error ducimus nisi, explicabo odit, sequi
          repudiandae reiciendis iusto animi accusamus minima illo inventore id
          rerum dolor?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit
          voluptatum obcaecati culpa error ducimus nisi, explicabo odit, sequi
          repudiandae reiciendis iusto animi accusamus minima illo inventore id
          rerum dolor?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit
          voluptatum obcaecati culpa error ducimus nisi, explicabo odit, sequi
          repudiandae reiciendis iusto animi accusamus minima illo inventore id
          rerum dolor?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit
          voluptatum obcaecati culpa error ducimus nisi, explicabo odit, sequi
          repudiandae reiciendis iusto animi accusamus minima illo inventore id
          rerum dolor?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit
          voluptatum obcaecati culpa error ducimus nisi, explicabo odit, sequi
          repudiandae reiciendis iusto animi accusamus minima illo inventore id
          rerum dolor?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit
          voluptatum obcaecati culpa error ducimus nisi, explicabo odit, sequi
          repudiandae reiciendis iusto animi accusamus minima illo inventore id
          rerum dolor?
        </p>
      </div>
      <button onClick={generatePDF}>PDF</button>
    </>
  );
};

export default Test;
