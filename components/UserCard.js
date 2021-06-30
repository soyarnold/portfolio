export default function UserCard() {
  return (
    <div id="usercard" className="flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-xs p-4 rounded-3xl md:flex-row">
        <div className="md:-ml-32" style={{ clipPath: "url(#roundedPolygon)" }}>
          <img
            className="w-auto h-48"
            src="https://media-exp3.licdn.com/dms/image/C4E03AQHiLNSXz5uCVg/profile-displayphoto-shrink_800_800/0/1617428469766?e=1630540800&v=beta&t=_jc-_f7qvJNw2HSTbBTgabKnYmgkEPkQ67kJBevqxMo"
            alt="Arnold Perez"
          />
        </div>

        <div className="flex flex-col space-y-4 mt-4 md:ml-4">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-medium">Arnold Perez</h2>
            <p className="text-base font-medium text-gray-400">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center justify-center space-x-3 md:justify-start"></div>
        </div>
      </div>

      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* rounded polygon generator => https://weareoutman.github.io/rounded-polygon/
        polygon size 190 * 190 almost the same size as the image */}
          <clipPath id="roundedPolygon">
            <path d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
