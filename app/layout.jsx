import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Free Courses App",
  description: "Web Development Tutorials and Coursers",
  keywords:
    "web development, web design, javascript, react, node, angular, nextJS, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
