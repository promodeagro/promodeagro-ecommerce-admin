import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Invoice = () => {
  const printRef = useRef();

  const handleDownloadPDF = () => {
    const element = printRef.current;
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF('p', 'in', 'letter');
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save('test.pdf');
    }).catch(err => console.error("Error generating PDF:", err));
  };

  return (
    <div>
      <div ref={printRef} style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
        <h1>Test Invoice</h1>
        <p>This is a basic test for PDF generation.</p>
      </div>
      <button onClick={handleDownloadPDF}>Download Test PDF</button>
    </div>
  );
};

export default Invoice;
