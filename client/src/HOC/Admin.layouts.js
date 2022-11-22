import  { Link } from "react-router-dom"
import {
List,
ListItem,
ListItemText
} from "@mui/material";

export const AdminLayout = (props) => {
  return (
    <section className ="row adminLayout">
        <nav>
            <List>
                <ListItem  components={Link} to="dashboard/profile">
                    <ListItemText primary="Profile"></ListItemText>
                </ListItem>
            </List>
        </nav>

        <main role="main" className>
        {props.children}
        </main>
    </section>
  )
}