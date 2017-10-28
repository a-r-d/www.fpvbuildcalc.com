import React from 'react';
import {Card, CardActions, CardHeader,CardText} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import './index.css'

const ShoppingList = (props) => {
  return (
    <div className="ShoppingList">
      <Card>
        <CardHeader className="ShoppingListHeader">
            <h3>Shopping List</h3>
          </CardHeader>
        <CardText>
        {
          props.products.length > 0 ?
          <Table multiSelectable={true} selectable={true}
          onCellClick={(row, col) => {
            if(col === -1) {
              console.log("A checkbox was clicked for row", row, props);
              props.onProductDeselect(props.products[ row ])
            }
          }}>
            <TableHeader displayRowCheckbox={true} displaySelectAll={false} enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Product</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={true}>
              {
                props.products.map((product, i) => {
                  return (
                    <TableRow selected={true} key={i}>
                      <TableRowColumn>{ product.name }</TableRowColumn>
                      <TableRowColumn>{ '$' + product.price.toFixed(2) }</TableRowColumn>
                    </TableRow>
                  )
                })
              }
            </TableBody>
            <TableFooter>
              <TableRow style={{fontWeight: 900, fontSize: '1.4rem'}}>
                <TableRowColumn>Total:</TableRowColumn>
                <TableRowColumn>
                {
                    ' $' + props.products.map((product, i) => {
                      return product.price
                    }).reduce((a, b) => {
                      return a + b
                    }).toFixed(2)
                }
                </TableRowColumn>
              </TableRow>
            </TableFooter>
          </Table>
          : <div>No products Selected</div>
        }
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    </div>
  )
}

export default ShoppingList;
