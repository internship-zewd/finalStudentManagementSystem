import React from "react";
import axios from "axios";
import { useState } from "react";

function SendMessage() {
  const [sendTo, setSendTo] = useState("");
  const [receiverList, setReceiverList] = useState([]);
  const [selectedReceiver, setSelectedReceiver] = useState({});
  const [subjectText, setSubjectText] = useState("");
  const [textBody, setTextBody] = useState("");
  const [attachmentFile, setAttachmentFile] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();

    const selReceiversEmail = [];
    receiverList.forEach((receiver, index) => {
      const checkboxValue = selectedReceiver[index];
      if (checkboxValue === true) {
        selReceiversEmail.push(receiver.email);
      }
    });
    const formData = new FormData();

    formData.append("emailAttachment", attachmentFile)
    formData.append("subjectText", subjectText)
    formData.append("textBody", textBody)
    formData.append("selReceiversEmail", JSON.stringify(selReceiversEmail))

    axios
      .post("http://localhost:8081/message/sendEmail", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        if (res.data.success === false) {
          console.log("Error while sending email");
        } else {
          alert("Email sent successfully");
        }
      });
  };

  const handleFetch = (e) => {
    setSendTo(e.target.value);
    axios
      .get("http://localhost:8081/message/fetchReceiver", { sendTo })
      .then((res) => {
        if (res.data.success === false) {
          console.log(res.data.msg);
        } else {
          setReceiverList(res.data);
        }
      });
  };

  const handleSelectedReceiver = (event, receiverIndex) => {
    const { checked } = event.target;
    setSelectedReceiver((prevSelection) => ({
      ...prevSelection,
      [receiverIndex]: checked,
    }));
  };

  const handleFileAttachment = (e) => {
    setAttachmentFile(e.target.files)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Select Receiver</span>
        <select value={sendTo} onChange={handleFetch}>
          <option>All</option>
          <option>Admin</option>
          <option>Manager</option>
          <option>Accountant</option>
          <option>Instructor</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Select</th>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {receiverList.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedReceiver[index] || false}
                    onChange={(event) => {
                      handleSelectedReceiver(event, index);
                    }}
                  />
                </td>
                <td>{index + 1}</td>
                <td>{item.fullIdentification}</td>
                <td>{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span>Subject:</span>
        <textarea
          cols="30"
          rows="10"
          value={subjectText}
          onChange={(e) => {
            setSubjectText(e.target.value);
          }}
        ></textarea>

        <span>Message</span>
        <textarea
          cols="30"
          rows="10"
          value={textBody}
          onChange={(e) => {
            setTextBody(e.target.value);
          }}
        ></textarea>
        <span>Choose file</span>
        <input type="file" multiple onChange={handleFileAttachment}/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default SendMessage;
