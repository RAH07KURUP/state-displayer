// AvatarWithStatus.js

import React from "react";
import styles from "./Avatar.module.css";

const AvatarWithStatus = ({ statusColor, grouping, indashBoard }) => {
  if (!indashBoard) return null; // Early return if not in the dashboard

  return (
    <div className={styles.avatarContainer}>
      <img
        src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg"
        alt="User Avatar"
        className={styles.avatar}
      />
      <span
        className={styles.status}
        style={{ backgroundColor: statusColor }}
        aria-label={`Status: ${statusColor}`}
      />
    </div>
  );
};

export default AvatarWithStatus;
