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
            <ListItem component={Link} to="profile">
              <Button variant="contained">Profile</Button>
            </ListItem>

            {users.data.role === "admin" && (
              <ListItem component={Link} to="articles">
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