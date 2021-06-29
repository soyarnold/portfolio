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
        {/* <Card
          src="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Sunset in the mountains"
          title="WORKZ"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Voluptatibus quia!"
          stack="Stack: Mongo, Express, React, Node"
          code="https://github.com/soyarnold/moviez"
          demo="https://moviez-murex.vercel.app/"
        /> */}
      </div>
    </section>
  );
}
