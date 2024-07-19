import { PROJECTS } from "../Contents/content";
const Project = () => {
  return (
    <div className="border-b border-white-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div className="">
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                className="mb-6 rounded"
                src={item.image}
                width={350}
                height={350}
                alt={item.title}
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{item.title}</h6>
              <p className="mb-4 text-neutral-400">{item.description}</p>
              {item.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
