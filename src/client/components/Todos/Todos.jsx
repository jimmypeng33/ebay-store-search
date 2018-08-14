import React from 'react'
import TodosList from './TodosList'
import TodosCreate from './TodosCreate'
import Grid from "@material-ui/core/es/Grid/Grid";

const Todos = props => (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <TodosList/>
        <TodosCreate/>
      </Grid>
    </Grid>
  </div>
)

export default Todos