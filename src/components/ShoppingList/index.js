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
        <CardHeader className="ShoppingListHeader" style={{paddingBottom: '0px'}}>
            <h3>Shopping List</h3>
          </CardHeader>
        <CardText>
        {
          props.products.length > 0 ?
          <Table multiSelectable={true} selectable={true}
          style={{tableLayout: 'auto'}}
          className="TableComponent"
          onCellClick={(row, col) => {
            if(col === -1) {
              console.log("A checkbox was clicked for row", row, props);
              props.onProductDeselect(props.products[ row ])
            }
          }}>
            <TableHeader displayRowCheckbox={true} displaySelectAll={false} enableSelectAll={false}>
              <TableRow>
                <TableHeaderColumn style={{padding: '5px'}}>Product</TableHeaderColumn>
                <TableHeaderColumn style={{padding: '5px', textAlign: 'right'}}>Price</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={true} deselectOnClickaway={false}>
              {
                props.products.map((product, i) => {
                  return (
                    <TableRow selected={true} key={i}>
                      <TableRowColumn  style={{padding: '5px', whiteSpace: 'wrap'}}>{ product.name }</TableRowColumn>
                      <TableRowColumn  style={{padding: '5px', textAlign: 'right'}}>{ '$' + product.price.toFixed(2) }</TableRowColumn>
                    </TableRow>
                  )
                })
              }
            </TableBody>
            <TableFooter className="ProductTableFooter">
              <TableRow style={{fontWeight: 900, fontSize: '1.4rem'}}>
                <TableRowColumn style={{padding: '5px', fontSize: '1.4rem' }}>Total:</TableRowColumn>
                <TableRowColumn style={{padding: '5px', textAlign: 'right', fontSize: '1.4rem'}}>
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
