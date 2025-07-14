import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const exportToPDF = (messages, roomCode) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(16);
  doc.text(`Chat Room: ${roomCode}`, 14, 15);
  
  // Add date
  const date = new Date().toLocaleDateString();
  doc.setFontSize(12);
  doc.text(date, 14, 25);
  
  // Add messages table
  const tableData = messages.map((msg, index) => ({
    '#': index + 1,
    'User': msg.user,
    'Message': msg.message,
    'Time': new Date(msg.timestamp).toLocaleTimeString()
  }));

  autoTable(doc, {
    head: [['#', 'User', 'Message', 'Time']],
    body: tableData,
    startY: 35,
    margin: { right: 10 }
  });

  return doc;
};
