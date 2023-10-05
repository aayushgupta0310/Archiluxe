import { Collapse } from "antd";
import CollapseIcon from "../../assets/svg-icons/collpase-icon.svg";

const dummyItems = [
  {
    key: "1",
    label: (
      <div className="flex w-full justify-end items-start">
        <p>
          How does the AI system analyze reference images to provide material
          suggestions?
        </p>
        <img src={CollapseIcon} alt="collpase" />
      </div>
    ),
    children: (
      <p>
        The AI system utilizes advanced computer vision algorithms to analyze
        reference images uploaded by users. It examines various visual elements
        such as textures, colors, patterns, and shapes within the furniture or
        household items depicted in the image.
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex w-full justify-end items-start">
        <p>
          Can I save and organize my favorite materials or create collections on
          the website?
        </p>
        <img src={CollapseIcon} alt="collpase" />
      </div>
    ),
    children: (
      <p>
        The AI system utilizes advanced computer vision algorithms to analyze
        reference images uploaded by users. It examines various visual elements
        such as textures, colors, patterns, and shapes within the furniture or
        household items depicted in the image.
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex w-full justify-end items-start">
        <p>
          How frequently is the material database updated with new materials and
          suppliers?
        </p>
        <img src={CollapseIcon} alt="collpase" />
      </div>
    ),
    children: (
      <p>
        The AI system utilizes advanced computer vision algorithms to analyze
        reference images uploaded by users. It examines various visual elements
        such as textures, colors, patterns, and shapes within the furniture or
        household items depicted in the image.
      </p>
    ),
  },
];

const ComponentCollapse = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse items={dummyItems} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default ComponentCollapse;
