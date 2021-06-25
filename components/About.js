import UserCard from "./UserCard";

export default function About() {
  return (
    <section id="about" className="my-20">
      <h1 className="text-2xl lg:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
        About Me
      </h1>
      <div className="flex flex-col lg:grid grid-cols-2 justify-items-center items-center mt-4 space-y-4">
        <UserCard />
        <p className="text-gray-400 lg:-ml-24">
          My name is Arnold Perez and I am currently an undergraduate student
          seeking a software engineering internship/full-time job. Previously,
          my career consisted of marketing after graduating from the University
          of Texas at Austin with a Bachelor of Science in Public Relations.
          After a few years in the industry, I decided to go back to school to
          pursue a Bachelor of Science in Computer Science from the University
          of Texas at Dallas and I have not looked back! It was my curiosity in
          how we can use technology to better our lives that led me to this
          career change. I have quickly immersed myself into the world of
          software engineering by becoming adept with programming languages, app
          development and the software development life cycle.
        </p>
      </div>
    </section>
  );
}
