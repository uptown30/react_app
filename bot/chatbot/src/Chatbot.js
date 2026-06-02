import React, { useState } from "react";
import axios from "axios";
import "./Chatbot.css";

function Chatbot() {

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {

        if (message.trim() === "") {
            return;
        }

        // Add user message
        const userMessage = {
            sender: "user",
            text: message
        };

        setMessages((prev) => [...prev, userMessage]);

        try {

            const response = await axios.post(
                "http://localhost:8080/api/assistant/chat",
                {
                    message: message
                }
            );

            const botMessage = {
                sender: "bot",
                text: response.data.response
            };

            setMessages((prev) => [...prev, botMessage]);

        } catch (error) {

            const errorMessage = {
                sender: "bot",
                text: "Error connecting to server"
            };

            setMessages((prev) => [...prev, errorMessage]);
        }

        setMessage("");
    };

    return (

        <div className="chat-container">

            <h1>Flight Reservation Assistant</h1>

            <div className="chat-box">

                {messages.map((msg, index) => (

                    <div
                        key={index}
                        className={
                            msg.sender === "user"
                                ? "user-message"
                                : "bot-message"
                        }
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="input-area">

                <input
                    type="text"
                    placeholder="Ask about flights..."
                    value={message}
                    onChange={(e) =>
                        setMessage(e.target.value)
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
                />

                <button onClick={sendMessage}>
                    Send
                </button>

            </div>
        </div>
    );
}

export default Chatbot;