import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const Invoice = () => {
  const printRef = useRef();

  const handleDownloadPDF = () => {
    const element = printRef.current;
    const opt = {
      margin: 0.5,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.75 }, // Lowered quality
      html2canvas: { scale: 1 }, // Lowered scale
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).outputPdf('bloburl').then((blobUrl) => {
      // Create a link element
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'invoice.pdf';

      // Automatically trigger the download
      link.click();

      // Clean up the link element
      link.remove();
    }).catch(err => console.error("Error generating PDF:", err));
  };

  return (
    <div>
      <style>{`
        .invoice-container {
          padding: 20px;
          background-color: #e0e0e0;
        }

        .download-btn {
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }

        .download-btn:hover {
          background-color: #45a049;
        }
      `}</style>

      <div ref={printRef} className="invoice-container">
        <h1>Test Invoice</h1>
        <p>This is a basic test for PDF generation.</p>
      </div>
      <button className="download-btn" onClick={handleDownloadPDF}>Download Test PDF</button>
    </div>
  );
};

export default Invoice;
