import  { Link } from "react-router-dom"
import {
List,
ListItem,
ListItemText,
Button
} from "@mui/material";

import { useSelector } from "react-redux"

export const AdminLayout = (props) => {

    const users = useSelector( state=>state.users);

  return (
    <section className="row adminLayout">
      <nav className="col-md-2 d-none d-md-block sidebar">
        <div>
          <List>
            <ListItem components={Link} to="dashboard/profile">
              <Button variant="contained">Profile</Button>
            </ListItem>

            {users.data.role === "admin" && (
              <ListItem components={Link} to="dashboard/articles">
                <Button variant="contained">Articles</Button>
              </ListItem>
            )}
          </List>
        </div>
      </nav>

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
        {props.children}
      </main>
    </section>
  );
}