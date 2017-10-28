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

import Frames from '../products/frames'

import './index.css'

const ShoppingList = (props) => {
  console.log('Shopping list props', props)
  return (
    <div className="ShoppingList">
      <Card>
        <CardHeader
          title="Your Shopping List"
        />
        <CardText>
        {
          props.products.length > 0 ?
          <Table multiSelectable={false} selectable={false}>
            <TableHeader displayRowCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Product</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {
                props.products.map((product, i) => {
                  return (
                    <TableRow key={i}>
                      <TableRowColumn>{ product.name }</TableRowColumn>
                      <TableRowColumn>{ '$' + product.price.toFixed(2) }</TableRowColumn>
                    </TableRow>
                  )
                })
              }
            </TableBody>
            <TableFooter>
              <TableRow>
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
