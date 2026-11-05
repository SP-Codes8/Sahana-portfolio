import "./globals.css";

export const metadata = {
  title: "Sahana Patil | Developer & Data Analyst",
  description: "MCA graduate passionate about software development, full-stack engineering and data analytics."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
