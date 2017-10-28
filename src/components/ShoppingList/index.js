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
  return (
    <div className="ShoppingList">
      <Card>
        <CardHeader
          title="Your Shopping List"
        />
        <CardText>
        <Table multiSelectable={false} selectable={false}>
            <TableHeader displayRowCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn>Product</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {
                Object.keys(Frames).map((key, i) => {
                  return (
                    <TableRow key={i}>
                      <TableRowColumn>{ Frames[ key ].name }</TableRowColumn>
                      <TableRowColumn>{ '$' + Frames[ key ].price.toFixed(2) }</TableRowColumn>
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
                    ' $' + Object.keys(Frames).map((key, i) => {
                      return Frames[ key ].price
                    }).reduce((a, b) => {
                      return a + b
                    }).toFixed(2)
                }
                </TableRowColumn>
              </TableRow>
            </TableFooter>
          </Table>
        </CardText>
        <CardActions>

        </CardActions>
      </Card>
    </div>
  )
}

export default ShoppingList;
