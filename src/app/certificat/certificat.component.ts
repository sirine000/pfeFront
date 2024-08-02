import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css'],
})
export class CertificatComponent {
  userName: string = 'Cyrine Metoui'; // Example user name

  generateCertificate() {
    const certificateElement = document.getElementById('certificate');
    if (certificateElement) {
      html2canvas(certificateElement, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 10, 10, 280, 200); // Adjust dimensions as needed
        pdf.save('certificate.pdf');
      });
    }
  }
}
