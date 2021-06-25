export default function DemoButton({ title, demo }) {
  return (
    <div>
      <a href={demo} target="blank">
        <button className="rounded-3xl py-2 w-20 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 focus:outline-none">
          {title}
        </button>
      </a>
    </div>
  );
}
