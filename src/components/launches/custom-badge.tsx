import React from "react";
import { Badge } from "react-bootstrap";

enum BadgeVarient {
    primary = "primary",
    secondary = "secondary",
    success = "success",
    danger = "danger",
    warning = "warning",
    info = "info",
    light = "light",
    dark = "dark"
  }
  
  const StatusBadge = ({ _launch }: any) => {
    let badgeText = _launch.launch_success ? "success" : "fail";
    let badgeVarient: BadgeVarient;
  
    if (_launch.launch_success) {
      badgeVarient = BadgeVarient.success;
    } else if (_launch.launch_success == null) {
      badgeVarient = BadgeVarient.secondary;
      badgeText = "unknown";
    } else {
      badgeVarient = BadgeVarient.danger;
    }
  
    return (
      <Badge pill variant={badgeVarient}>
        {badgeText.toUpperCase()}
      </Badge>
    );
  };

  export default StatusBadge;