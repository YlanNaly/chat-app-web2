
const GlobalChatPage = () => {
    return(
        <div className='chat'>
          <div className='user-chat'>
            <div className="user-chat-header">USER</div>
            <div className='messages'>
            </div>
            <div className='input-area'>
              <input type="text" className='message-input'/>
              <button className='send' type='button'>send</button>
            </div>
          </div>
        </div>
    )
};

export default GlobalChatPage;
