import React from "react";
import { getAll, newPost } from "./api/api";
import { useQuery, useMutation } from "@tanstack/react-query";

const Tanstack = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const getData = useQuery({
    queryKey: ["socialMediaPost"],
    queryFn: getAll,
  });
  const uploadData = useMutation({
    mutationFn: newPost,
  });

  const actions = () => {
    uploadData.mutate({
      title: title,
      description: description,
    });
  };

  return (
    <div>
      <center style={{ marginTop: "100px" }}>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Enter your title"
        />
        <br />
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          style={{ marginTop: "20px" }}
          type="text"
          placeholder="Enter your description"
        />
        <br />

        <button onClick={actions} style={{ marginTop: "20px" }}>
          upload
        </button>

        <div>
          <h1>view your post below</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            {getData?.data?.map((e: any) => (
              <div
                key={e._id}
                style={{
                  width: "300px",
                  height: "300px",
                  backgroundColor: "aliceblue",
                  marginLeft: "30px",
                  marginRight: "30px",
                  marginBottom: "30px",
                  boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1)",
                }}
              >
                <h3> {e.title}</h3>
                <pre>{e.description} </pre>
              </div>
            ))}
          </div>
        </div>
      </center>
    </div>
  );
};

export default Tanstack;
