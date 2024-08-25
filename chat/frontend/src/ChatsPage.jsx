/*import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'; // Ensure this path is correct

const ChatsPage = ({ user }) => {
  const chatProps = useMultiChatLogic(
    'bfda0faa-5314-4ecd-ac06-bc3864dc61b0', 
    user.username, 
    user.secret
  );

  return (
    <div style={{ height: '100vh' }}>
      {}
      <MultiChatSocket {...chatProps} />
      
      {}
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  );
};

export default ChatsPage;
*/
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="bfda0faa-5314-4ecd-ac06-bc3864dc61b0"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;