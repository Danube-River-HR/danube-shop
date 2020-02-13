import React from "react";
import {
  Route,
  Switch,
  useParams,
  Link,
  BrowserRouter as Router
} from "react-router-dom";
function Routing() {
  let { id } = useParams();
  console.log(id);
  return (this.setState(
    {
      currentProductId: id
    }))
}

export default Routing;
