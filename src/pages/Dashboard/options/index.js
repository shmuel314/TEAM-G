import FunctionBtn from "../FunctionBtn";
import { FiLock } from "react-icons/fi";
import { FcReading } from "react-icons/fc";
import { ImEyePlus } from "react-icons/im";
import { BsBook } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

export default function Options() {
  return (
    <>
      <div className="out">
        <div className="in">
          <FunctionBtn name="Train Reading" icon={<FcReading />} />
        </div>
      </div>
      <div className="out">
        <div className="in">
          <FunctionBtn name="Train Focus" icon={<ImEyePlus />} />
        </div>
      </div>
      <div className="out">
        <div className="in">
          <FunctionBtn
            name="Weekly Assessment"
            lock={<FiLock />}
            icon={<FaClipboardList />}
          />
        </div>
      </div>
      <div className="out">
        <div className="in">
          <FunctionBtn name="Freestyle" icon={<BsBook />} />
        </div>
      </div>
    </>
  );
}
