import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./message.scss";

const MessageBox = ({ admin }) => {
  const [complaint, setComplaint] = useState([]);
  const { currentUser } = useSelector(({ userReducer }) => userReducer);

  const getComplaint = async (id) => {
    console.log(id);
    let get;
    if (id) {
      get = await fetch(`api/complaint/get-complaint-of-user/${id}`);
    } else {
      get = await fetch("api/complaint/get-complaint");
    }
    if (get.status === 200) {
      const jsonGet = await get.json();
      setComplaint(jsonGet.data);
    } else {
      alert("error");
    }
  };
  useEffect(() => {
    if (admin) {
      getComplaint();
    } else {
      getComplaint(currentUser?._id);
      console.log("else");
    }
  }, []);
  return (
    <div class="message">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        {complaint.map((data, key) => {
          console.log(data);
          return (
            <>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${key}`}
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <span>
                        Subject-{`>`} {data.subject}
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${key}`}
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <div className="name">Name:{data.user.displayName}</div>
                      Message: {data.message}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MessageBox;
