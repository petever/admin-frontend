import axios from "axios";
import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const PostWrite = () => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState("");

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: [] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["link", "image", "video"],
        ],
      },
    }),
    []
  );
  const formats = useMemo(
    () => [
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "size",
      "color",
      "list",
      "bullet",
      "indent",
      "align",
      "link",
      "image",
      "video",
    ],
    []
  );

  return (
    <section>
      <div>
        <h2>Petever</h2>
        <button>발행</button>
        <div>
          <input
            type="text"
            placeholder="제목을 입력해주세요."
            maxLength={30}
          />
        </div>
        <ReactQuill
          ref={(element) => {
            if (element !== null) {
              QuillRef.current = element;
            }
          }}
          value={contents}
          onChange={setContents}
          modules={modules}
          formats={formats}
          theme="snow"
          placeholder="내용을 입력해주세요."
        />
      </div>
    </section>
  );
};

export { PostWrite };
