import "./user.css"

export default function User({children, user_avatar}){
    return(
        <div className="user">
            <img src={user_avatar} />
            <p><span>{children}</span></p>
        </div>
    )
}