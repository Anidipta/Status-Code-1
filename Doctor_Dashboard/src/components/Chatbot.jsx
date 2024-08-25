import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa'; 
const conversations = [
  {
    question: "👋 Welcome to MediTrack! How can I assist you today?",
    responseType: "choices",
    responses: [
      { text: "I need help with registration.", botReply: "To register, please visit our registration page.", next: 1 },
      { text: "I'm having trouble logging in.", botReply: "If you're having trouble logging in, make sure your credentials are correct or reset your password.", next: 2 },
      { text: "Tell me about the features of MediTrack.", botReply: "MediTrack offers a comprehensive suite of features including health tracking, appointment scheduling, and personalized medical advice.", next: 3 },
      { text: "I have a question about my health.", botReply: "Please describe your health concern, and I can direct you to the right resources.", next: 4 },
      { text: "I need to contact support.", botReply: "You can contact our support team through the 'Help' section on our website.", next: 5 }
    ],
  },
  {
    question: "Would you like more information on how to use MediTrack?",
    responseType: "choices",
    responses: [
      { text: "Yes, please.", botReply: "You can find user guides and tutorials on our help page.", next: 6 },
      { text: "No, I'm good.", botReply: "Great! If you have any other questions, feel free to ask.", next: 7 }
    ],
  },
  {
    question: "Do you have any issues with account registration?",
    responseType: "choices",
    responses: [
      { text: "Yes, I'm having trouble registering.", botReply: "Please make sure all required fields are filled out correctly. If the problem persists, try refreshing the page or contacting support.", next: 8 },
      { text: "No, everything is fine.", botReply: "Glad to hear that! If you need any further assistance, just let me know.", next: 9 }
    ],
  },
  {
    question: "Are you experiencing problems logging in?",
    responseType: "choices",
    responses: [
      { text: "Yes, I can't log in.", botReply: "Please check your email and password. If you forgot your password, use the 'Forgot Password' option to reset it.", next: 10 },
      { text: "No, I can log in fine.", botReply: "Awesome! If you encounter any other issues, feel free to reach out.", next: 11 }
    ],
  },
  {
    question: "Do you need help with scheduling an appointment?",
    responseType: "choices",
    responses: [
      { text: "Yes, how do I schedule an appointment?", botReply: "To schedule an appointment, go to the 'Appointments' section and follow the instructions to choose a date and time.", next: 12 },
      { text: "No, I don't need help with that.", botReply: "Alright. If you have other questions, just ask!", next: 13 }
    ],
  },
  {
    question: "Would you like information about our privacy policy?",
    responseType: "choices",
    responses: [
      { text: "Yes, please.", botReply: "You can read our privacy policy on the 'Privacy' page of our website.", next: 14 },
      { text: "No, thanks.", botReply: "Okay. If you have other questions, feel free to ask!", next: 15 }
    ],
  },
  {
    question: "Are you interested in feedback about our services?",
    responseType: "choices",
    responses: [
      { text: "Yes, I want to provide feedback.", botReply: "We appreciate your feedback! Please visit the 'Feedback' section to leave your comments.", next: 16 },
      { text: "No, I'm not interested.", botReply: "No problem. If you need any help, just let me know!", next: 17 }
    ],
  },
  {
    question: "Do you have any other questions or concerns?",
    responseType: "choices",
    responses: [
      { text: "Yes, I have more questions.", botReply: "Please go ahead and ask your questions, and I'll do my best to help.", next: 18 },
      { text: "No, that's all for now.", botReply: "Thank you for using MediTrack! Have a wonderful day!", next: 19 }
    ],
  },
  {
    question: "Thank you for chatting with MediTrack! Have a great day!",
    responseType: "end",
    responses: []
  }
];

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: conversations[0]?.question || "How can I help you?", fromBot: true }]);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false); // State to track chat interface visibility

  const handleResponse = (response) => {
    setMessages([...messages, { text: response.text, fromBot: false }]);
    setTimeout(() => {
      const botReply = response.botReply || "Sorry, I didn't understand that.";
      setMessages(prev => [...prev, { text: botReply, fromBot: true }]);
      const nextIndex = response.next;
      if (nextIndex !== null && conversations[nextIndex]) {
        setTimeout(() => {
          setMessages(prev => [...prev, { text: conversations[nextIndex]?.question || "How can I assist you?", fromBot: true }]);
          setConversationIndex(nextIndex);
        }, 1000);
      }
    }, 1000);
  };

  return (
    <>
      {/* Bot Icon */}
      <div style={styles.botIconContainer} onClick={() => setIsChatOpen(!isChatOpen)}>
        <FaRobot size={50} style={styles.botIcon} />
      </div>

      {/* Chat Interface */}
      {isChatOpen && (
        <div style={styles.chatbotContainer}>
          <div style={styles.chatWindow}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={msg.fromBot ? styles.botMessage : styles.userMessage}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div style={styles.inputArea}>
            {conversations[conversationIndex]?.responseType === "choices" && (
              <div style={styles.responseChoices}>
                {conversations[conversationIndex]?.responses.map((response, index) => (
                  <button
                    key={index}
                    style={styles.choiceButton}
                    onClick={() => handleResponse(response)}
                  >
                    {response.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// Styles with the added bot icon and updated layout
const styles = {
  botIconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    backgroundColor: '#42A5F5',
    padding: '10px',
    borderRadius: '50%',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1001, // Ensures the icon is above other content
  },
  botIcon: {
    color: '#FFFFFF',
  },
  chatbotContainer: {
    position: 'fixed',
    bottom: '80px', // Adjusted to be above the icon
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '350px',
    height: '500px',
    borderRadius: '20px',
    backgroundColor: '#E3F2FD', // Light blue background for a calm, medical theme
    border: '2px solid #42A5F5',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    zIndex: 1000, // Ensure it is below the bot icon
    overflow: 'hidden' // Ensures no overflow of content
  },
  chatWindow: {
    flexGrow: 1,
    padding: '20px',
    overflowY: 'auto',
    borderBottom: '2px solid #42A5F5'
  },
  botMessage: {
    marginBottom: '15px',
    padding: '10px 15px',
    borderRadius: '20px',
    maxWidth: '70%',
    backgroundColor: '#42A5F5', // Blue background for bot messages
    color: 'white',
    alignSelf: 'flex-start'
  },
  userMessage: {
    marginBottom: '15px',
    padding: '10px 15px',
    borderRadius: '20px',
    maxWidth: '70%',
    backgroundColor: '#81C784', // Light green background for user messages
    color: 'black',
    alignSelf: 'flex-end'
  },
  inputArea: {
    padding: '10px',
    backgroundColor: '#FFFFFF'
  },
  responseChoices: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  choiceButton: {
    padding: '10px 15px',
    backgroundColor: '#42A5F5', // Matching blue for the buttons
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default Chatbot;