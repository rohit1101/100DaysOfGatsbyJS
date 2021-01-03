import React from "react"

const User = ({ userStyles, userName, excerpt, avatar }) => (
  <div className={userStyles.user}>
    <img src={avatar} className={userStyles.avatar} alt="From S3" />
    <div className={userStyles.description}>
      <h2 className={userStyles.username}>{userName}</h2>
      <p className={userStyles.excerpt}>{excerpt}</p>
    </div>
  </div>
)

export default User
