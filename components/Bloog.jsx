import { useState } from "react";

const Blog = () => {
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [author, setAuthor] = useState("");

  const save = () => {
    setJudul("");
    setIsi("");
    setAuthor("");
  };
  return (
    <div>
      <div className="mb-3">
        {judul}
        <label htmlFor="exampleInputEmail1" className="form-label">
          Judul
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
      </div>
      <div className="form-floating">
        {isi}
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: 100 }}
          defaultValue={""}
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        />
        <label htmlFor="floatingTextarea2">Isi</label>
      </div>

      <div className="mb-3 form-check"></div>

      <div className="form-floating">
        {author}
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          defaultValue={""}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label htmlFor="floatingTextarea">Author</label>
      </div>

      <button type="submit" className="btn btn-primary" onClick={save}>
        Submit
      </button>
    </div>
  );
};

export default Blog;
