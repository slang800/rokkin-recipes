import React from 'react'

const NotFound = ({ verb }) => (
  <div id='recipe'>
    <h1>Recipe not found</h1>
    <p>Cannot {verb} the recipe at the URL you requested. Maybe you deleted it or cleared out your browser cache? Copying links between browsers will not work because your recipes are only stored in the browser that you are using. They are not synced to a database.</p>
  </div>
)

export default NotFound
