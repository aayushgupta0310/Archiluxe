import { Input } from "antd";
import SearchIcon from "../../assets/svg-icons/search.svg";
import ImageUpload from "../../assets/svg-icons/image-upload.svg";
import { useNavigate } from "react-router";

const SearchForm = ({ onClick }) => {
  return (
    <div className="px-9 py-[10px] bg-white rounded-[4px] form-box-shadow flex items-center justify-between">
      <div className="flex items-center gap-5 w-4/5">
        <img src={SearchIcon} />
        <Input
          placeholder="Search for materials..."
          className="outline-none border-none focus-shadow-none text-[#CDCDCD] font-bold"
        />
      </div>
      <div className="pl-10 border-l border-[#CDCDCD]">
        <div
          className="flex flex-col gap-2 items-center py-2 cursor-pointer"
          onClick={onClick}
        >
          <img src={ImageUpload} className="max-w-[30px] w-full" />
          <div className="text-xs font-bold text-[#8D8D8D]">
            search by image
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
