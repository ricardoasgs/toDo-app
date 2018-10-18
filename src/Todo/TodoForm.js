import React from "react";

import Grid from "../Template/Grid";
import IconButton from "../Template/IconButton";

export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        id="description"
        className="form-control"
        placeholder="Adicione uma Tarefa"
        onChange={props.handleChange}
        value={props.description}
      />
    </Grid>

    <Grid cols="12 3 2">
      <IconButton styles="primary" icon="plus" onClick={props.handleAdd} />
    </Grid>
  </div>
);
