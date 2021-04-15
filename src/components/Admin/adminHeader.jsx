import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
const AdminHeader = () => {
  const {url} = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to="/admin/productManagement">Manage Products </Link>
        </li>
        <li>
          <Link to="/admin/accountManagement">Manage Accounts </Link>
        </li>
        <li>
          <Link to="/admin/contactManagement">Manage Contact </Link>
        </li>
        <li>
          <Link to="/admin/orderManagement">Manage Order </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminHeader;
