import { Editor } from "../components/Editor/Editor";

const WritePage = () => {
  return (
    <section>
      <div className="sticky inset-0 flex p-4 border-b-2 bg-white items-center justify-between z-10">
        <h2 className="text-2xl">Petever</h2>
        <button className="bg-slate-500 px-5 py-3 text-sm shadow-sm font-medium tracking-wider  text-white rounded-full hover:shadow-2xl hover:bg-gray-100">
          발행
        </button>
      </div>
      <Editor />
    </section>
  );
};

export default WritePage;
