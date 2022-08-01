import React from 'react'
import {List,ListItem,ListItemText} from '@material-ui/core';
import {db} from './firebase';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  return (
    <div>
    
      <List className='list'>
        <ListItem>
            <ListItemText primary="👇"  secondary={props.todo.todo}/>
        </ListItem>
        <DeleteForeverIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()} />
        
        
      </List>
      
    </div>
  )
}

export default Todo;
