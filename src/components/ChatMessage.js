import React from "react";

const ChatMessage = ( props ) => {
    
    console.log("ChatMessage", props.message)
    return (
        <>
            <p>This is a chat message</p>
            {/* <p>{JSON.stringify(message)}</p> */}
            {/* <p>{message.data.choices[0].text}</p> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisi ut tortor eleifend lobortis ut ac justo. Maecenas elit sapien, venenatis ut eleifend quis, auctor eu nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque vestibulum turpis vel nunc euismod euismod. Suspendisse congue metus in lectus ullamcorper, et lacinia felis iaculis. Mauris at aliquet magna. Vestibulum ultricies, sapien sed facilisis pharetra, nulla odio ultricies massa, et malesuada magna enim non eros. Suspendisse venenatis metus nibh, in tincidunt lorem ornare at. Donec diam nisi, efficitur ac egestas sollicitudin, egestas nec lacus. Sed in ligula ut turpis finibus hendrerit nec vitae mi. Phasellus quam libero, consectetur quis tortor in, blandit posuere justo. Vestibulum eget elit tincidunt, auctor lacus vel, malesuada purus.</p> */}
        </>
    )
}
export default ChatMessage;