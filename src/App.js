// App.js File 
import React, { Component } from "react"; 
import "bootstrap/dist/css/bootstrap.css"; 
import Row from "react-bootstrap/Row"; 
import Col from "react-bootstrap/Col"; 
import Button from "react-bootstrap/Button"; 
import InputGroup from "react-bootstrap/InputGroup"; 
import FormControl from "react-bootstrap/FormControl"; 
import ListGroup from "react-bootstrap/ListGroup"; 

class App extends Component { 
	constructor(props) { 
		super(props); 
		this.state = { 
			userInput: "", 
			list: [], 
		}; 
	} 

	updateInput(value) { 
		this.setState({ 
			userInput: value, 
		}); 
	} 

	addItem() { 
		if (this.state.userInput !== "") { 
			const userInput = { 


				value: this.state.userInput, 
			}; 
			const list = [...this.state.list]; 
			list.push(userInput); 

			this.setState({ 
				list, 
				userInput: "", 
			}); 
		} 
	} 

	render() { 
		return ( 
			
				

      <><h1 style={{ color: "BLACK",textAlign:"center" }}>TODO LIST</h1><Col md={{ span: 5, offset: 4 }}>
        <InputGroup className="mb-3">
          <FormControl

            value={this.state.userInput}
            onChange={(item) => this.updateInput(item.target.value)} />
          <InputGroup>
            <Button
              onClick={() => this.addItem()}
            >
              ADD
            </Button>
          </InputGroup>
        </InputGroup>
      </Col><Row>
          <Col md={{ span: 5, offset: 4 }}>
            <ListGroup>
              {}
              {this.state.list.map((item, index) => {
                return (
                  <div key={index}>
                    <ListGroup.Item
                      variant="dark"
                      action
                    >
                      {item.value}
                      <span>


                      </span>
                    </ListGroup.Item>
                  </div>
                );
              })}
            </ListGroup>
          </Col>
        </Row></> 
			 
		); 
	} 
} 

export default App; 
