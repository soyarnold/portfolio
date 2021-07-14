import Card from "./Card";

export default function Projects() {
  return (
    <section id="projects" className="my-20">
      <h1 className="mb-8 text-2xl lg:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
        Projects
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          src="https://raw.githubusercontent.com/soyarnold/homez/main/homez-preview.png"
          alt="HOMEZ app screenshot"
          title="Homez"
          description="HOMEZ is my own version of an online marketplace for recently sold homes. The front-end fetches the most recent $1 million+ home sales in San Francisco, CA."
          stack="Stack: React, Tailwind, Vercel, US Real Estate API"
          code="https://github.com/soyarnold/homez"
          demo="https://homez-psi.vercel.app/"
        />
        <Card
          src="/images/candle-shop-screenshot.png"
          alt="Candle Shop screenshot"
          title="Candle Shop"
          description="Candle Shop is an e-commerce web application showcasing product filters, sorting, add and remove actions, and how to manage the applications state and local storage."
          stack="Stack: JavaScript, React, Vercel"
          code="https://github.com/soyarnold/candle-shopping-cart"
          demo="https://candle-shopping-cart.vercel.app/"
        />
        <Card
          src="https://raw.githubusercontent.com/soyarnold/moviez/main/MOVIEZ-screenshot.png"
          alt="MOVIEZ app screenshot"
          title="Moviez"
          description="MOVIEZ is a web application that allows the user to easily browse through a wide selection of recent movies that is fetched from The Movie Database."
          stack="Stack: React, Tailwind, Vercel, Hostinger"
          code="https://github.com/soyarnold/moviez"
          demo="https://moviez-murex.vercel.app/"
        />
        <Card
          src="https://github.com/soyarnold/compound-interest-calculator/blob/main/compound-interest-calculator.png?raw=true"
          alt="JavaServer Page screenshot"
          title="Compound Interest"
          description="The Compound Interest Calculator takes in user input to calculate the addition of interest to the principal sum of a loan or deposit. Displayed on user-friendly GUI."
          stack="Stack: Java, Servlets, JSP, Tailwind"
          code="https://github.com/soyarnold/compound-interest-calculator"
          demo="https://github.com/soyarnold/compound-interest-calculator"
        />
      </div>
    </section>
  );
}
