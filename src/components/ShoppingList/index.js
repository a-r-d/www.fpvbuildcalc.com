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
import ReactTooltip from 'react-tooltip'
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';


import './index.css'

const ShoppingList = (props) => {
  return (
    <div className="ShoppingList">
      <div>
        <Paper zDepth={1} style={{padding: '1em'}}>
          <p>
            FPV Build Calculator is here to help estimate your next build.
            Simply check the boxes of the components you want to add and they will
            be recorded and added up below.
          </p>
          <p >
            All of the components listed are geared toward miniquad racing and
            freestyle, none of the frames are larger than 250mm or smaller than 200mm
          </p>
        </Paper>
      </div>
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
                <TableRowColumn style={{padding: '5px', fontSize: '1.4rem' }}>
                  <FontIcon data-tip data-for="EstimateTotalTooltip" className="material-icons" style={{color: '#999', fontSize: '0.7em'}}>help</FontIcon>
                  Est. Total:
                  <ReactTooltip id="EstimateTotalTooltip" type="dark" effect="solid" >
                    <p>
                      These prices are not guaranteed to be up to date, but they should be pretty close
                    </p>
                  </ReactTooltip>
                </TableRowColumn>
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
          {
            props.products.length > 0 ?
              <RaisedButton
                label="Remove All Items" style={{
                  margin: 12,
                }}
                onClick={() => props.removeAllItems()} />
                : null
          }
        </CardActions>
      </Card>

    </div>
  )
}

export default ShoppingList;
