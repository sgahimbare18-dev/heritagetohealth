import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useSpeechSynthesis } from 'react-speech-kit';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: '👋 Hello! I\'m Clara, your guide from Heritage to Health. We help Maasai women and girls live healthier, more confident lives through menstrual hygiene education and reusable pad training. What would you like to learn about today? 1️⃣ Reproductive Health Education 2️⃣ Reusable Pads 3️⃣ Our Community Projects 4️⃣ How to Support Us', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const { speak, voices } = useSpeechSynthesis();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setInput(transcript);
    }
  }, [transcript]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim()) return;
    const userMessage = { text: messageText, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    resetTranscript();

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { message: messageText, userId: 'anonymous' });
      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);

      // Speak the bot's response
      const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('Zira') || voice.name.includes('Susan'));
      speak({ text: response.data.reply, voice: femaleVoice || voices[0] });
    } catch (error) {
      const errorMessage = { text: 'Sorry, I couldn\'t respond right now. Please try again later.', sender: 'bot' };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleVoiceInput = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
      if (transcript) {
        sendMessage(transcript);
      }
    } else {
      SpeechRecognition.startListening({ continuous: false });
      setIsListening(true);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    console.warn('Browser does not support speech recognition.');
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button onClick={toggleChat} className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors">
        💬
      </button>
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-white border rounded-lg shadow-xl flex flex-col">
          <div className="bg-green-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold">Chat with Clara</h3>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg max-w-xs ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex mb-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type your message..."
              />
              {browserSupportsSpeechRecognition && (
                <button
                  onClick={handleVoiceInput}
                  className={`ml-2 p-2 rounded-lg ${listening ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'} hover:opacity-80`}
                  title={listening ? 'Stop listening' : 'Start voice input'}
                >
                  🎤
                </button>
              )}
            </div>
            <button onClick={() => sendMessage()} className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition-colors">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
