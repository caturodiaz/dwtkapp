import { pdfjs } from "react-pdf";

// Aquí indicamos la URL del worker, que viene dentro del paquete pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
