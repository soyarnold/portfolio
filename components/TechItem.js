export default function TechItem({ Icon, title, experience, list }) {
  return (
    <div className="flex flex-row space-x-8 mt-12 mb-8">
      <Icon className="text-2xl md:text-4xl" />
      <div className="flex flex-col md:items-left -m-2 md:m-0">
        <h1 className="text-xl">{title}</h1>
        <div className="text-sm text-gray-400">
          <p>{experience}</p>
          <p>{list}</p>
        </div>
      </div>
    </div>
  );
}
