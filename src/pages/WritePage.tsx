import Editor from "components/Editor";
import { Link } from "react-router-dom";

const WritePage = () => {
  return (
    <section>
      <div className="sticky inset-0 flex p-4 border-b-2 bg-white items-center justify-between z-10">
        <h2 className="text-2xl">
          <Link to="/">Petever</Link>
        </h2>
        <button className="bg-slate-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-white rounded-full hover:shadow-2xl hover:bg-gray-100">
          발행
        </button>
      </div>
      <div className="mx-auto" style={{ width: 860 }}>
        <select
          name=""
          id=""
          style={{
            margin: "30px 0",
            border: "1px solid #cccc",
            padding: "5px 10px",
          }}
        >
          <option value="">CULTURE</option>
          <option value="">HEALTH</option>
          <option value="">FOOD</option>
        </select>
        <Editor />
      </div>
    </section>
  );
};

export default WritePage;
